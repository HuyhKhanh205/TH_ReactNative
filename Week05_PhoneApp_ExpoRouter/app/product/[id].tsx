import React, { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useProducts } from "../../context/ProductsContext";

export default function ProductDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { products } = useProducts();
  const product = products.find((p) => p.id === id);
  const [colorIdx, setColorIdx] = useState(0);

  if (!product) return <Text style={{ padding: 20 }}>Không tìm thấy sản phẩm</Text>;
  const color = product.colors[colorIdx];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: color.image }} style={styles.img} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price.toLocaleString("vi-VN")}đ</Text>
      <Text>⭐ {product.rating.toFixed(1)}  |  Còn {product.stock} sản phẩm</Text>

      <Text style={styles.label}>Màu sắc: {color.name}</Text>
      <View style={styles.colors}>
        {product.colors.map((c, i) => (
          <Pressable key={c.name} onPress={() => setColorIdx(i)}
            style={[styles.swatch, { backgroundColor: c.hex }, i === colorIdx && styles.swatchOn]} />
        ))}
      </View>

      <Pressable style={styles.buy}><Text style={styles.buyText}>CHỌN MUA</Text></Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 10, alignItems: "center" },
  img: { width: "70%", aspectRatio: 3 / 4, borderRadius: 10, backgroundColor: "#ddd" },
  name: { fontSize: 18, fontWeight: "600", textAlign: "center" },
  price: { fontSize: 22, color: "#dc2626", fontWeight: "bold" },
  label: { alignSelf: "flex-start", marginTop: 8, fontWeight: "600" },
  colors: { flexDirection: "row", gap: 12, alignSelf: "flex-start" },
  swatch: { width: 40, height: 40, borderRadius: 6, borderWidth: 1, borderColor: "#999" },
  swatchOn: { borderWidth: 3, borderColor: "#4f46e5" },
  buy: { alignSelf: "stretch", backgroundColor: "#ef0000", padding: 14, borderRadius: 6, alignItems: "center", marginTop: 12 },
  buyText: { color: "#fff", fontWeight: "bold" },
});
