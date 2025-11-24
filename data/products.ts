// Actualizado con imágenes - 24 nov 2025
import { Product } from '../types';

// LISTA ESTRICTA DE PRODUCTOS (Basada 100% en el PDF)
// Solo se asignan imágenes a los productos que tienen FOTO REAL en el PDF o se han añadido explícitamente.

export const PRODUCTS: Product[] = [
  // --- DEDITOS (GRID SUPERIOR CON FOTOS) ---
  {
    id: 'dedito-pollo-6',
    name: 'Empanada de Pollo x6',
    category: 'Empanadas x6',
    price: 14000,
    image: 'https://drive.google.com/thumbnail?id=1AcdJrGBNcY1YRb9GDqSEJITzUxGpm6ju&sz=w1000',
    description: 'Empanada rellena de pollo. Paquete por 6 unidades.',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'dedito-pollo-queso-6',
    name: 'Empanada Pollo/Queso x6',
    category: 'Empanadas x6',
    price: 14000,
    image: 'https://drive.google.com/thumbnail?id=1ZaHsS6HnUDkNVWn2ooyY7-Y_rrss0Q1I&sz=w400',
    description: 'Empanada rellena de pollo y queso. Paquete por 6 unidades.',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'dedito-carne-6',
    name: 'Empanada de Carne x6',
    category: 'Empanadas x6',
    price: 14000,
    image: 'https://drive.google.com/thumbnail?id=1dtAMLy0cj5aQPIav1RZ3jKu3IDG0Xw3b&sz=w1000',
    description: 'Empanada rellena de carne. Paquete por 6 unidades.',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'dedito-hawaiana-6',
    name: 'Empanada Hawaiana x6',
    category: 'Empanadas x6',
    price: 14000,
    image: 'https://drive.google.com/thumbnail?id=1Tyk-U5uy8Wo7DI7teBmb0jH_z3vYJQTK&sz=w1000',
    description: 'Empanada hawaiana. Paquete por 6 unidades.',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'dedito-maiz-pollo-queso-6',
    name: 'Empanada de Maíz/Pollo/Queso x6',
    category: 'Empanadas x6',
    price: 14000,
    image: 'https://drive.google.com/thumbnail?id=1g1Dliv0GifSGsmuyF1EFZdfc4Gtaip6D&sz=w1000',
    description: 'Masa de maíz con pollo y queso. Paquete por 6 unidades.',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'dedito-jamon-queso-6',
    name: 'Empanada de Jamón/Queso x6',
    category: 'Empanadas x6',
    price: 14000,
    image: 'https://drive.google.com/thumbnail?id=1SvJn_GBDqnCYEzP4w-qs1XUjBHJ-sWu0&sz=w1000',
    description: 'Empanada de jamón y queso. Paquete por 6 unidades.',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'dedito-espinaca-6',
    name: 'Empanada de Espinaca x6',
    category: 'Empanadas x6',
    price: 14000,
    image: 'https://drive.google.com/thumbnail?id=1WVTiyid5TBtzUwYv2UpKj1mXMpzQrvXD&sz=w1000',
    description: 'Queso y cebolla (Espinaca). Paquete por 6 unidades.',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'dedito-ranchera-6',
    name: 'Empanada Ranchera x6',
    category: 'Empanadas x6',
    price: 14000,
    image: 'https://drive.google.com/thumbnail?id=1208q4GxYueIASUKUiGmxA7wBcjzHClN2&sz=w1000',
    description: 'Maíz y queso (Ranchera). Paquete por 6 unidades.',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'dedito-napolitana-6',
    name: 'Empanada Napolitana x6',
    category: 'Empanadas x6',
    price: 14000,
    image: 'https://drive.google.com/thumbnail?id=14io_pwCV3cjnHEeBRCquXbgjZHTPsYpd&sz=w1000',
    description: 'Tomate, queso y orégano. Paquete por 6 unidades.',
    disponible: false,
    mostrarAgotado: true
  },
  {
    id: 'dedito-salvaje-6',
    name: 'Empanada Salvaje x6',
    category: 'Empanadas x6',
    price: 14000,
    image: 'https://drive.google.com/thumbnail?id=1VUNsKMb3y0E9ag37PCpM46RiYva-JTXu&sz=w1000',
    description: 'Chorizo, butifarra, maíz y queso. Paquete por 6 unidades.',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'dedito-platano-6',
    name: 'Empanada de Plátano Maduro x6',
    category: 'Empanadas x6',
    price: 14000,
    image: 'https://drive.google.com/thumbnail?id=1Z34wCi0WqqmFpM67B0xTjFdyH9beaay9&sz=w400',
    description: 'Nueva presentación de plátano maduro.',
    disponible: false,
    mostrarAgotado: true
  },

  // --- PERSONALES (COLUMNA DERECHA CON FOTOS) ---
  {
    id: 'dedito-queso-8-25g',
    name: 'Dedito Queso x8 (25g)',
    category: 'Personales',
    price: 13000,
    image: 'https://drive.google.com/thumbnail?id=18FBch-IwwlZyTH4X3jjXy3bRWXZ__p4-&sz=w400',
    description: 'Dedito de queso tamaño personal (25g).',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'dedito-queso-8-40g',
    name: 'Dedito Queso x8 (40g)',
    category: 'Personales',
    price: 15000,
    image: 'https://drive.google.com/thumbnail?id=1yswqiXwus6_TLGg9x3SXbexqekMYJCH3&sz=w400',
    description: 'Dedito de queso tamaño personal grande (40g).',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'dedito-cazador-7',
    name: 'Dedito Cazador x7',
    category: 'Personales',
    price: 14000,
    image: 'https://drive.google.com/thumbnail?id=19_3CRoEZ02YyIY6C4QTFr19W40fSDMJF&sz=w1000',
    description: 'Dedito con salchicha cazadora.',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'dedito-jamon-7',
    name: 'Dedito Jamón/Queso x7',
    category: 'Personales',
    price: 15000,
    image: 'https://drive.google.com/thumbnail?id=16M_RqDy39p4Pg0MPzDMSyruKMKwRN60T&sz=w1000',
    description: 'Dedito de jamón.',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'dedito-bocadillo-7',
    name: 'Dedito de Bocadillo/Queso x7',
    category: 'Personales',
    price: 14000,
    image: 'https://drive.google.com/thumbnail?id=1BWgmQIiPxCVmmK_ea-3Wdg25VOVQEO8H&sz=w1000',
    description: 'Dedito de bocadillo.',
    disponible: true,
    mostrarAgotado: false
  },

  // --- LISTADOS (ALGUNOS CON FOTO) ---

  // Deditos
  {
    id: 'dedito-queso-25',
    name: 'Deditos Queso x25',
    category: 'Deditos',
    price: 14000,
    image: 'https://drive.google.com/thumbnail?id=18FBch-IwwlZyTH4X3jjXy3bRWXZ__p4-&sz=w400',
    description: 'Paquete x25 unidades.',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'dedito-queso-60',
    name: 'Deditos Queso x60',
    category: 'Deditos',
    price: 32000,
    image: 'https://drive.google.com/thumbnail?id=18FBch-IwwlZyTH4X3jjXy3bRWXZ__p4-&sz=w400',
    description: 'Paquete x60 unidades.',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'dedito-doble-queso-16',
    name: 'Deditos Doble Queso x16',
    category: 'Deditos',
    price: 13000,
    image: 'https://drive.google.com/thumbnail?id=1yswqiXwus6_TLGg9x3SXbexqekMYJCH3&sz=w400',
    description: 'Paquete x16 unidades.',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'dedito-doble-queso-25',
    name: 'Deditos Doble Queso x25',
    category: 'Deditos',
    price: 19000,
    image: 'https://drive.google.com/thumbnail?id=1yswqiXwus6_TLGg9x3SXbexqekMYJCH3&sz=w400',
    description: 'Paquete x25 unidades.',
    disponible: true,
    mostrarAgotado: false
  },

  // Empanadas
  {
    id: 'emp-pollo-18',
    name: 'Empanadas Pollo x18',
    category: 'Empanadas x18',
    price: 14000,
    image: 'https://drive.google.com/thumbnail?id=1AcdJrGBNcY1YRb9GDqSEJITzUxGpm6ju&sz=w1000',
    description: 'Paquete x18 unidades.',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'emp-pollo-queso-18',
    name: 'Empanadas Pollo/Queso x18',
    category: 'Empanadas x18',
    price: 14000,
    image: 'https://drive.google.com/thumbnail?id=1ZaHsS6HnUDkNVWn2ooyY7-Y_rrss0Q1I&sz=w400',
    description: 'Paquete x18 unidades.',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'emp-carne-18',
    name: 'Empanadas Carne x18',
    category: 'Empanadas x18',
    price: 14000,
    image: 'https://drive.google.com/thumbnail?id=1dtAMLy0cj5aQPIav1RZ3jKu3IDG0Xw3b&sz=w1000',
    description: 'Paquete x18 unidades.',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'emp-ranchera-18',
    name: 'Empanadas Ranchera x18',
    category: 'Empanadas x18',
    price: 14000,
    image: 'https://drive.google.com/thumbnail?id=1208q4GxYueIASUKUiGmxA7wBcjzHClN2&sz=w1000',
    description: 'Maíz y queso. Paquete x18 unidades.',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'emp-jamon-queso-18',
    name: 'Empanadas Jamón/Queso x18',
    category: 'Empanadas x18',
    price: 14000,
    image: 'https://drive.google.com/thumbnail?id=1SvJn_GBDqnCYEzP4w-qs1XUjBHJ-sWu0&sz=w1000',
    description: 'Paquete x18 unidades.',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'emp-hawaiana-18',
    name: 'Empanadas Hawaiana x18',
    category: 'Empanadas x18',
    price: 14000,
    image: 'https://drive.google.com/thumbnail?id=1Tyk-U5uy8Wo7DI7teBmb0jH_z3vYJQTK&sz=w1000',
    description: 'Paquete x18 unidades.',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'emp-bocadillo-queso-18',
    name: 'Empanadas Bocadillo/Queso x18',
    category: 'Empanadas x18',
    price: 14000,
    image: 'https://drive.google.com/thumbnail?id=12NiPo4GmApEZhwoHzfg91DzbmVUrmVGA&sz=w400',
    description: 'Paquete x18 unidades.',
    disponible: true,
    mostrarAgotado: false
  },

  // Bolitas y Medallones
  {
    id: 'medallon-salchicha-25',
    name: 'Medallones Salchicha x25',
    category: 'Bolitas y Medallones',
    price: 10000,
    image: 'https://drive.google.com/thumbnail?id=1Uv6hoGasjHQq7eAQe41JXjHnmf3Hghol&sz=w400',
    description: 'Salchicha cazadora. Paquete x25 unidades.',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'bolitas-fenix-20',
    name: 'Bolitas Fénix (Carne) x20',
    category: 'Bolitas y Medallones',
    price: 10000,
    image: 'https://drive.google.com/thumbnail?id=1wOQM5BnSP91Y2_TYkJY5jQBJerFCKigq&sz=w400',
    description: 'Bolitas pequeñas de carne. Paquete x20 unidades.',
    disponible: true,
    mostrarAgotado: false
  },

  // Surtidos
  {
    id: 'surtido-37',
    name: 'Surtidos x60',
    category: 'Surtidos',
    price: 37000,
    image: 'https://drive.google.com/thumbnail?id=1c0JI-U-rq54zvLLF2m8MqLlSl16zvRRt&sz=w400',
    description: 'Deditos, empanadas surtidas, bolitas de carne y medallón de salchicha cazadora. (x60 unidades aprox según gráfico)',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'surtido-42',
    name: 'Surtidos x50',
    category: 'Surtidos',
    price: 42000,
    image: 'https://drive.google.com/thumbnail?id=1E40H9NbQ8yq4ew6FNklUaXIKdlmQn6hC&sz=w400',
    description: 'Deditos doble queso y empanadas surtidas. (x50 unidades aprox según gráfico)',
    disponible: true,
    mostrarAgotado: false
  },
  {
    id: 'surtido-56',
    name: 'Surtidos x100',
    category: 'Surtidos',
    price: 56000,
    image: 'https://drive.google.com/thumbnail?id=1jn3kNvrE958xdmDXnHvOxvZFvGTTMXiB&sz=w400',
    description: 'Deditos, empanadas surtidas, bolitas de carne y medallón de salchicha cazadora. (x100 unidades aprox según gráfico)',
    disponible: true,
    mostrarAgotado: false
  }
];

export const CATEGORIES = Array.from(new Set(PRODUCTS.map(p => p.category)));