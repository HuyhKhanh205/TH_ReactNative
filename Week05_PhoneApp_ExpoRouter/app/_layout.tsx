import React from "react";
import { Stack } from "expo-router";
import { ProductsProvider } from "../context/ProductsContext";

export default function RootLayout() {
  return (
    <ProductsProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="product/[id]" options={{ title: "Product Details" }} />
      </Stack>
    </ProductsProvider>
  );
}
