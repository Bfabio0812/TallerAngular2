export interface Producto {
  id?: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;

  // 👇 Esto es lo que le dice a TypeScript que puedes usar [key: string]
  [key: string]: string | number | undefined;
}