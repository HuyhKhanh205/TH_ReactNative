import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Book, formatPrice } from "../data/data";

export default function BookCardRow({ book }: { book: Book }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: book.cover }} style={styles.cover} />
      <View style={styles.info}>
        <View>
          <Text style={styles.title} numberOfLines={2}>{book.title}</Text>
          <Text style={styles.author}>{book.author}</Text>
        </View>
        <Text style={styles.price}>{formatPrice(book.price)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: "row", alignItems: "flex-start", padding: 12, gap: 12, backgroundColor: "#fff",
    borderBottomWidth: StyleSheet.hairlineWidth, borderColor: "#ddd" },
  cover: { width: 80, height: 110, borderRadius: 6, backgroundColor: "#ddd" },
  info: { flex: 1, height: 110, flexDirection: "column", justifyContent: "space-between" },
  title: { fontSize: 15, fontWeight: "600" },
  author: { color: "#666", marginTop: 2 },
  price: { color: "#dc2626", fontWeight: "bold", fontSize: 16 },
});
