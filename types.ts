export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description?: string;
  image: string; // Path to local asset or URL
  isNew?: boolean;
  disponible: boolean;      // Controla si se puede comprar
  mostrarAgotado: boolean;  // Controla si se muestra cuando no está disponible
}

export interface CartItem extends Product {
  quantity: number;
}

export interface UserInfo {
  name: string;
  address: string;
  phone: string;
  paymentMethod: 'Efectivo' | 'Transferencia' | '';
  notes?: string;
}