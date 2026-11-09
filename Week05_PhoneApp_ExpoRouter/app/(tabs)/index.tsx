import React from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import ProductItem from "../../components/ProductItem";
import { useProducts } from "../../context/ProductsContext";

export default function ProductsTab() {
  const { products, loading } = useProducts();
  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;
  return (
    <View style={styles.container}>
      <FlatList data={products} keyExtractor={(p) => p.id}
        contentContainerStyle={{ paddingTop: 12 }}
        renderItem={({ item }) => <ProductItem product={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: "#f3f4f6" } });
