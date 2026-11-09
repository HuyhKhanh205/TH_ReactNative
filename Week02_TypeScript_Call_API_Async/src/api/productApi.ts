export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}
export interface ProductSearchResult {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export async function fetchProducts(keyword: string, limit: number): Promise<Product[]> {
  const url = `https://dummyjson.com/products/search?q=${encodeURIComponent(keyword)}&limit=${limit}`;
  const res = await fetch(url);
  const json = (await res.json()) as ProductSearchResult;
  return json.products;
}
