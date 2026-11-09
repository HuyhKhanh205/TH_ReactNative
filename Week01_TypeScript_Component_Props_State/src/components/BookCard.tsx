import React, { createContext, useContext, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export interface Book { id: string; title: string; price: number; cover: string }

interface BookCardContextValue {
  book: Book;
  isFavorite: boolean;
  toggleFavorite: () => void;
}

const BookCardContext = createContext<BookCardContextValue | null>(null);

function useBookCard(): BookCardContextValue {
  const ctx = useContext(BookCardContext);
  if (!ctx) throw new Error("BookCard.* phải nằm trong <BookCard>");
  return ctx;
}

function BookCard({ book, children }: { book: Book; children: React.ReactNode }) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <BookCardContext.Provider
      value={{ book, isFavorite, toggleFavorite: () => setIsFavorite((f) => !f) }}>
      <View style={styles.card}>{children}</View>
    </BookCardContext.Provider>
  );
}

BookCard.Cover = function Cover() {
  const { book } = useBookCard();
  return <Image source={{ uri: book.cover }} style={styles.cover} />;
};
BookCard.Title = function Title() {
  const { book } = useBookCard();
  return <Text style={styles.title} numberOfLines={2}>{book.title}</Text>;
};
BookCard.Price = function Price() {
  const { book } = useBookCard();
  return <Text style={styles.price}>{book.price.toLocaleString()}đ</Text>;
};
BookCard.FavoriteButton = function FavoriteButton() {
  const { isFavorite, toggleFavorite } = useBookCard();
  return (
    <Pressable onPress={toggleFavorite} style={styles.fav}>
      <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={24}
        color={isFavorite ? "#e11d48" : "#555"} />
    </Pressable>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  card: { width: 160, padding: 10, borderRadius: 12, backgroundColor: "#fff", elevation: 2 },
  cover: { width: "100%", aspectRatio: 3 / 4, borderRadius: 8, backgroundColor: "#ddd" },
  title: { marginTop: 8, fontWeight: "600" },
  price: { color: "#dc2626", marginTop: 2 },
  fav: { position: "absolute", top: 16, right: 16 },
});
