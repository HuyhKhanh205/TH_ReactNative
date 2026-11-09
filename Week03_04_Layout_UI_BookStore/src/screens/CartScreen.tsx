import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { cartItems, formatPrice } from "../data/data";

export default function CartScreen() {
  const total = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.list}>
        {cartItems.map((i) => (
          <View key={i.id} style={styles.row}>
            <Image source={{ uri: i.cover }} style={styles.img} />
            <Text style={styles.name} numberOfLines={2}>{i.title}</Text>
            <Text style={styles.qty}>x{i.qty}</Text>
            <Text style={styles.price}>{formatPrice(i.price * i.qty)}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.summary}>
        <View>
          <Text style={{ color: "#666" }}>Tổng tiền</Text>
          <Text style={styles.total}>{formatPrice(total)}</Text>
        </View>
        <TouchableOpacity style={styles.pay}><Text style={styles.payText}>Thanh toán</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { flex: 1 },
  row: { flexDirection: "row", alignItems: "center", padding: 12, gap: 10, backgroundColor: "#fff",
    borderBottomWidth: StyleSheet.hairlineWidth, borderColor: "#ddd" },
  img: { width: 50, height: 70, borderRadius: 4 },
  name: { flex: 1, fontWeight: "600" },
  qty: { width: 30, textAlign: "center" },
  price: { width: 90, textAlign: "right", color: "#dc2626", fontWeight: "bold" },
  summary: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 14,
    backgroundColor: "#fff", borderTopWidth: 1, borderColor: "#e5e7eb" },
  total: { fontSize: 20, fontWeight: "bold", color: "#dc2626" },
  pay: { backgroundColor: "#4f46e5", paddingHorizontal: 24, paddingVertical: 12, borderRadius: 8 },
  payText: { color: "#fff", fontWeight: "bold" },
});
