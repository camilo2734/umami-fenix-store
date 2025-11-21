import React, { useState, useEffect } from 'react';
import { X, Trash2, Minus, Plus, ShoppingBag, Send, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { CartItem, UserInfo } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  total: number;
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
  onClear: () => void;
}

// Steps for the wizard flow
type WizardStep = 'CART' | 'NAME' | 'ADDRESS' | 'PHONE' | 'PRODUCTS_CONFIRM' | 'PAYMENT';

export const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  cart,
  total,
  onRemove,
  onUpdateQty,
  onClear,
}) => {
  const [step, setStep] = useState<WizardStep>('CART');
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    address: '',
    phone: '',
    paymentMethod: '',
    notes: '',
  });
  const [error, setError] = useState('');

  // Reset to cart view when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setStep('CART'), 300);
      setError('');
    }
  }, [isOpen]);

  const formatPrice = (amount: number) =>
    new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(amount);

  const handleNext = () => {
    setError('');
    
    switch (step) {
      case 'NAME':
        if (!userInfo.name.trim()) {
          setError('Por favor ingresa tu nombre completo.');
          return;
        }
        setStep('ADDRESS');
        break;
      case 'ADDRESS':
        if (!userInfo.address.trim()) {
          setError('Por favor ingresa tu dirección.');
          return;
        }
        setStep('PHONE');
        break;
      case 'PHONE':
        if (!userInfo.phone.trim()) {
          setError('Por favor ingresa tu número de celular.');
          return;
        }
        setStep('PRODUCTS_CONFIRM');
        break;
      case 'PRODUCTS_CONFIRM':
        if (cart.length === 0) {
          setError('Tu carrito está vacío.');
          return;
        }
        setStep('PAYMENT');
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    setError('');
    switch (step) {
      case 'NAME': setStep('CART'); break;
      case 'ADDRESS': setStep('NAME'); break;
      case 'PHONE': setStep('ADDRESS'); break;
      case 'PRODUCTS_CONFIRM': setStep('PHONE'); break;
      case 'PAYMENT': setStep('PRODUCTS_CONFIRM'); break;
      default: break;
    }
  };

  const selectPayment = (method: 'Efectivo' | 'Transferencia') => {
    setUserInfo({ ...userInfo, paymentMethod: method });
    // Auto advance or waiting for user to click send? 
    // Let's set it and they can click the final button.
  };

  const handleFinalize = () => {
    if (!userInfo.paymentMethod) {
      setError('Por favor selecciona un método de pago.');
      return;
    }

    // Generate WhatsApp Message in specific order
    const lines = [
      `Hola, este es mi pedido:`,
      ``,
      `1. Nombre completo: ${userInfo.name}`,
      `2. Dirección: ${userInfo.address}`,
      `3. Número de celular: ${userInfo.phone}`,
      `4. Productos que desea pedir:`,
      ...cart.map(item => `   • ${item.name} (x${item.quantity})`),
      `   (Total: ${formatPrice(total)})`,
      `5. Método de pago: ${userInfo.paymentMethod}`
    ];

    const fullMessage = lines.join('\n');
    const whatsappUrl = `https://wa.me/573022679121?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full animate-slide-in-right">
          
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center gap-2">
              {step !== 'CART' ? (
                <button onClick={handleBack} className="mr-2 text-gray-500 hover:text-brand-600">
                  <ArrowLeft size={20} />
                </button>
              ) : (
                <ShoppingBag className="text-brand-600" />
              )}
              <h2 className="text-lg font-bold text-gray-900">
                {step === 'CART' ? 'Tu Pedido' : 'Asistente de Pedido'}
              </h2>
            </div>
            <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto flex flex-col">
            
            {/* --- STEP: CART (Initial) --- */}
            {step === 'CART' && (
              <>
                <div className="flex-1 px-4 py-6">
                  {cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-gray-400">
                      <ShoppingBag size={64} strokeWidth={1} />
                      <p className="text-lg font-medium">Tu carrito está vacío</p>
                      <button onClick={onClose} className="text-brand-600 font-medium hover:underline">
                        Volver al catálogo
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        {cart.map((item) => (
                          <div key={item.id} className="flex gap-4 bg-white p-2 rounded-lg border border-gray-100">
                            <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                              <img
                                 src={item.image || `https://via.placeholder.com/150?text=${item.name.substring(0,3)}`} 
                                 alt={item.name}
                                 className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                              <div>
                                <h4 className="font-semibold text-gray-900 text-sm leading-tight">{item.name}</h4>
                                <p className="text-brand-600 font-bold text-sm mt-1">{formatPrice(item.price)}</p>
                              </div>
                              <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                                  <button 
                                    onClick={() => onUpdateQty(item.id, -1)}
                                    className="p-1 hover:bg-white hover:shadow-sm rounded text-gray-600 transition-all"
                                  >
                                    <Minus size={14} />
                                  </button>
                                  <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                  <button 
                                    onClick={() => onUpdateQty(item.id, 1)}
                                    className="p-1 hover:bg-white hover:shadow-sm rounded text-gray-600 transition-all"
                                  >
                                    <Plus size={14} />
                                  </button>
                                </div>
                                <button 
                                  onClick={() => onRemove(item.id)}
                                  className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                  title="Eliminar"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-end">
                        <button onClick={onClear} className="text-xs text-red-500 hover:underline flex items-center gap-1">
                          <Trash2 size={12} /> Vaciar carrito
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                {cart.length > 0 && (
                  <div className="p-4 border-t border-gray-100 bg-gray-50">
                     <div className="flex justify-between items-center text-lg font-bold text-gray-900 mb-4">
                        <span>Total</span>
                        <span>{formatPrice(total)}</span>
                      </div>
                      <button
                        onClick={() => setStep('NAME')}
                        className="w-full bg-brand-600 hover:bg-brand-700 text-white py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20 transition-all"
                      >
                        Iniciar Pedido
                      </button>
                  </div>
                )}
              </>
            )}

            {/* --- WIZARD QUESTIONS --- */}
            
            {step !== 'CART' && (
              <div className="flex-1 flex flex-col p-6 animate-fade-in">
                
                {/* Progress Indicator (Optional but nice) */}
                <div className="flex gap-1 mb-8">
                  {['NAME', 'ADDRESS', 'PHONE', 'PRODUCTS_CONFIRM', 'PAYMENT'].map((s, idx) => (
                     <div 
                       key={s} 
                       className={`h-1 flex-1 rounded-full ${
                         ['NAME', 'ADDRESS', 'PHONE', 'PRODUCTS_CONFIRM', 'PAYMENT'].indexOf(step) >= idx 
                         ? 'bg-brand-500' 
                         : 'bg-gray-200'
                       }`}
                     />
                  ))}
                </div>

                <div className="flex-grow flex flex-col justify-center pb-10">
                  
                  {/* Question 1: Name */}
                  {step === 'NAME' && (
                    <div>
                      <label className="block text-xl font-bold text-gray-900 mb-4">
                        1. ¿Cuál es tu nombre completo?
                      </label>
                      <input
                        type="text"
                        autoFocus
                        value={userInfo.name}
                        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                        onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                        className="w-full p-4 text-lg bg-white text-black border-2 border-gray-200 rounded-xl focus:border-brand-500 focus:ring-0 outline-none transition-colors"
                        placeholder="Escribe tu respuesta aquí..."
                      />
                    </div>
                  )}

                  {/* Question 2: Address */}
                  {step === 'ADDRESS' && (
                    <div>
                      <label className="block text-xl font-bold text-gray-900 mb-4">
                        2. ¿Cuál es tu dirección?
                      </label>
                      <input
                        type="text"
                        autoFocus
                        value={userInfo.address}
                        onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                        onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                        className="w-full p-4 text-lg bg-white text-black border-2 border-gray-200 rounded-xl focus:border-brand-500 focus:ring-0 outline-none transition-colors"
                        placeholder="Barrio, calle, número..."
                      />
                    </div>
                  )}

                  {/* Question 3: Phone */}
                  {step === 'PHONE' && (
                    <div>
                      <label className="block text-xl font-bold text-gray-900 mb-4">
                        3. ¿Cuál es tu número de celular?
                      </label>
                      <input
                        type="tel"
                        autoFocus
                        value={userInfo.phone}
                        onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                        onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                        className="w-full p-4 text-lg bg-white text-black border-2 border-gray-200 rounded-xl focus:border-brand-500 focus:ring-0 outline-none transition-colors"
                        placeholder="Ej: 300 123 4567"
                      />
                    </div>
                  )}

                  {/* Question 4: Products Confirmation */}
                  {step === 'PRODUCTS_CONFIRM' && (
                    <div>
                      <label className="block text-xl font-bold text-gray-900 mb-4">
                        4. ¿Estos son los productos que deseas pedir?
                      </label>
                      <div className="bg-gray-50 rounded-xl p-4 max-h-60 overflow-y-auto border border-gray-200 mb-2">
                        <ul className="space-y-2">
                          {cart.map((item) => (
                            <li key={item.id} className="flex justify-between text-sm">
                              <span className="text-gray-800 font-medium">{item.quantity}x {item.name}</span>
                              <span className="text-gray-600">{formatPrice(item.price * item.quantity)}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="border-t border-gray-200 mt-3 pt-3 flex justify-between font-bold text-brand-600">
                          <span>Total</span>
                          <span>{formatPrice(total)}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Question 5: Payment */}
                  {step === 'PAYMENT' && (
                    <div>
                      <label className="block text-xl font-bold text-gray-900 mb-6">
                        5. ¿Método de pago?
                      </label>
                      <div className="grid grid-cols-1 gap-4">
                        <button
                          onClick={() => selectPayment('Efectivo')}
                          className={`p-4 rounded-xl border-2 font-semibold text-left flex items-center justify-between transition-all ${
                            userInfo.paymentMethod === 'Efectivo'
                              ? 'border-brand-500 bg-brand-50 text-brand-700'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          <span>Efectivo</span>
                          {userInfo.paymentMethod === 'Efectivo' && <CheckCircle2 className="text-brand-500" />}
                        </button>
                        
                        <button
                          onClick={() => selectPayment('Transferencia')}
                          className={`p-4 rounded-xl border-2 font-semibold text-left flex items-center justify-between transition-all ${
                            userInfo.paymentMethod === 'Transferencia'
                              ? 'border-brand-500 bg-brand-50 text-brand-700'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          <span>Transferencia</span>
                          {userInfo.paymentMethod === 'Transferencia' && <CheckCircle2 className="text-brand-500" />}
                        </button>
                      </div>
                    </div>
                  )}

                  {error && (
                    <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg animate-pulse">
                      {error}
                    </div>
                  )}
                </div>

                {/* Navigation Buttons */}
                <div className="mt-auto pt-4">
                  {step === 'PAYMENT' ? (
                     <button
                      onClick={handleFinalize}
                      className={`w-full py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all ${
                        userInfo.paymentMethod
                        ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-brand-500/20' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!userInfo.paymentMethod}
                    >
                      <Send size={20} />
                      Enviar Pedido
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="w-full bg-gray-900 hover:bg-brand-600 text-white py-3 px-4 rounded-xl font-bold transition-colors"
                    >
                      {step === 'PRODUCTS_CONFIRM' ? 'Sí, confirmar' : 'Siguiente'}
                    </button>
                  )}
                </div>

              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};