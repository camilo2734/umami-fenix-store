import React, { useState, useRef } from 'react';
import { Plus, UtensilsCrossed } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAdd }) => {
  // Si product.image está vacío (porque es solo texto en el PDF), usamos estado de error directamente para mostrar el placeholder
  const [imgError, setImgError] = useState(!product.image);
  const imgRef = useRef<HTMLImageElement>(null);
  
  // Default to true if undefined to be safe, though strict types say boolean
  const isAvailable = product.disponible !== false;
  const isSoldOut = product.mostrarAgotado;

  const animateToCart = (imageElement: HTMLImageElement) => {
    const cartIcon = document.getElementById('cart-icon');
    if (!cartIcon) return;

    const clone = imageElement.cloneNode(true) as HTMLImageElement;
    const rect = imageElement.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();

    clone.style.position = 'fixed';
    clone.style.left = `${rect.left}px`;
    clone.style.top = `${rect.top}px`;
    clone.style.width = `${rect.width}px`;
    clone.style.height = `${rect.height}px`;
    clone.style.zIndex = '9999';
    clone.style.transition = 'all 0.7s ease-in-out';
    clone.style.pointerEvents = 'none';
    clone.style.borderRadius = '0.75rem'; // Opcional: mantener bordes redondeados

    document.body.appendChild(clone);

    // Forzar reflow y activar animación
    requestAnimationFrame(() => {
      clone.style.left = `${cartRect.left + cartRect.width / 2 - 10}px`;
      clone.style.top = `${cartRect.top + cartRect.height / 2 - 10}px`;
      clone.style.width = '20px';
      clone.style.height = '20px';
      clone.style.opacity = '0';
    });

    setTimeout(() => {
      clone.remove();
    }, 700);
  };

  const formattedPrice = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <div className={`group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden h-full ${!isAvailable ? 'opacity-90' : ''}`}>
      {/* Zona de Imagen */}
      <div className={`relative overflow-hidden aspect-[4/3] bg-gray-50 ${!isAvailable ? 'grayscale opacity-75' : ''}`}>
        {!imgError ? (
          <>
            <img
              ref={imgRef}
              src={product.image}
              alt={product.name}
              onError={() => setImgError(true)}
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          /* Placeholder elegante cuando NO hay foto en el PDF */
          <div className="w-full h-full flex flex-col items-center justify-center text-brand-200 bg-brand-50/50">
            <div className="bg-white p-3 rounded-full shadow-sm mb-2">
              <UtensilsCrossed size={24} className="text-brand-400" />
            </div>
            <span className="text-xs font-medium text-brand-400 uppercase tracking-wider">Umami Fenix</span>
          </div>
        )}
        
        {/* Etiquetas superpuestas */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && isAvailable && (
            <span className="bg-brand-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
              NUEVO
            </span>
          )}
          
          {!isAvailable && (
             <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm tracking-wide">
              AGOTADO
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-grow p-4">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className={`font-bold leading-tight line-clamp-2 ${!isAvailable ? 'text-gray-500' : 'text-gray-800'}`}>
            {product.name}
          </h3>
          <span className={`font-bold whitespace-nowrap ${!isAvailable ? 'text-gray-400 line-through' : 'text-brand-600'}`}>
            {formattedPrice}
          </span>
        </div>
        
        <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-grow">
          {product.description || 'Producto congelado listo para freír.'}
        </p>

        <button
          onClick={() => {
            if (isAvailable) {
              onAdd(product);
              if (imgRef.current) {
                animateToCart(imgRef.current);
              }
            }
          }}
          disabled={!isAvailable}
          className={`w-full mt-auto flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg transition-colors duration-200 font-medium text-sm ${
            isAvailable 
              ? 'bg-gray-900 hover:bg-brand-600 text-white active:scale-95' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {isAvailable ? (
            <>
              <Plus size={18} />
              Agregar
            </>
          ) : (
            'No disponible'
          )}
        </button>
      </div>
    </div>
  );
};