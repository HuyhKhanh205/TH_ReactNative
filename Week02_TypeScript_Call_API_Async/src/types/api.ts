// Generic Interface bọc ngoài cho API phân trang
export interface ApiResponse<T> {
  data: T[];
  total: number;
  page: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
}
