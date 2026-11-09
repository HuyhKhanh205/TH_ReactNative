import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductItem from "../../components/ProductItem";
import { useProducts } from "../../context/ProductsContext";

export default function FavoritesTab() {
  const { products, favorites } = useProducts();
  const list = products.filter((p) => favorites.includes(p.id));
  return (
    <View style={styles.container}>
      <FlatList data={list} keyExtractor={(p) => p.id} contentContainerStyle={{ paddingTop: 12 }}
        ListEmptyComponent={<Text style={styles.empty}>Chưa có sản phẩm yêu thích</Text>}
        renderItem={({ item }) => <ProductItem product={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f4f6" },
  empty: { textAlign: "center", marginTop: 40, color: "#777" },
});
