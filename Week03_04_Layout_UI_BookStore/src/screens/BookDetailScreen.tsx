import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { books, formatPrice } from "../data/data";

const book = books[1];
const LONG = "Đây là phần mô tả dài của cuốn sách. ".repeat(40);

export default function BookDetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 16 }}>
        <Image source={{ uri: book.cover }} style={styles.cover} />
        <View style={styles.body}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>{book.author}</Text>
          <Text style={styles.price}>{formatPrice(book.price)}</Text>
          <Text style={styles.desc}>{LONG}</Text>
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <Text style={styles.price}>{formatPrice(book.price)}</Text>
        <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Thêm vào giỏ</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  cover: { alignSelf: "center", width: "60%", aspectRatio: 3 / 4, marginTop: 24, borderRadius: 10 },
  body: { padding: 16 },
  title: { fontSize: 22, fontWeight: "bold" },
  author: { color: "#666", marginVertical: 4 },
  price: { color: "#dc2626", fontSize: 20, fontWeight: "bold" },
  desc: { marginTop: 12, lineHeight: 22, color: "#333" },
  bottom: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 14,
    borderTopWidth: 1, borderColor: "#e5e7eb" },
  btn: { backgroundColor: "#4f46e5", paddingHorizontal: 24, paddingVertical: 12, borderRadius: 8 },
  btnText: { color: "#fff", fontWeight: "bold" },
});
