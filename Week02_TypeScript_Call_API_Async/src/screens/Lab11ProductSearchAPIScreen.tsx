import React, { useState } from "react";
import {
  Button, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View,
} from "react-native";
import { fetchProducts, Product } from "../api/productApi";

export default function Lab11ProductSearchAPIScreen() {
  const [keyword, setKeyword] = useState<string>("phone");
  const [products, setProducts] = useState<Product[]>([]);

  const search = async () => setProducts(await fetchProducts(keyword, 10));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TextInput style={styles.input} value={keyword} onChangeText={setKeyword} />
        <Button title="Tìm" onPress={search} />
      </View>
      <FlatList data={products} keyExtractor={(p) => String(p.id)}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.thumbnail }} style={styles.img} />
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>${item.price}</Text>
            </View>
          </View>
        )} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 60 },
  row: { flexDirection: "row", gap: 8, marginBottom: 12 },
  input: { flex: 1, borderWidth: 1, borderRadius: 8, paddingHorizontal: 10 },
  item: { flexDirection: "row", gap: 10, paddingVertical: 8, alignItems: "center" },
  img: { width: 60, height: 60, borderRadius: 8 },
  title: { fontWeight: "600" },
});
