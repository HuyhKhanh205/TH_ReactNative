import React from "react";
import { Image, StyleSheet, Text, View, ViewStyle } from "react-native";
import { Book, formatPrice } from "../data/data";

interface Props {
  book: Book;
  showBadge?: boolean;
  style?: ViewStyle;
}

export default function BookGridItem({ book, showBadge = false, style }: Props) {
  const label = book.discount ? `-${book.discount}%` : book.isNew ? "Mới" : null;
  return (
    <View style={[styles.item, style]}>
      <View style={styles.coverBox}>
        <Image source={{ uri: book.cover }} style={styles.cover} />
        {showBadge && label && (
          <View style={styles.badge}><Text style={styles.badgeText}>{label}</Text></View>
        )}
      </View>
      <Text style={styles.title} numberOfLines={2}>{book.title}</Text>
      <Text style={styles.price}>{formatPrice(book.price)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: { width: "48%", marginBottom: 16 },
  coverBox: { position: "relative" },
  cover: { width: "100%", aspectRatio: 3 / 4, borderRadius: 8, backgroundColor: "#ddd" },
  badge: { position: "absolute", top: 6, left: 6, backgroundColor: "#ef4444", borderRadius: 4,
    paddingHorizontal: 6, paddingVertical: 2 },
  badgeText: { color: "#fff", fontSize: 12, fontWeight: "bold" },
  title: { marginTop: 6, fontWeight: "600" },
  price: { color: "#dc2626", marginTop: 2 },
});
