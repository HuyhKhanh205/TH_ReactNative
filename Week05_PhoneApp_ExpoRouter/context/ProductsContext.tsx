import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchProducts, Product } from "../data/products";

interface Ctx {
  products: Product[];
  loading: boolean;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const ProductsContext = createContext<Ctx | null>(null);

export function ProductsProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    fetchProducts().then((p) => { setProducts(p); setLoading(false); });
  }, []);

  const toggleFavorite = (id: string) =>
    setFavorites((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));

  return (
    <ProductsContext.Provider
      value={{ products, loading, favorites, toggleFavorite, isFavorite: (id) => favorites.includes(id) }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts(): Ctx {
  const c = useContext(ProductsContext);
  if (!c) throw new Error("useProducts phải nằm trong ProductsProvider");
  return c;
}
