import React, { useMemo, useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import ProductItem from "../../components/ProductItem";
import { useProducts } from "../../context/ProductsContext";

export default function SearchTab() {
  const { products } = useProducts();
  const [kw, setKw] = useState("");
  const result = useMemo(
    () => products.filter((p) => p.name.toLowerCase().includes(kw.trim().toLowerCase())),
    [products, kw],
  );
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nhập từ khóa..." value={kw} onChangeText={setKw} />
      <FlatList data={result} keyExtractor={(p) => p.id}
        renderItem={({ item }) => <ProductItem product={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f4f6" },
  input: { margin: 12, padding: 10, borderRadius: 8, borderWidth: 1, borderColor: "#bbb", backgroundColor: "#fff" },
});
