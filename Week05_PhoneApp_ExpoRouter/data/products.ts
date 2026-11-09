export interface PhoneColor {
  name: string;
  hex: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  stock: number;
  colors: PhoneColor[];
}

// Bài tập 2: gắn API. Tạo API tại https://mockapi.io rồi dán endpoint vào đây
// (resource "products" có cùng cấu trúc với kiểu Product). Để trống = dùng dữ liệu mẫu.
export const API_URL = "";

const img = (seed: string) => `https://picsum.photos/seed/${seed}/300/400`;

export const LOCAL_PRODUCTS: Product[] = [
  {
    id: "1", name: "Điện thoại Vsmart Joy 3 - Hàng chính hãng", price: 1790000, rating: 4.5, stock: 20,
    colors: [
      { name: "Xanh", hex: "#1e3a8a", image: img("joy3-blue") },
      { name: "Đỏ", hex: "#dc2626", image: img("joy3-red") },
      { name: "Đen", hex: "#111111", image: img("joy3-black") },
      { name: "Bạc", hex: "#9ca3af", image: img("joy3-silver") },
    ],
  },
  {
    id: "2", name: "Điện thoại Vsmart Live 4 6GB/64GB", price: 3990000, rating: 4.0, stock: 12,
    colors: [
      { name: "Đen", hex: "#111111", image: img("live4-black") },
      { name: "Tím", hex: "#7c3aed", image: img("live4-purple") },
    ],
  },
  {
    id: "3", name: "Điện thoại Vsmart Star 4", price: 1590000, rating: 4.2, stock: 30,
    colors: [
      { name: "Xanh", hex: "#0ea5e9", image: img("star4-blue") },
      { name: "Hồng", hex: "#ec4899", image: img("star4-pink") },
    ],
  },
  {
    id: "4", name: "Điện thoại Vsmart Active 3", price: 4290000, rating: 4.7, stock: 8,
    colors: [
      { name: "Đỏ", hex: "#dc2626", image: img("active3-red") },
      { name: "Trắng", hex: "#f3f4f6", image: img("active3-white") },
    ],
  },
];

export async function fetchProducts(): Promise<Product[]> {
  if (!API_URL) return LOCAL_PRODUCTS;
  try {
    const res = await fetch(API_URL);
    return (await res.json()) as Product[];
  } catch {
    return LOCAL_PRODUCTS;
  }
}
