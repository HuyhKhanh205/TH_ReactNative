import { ApiResponse, Product } from "../types/api";

const PAGE_SIZE = 10;

export async function fetchProductsPage(page: number): Promise<ApiResponse<Product>> {
  const skip = (page - 1) * PAGE_SIZE;
  const res = await fetch(`https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${skip}`);
  const json = await res.json();
  // map dữ liệu DummyJSON về dạng { data, total, page }
  return { data: json.products as Product[], total: json.total as number, page };
}
