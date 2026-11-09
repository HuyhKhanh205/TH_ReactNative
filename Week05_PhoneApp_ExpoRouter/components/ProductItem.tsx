import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Product } from "../data/products";
import { useProducts } from "../context/ProductsContext";

export default function ProductItem({ product }: { product: Product }) {
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useProducts();
  const fav = isFavorite(product.id);

  return (
    <Pressable
      style={styles.card}
      // Bài 4: truyền params sang màn Product Details
      onPress={() => router.push({ pathname: "/product/[id]", params: { id: product.id } })}>
      <Image source={{ uri: product.colors[0].image }} style={styles.img} />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>{product.name}</Text>
        <Text style={styles.rating}>⭐ {product.rating.toFixed(1)}</Text>
        <Text style={styles.price}>{product.price.toLocaleString("vi-VN")}đ</Text>
      </View>
      <Pressable onPress={() => toggleFavorite(product.id)} hitSlop={10}>
        <Ionicons name={fav ? "heart" : "heart-outline"} size={24} color={fav ? "#e11d48" : "#777"} />
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: "row", alignItems: "center", gap: 12, padding: 12, backgroundColor: "#fff",
    borderRadius: 10, marginBottom: 10, marginHorizontal: 12 },
  img: { width: 70, height: 90, borderRadius: 8, backgroundColor: "#ddd" },
  info: { flex: 1, gap: 4 },
  name: { fontWeight: "600" },
  rating: { color: "#666" },
  price: { color: "#dc2626", fontWeight: "bold" },
});
