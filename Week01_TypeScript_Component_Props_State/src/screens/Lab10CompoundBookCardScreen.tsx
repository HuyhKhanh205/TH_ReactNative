import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import BookCard, { Book } from "../components/BookCard";

const book: Book = {
  id: "1",
  title: "Lập trình React Native từ cơ bản đến nâng cao",
  price: 199000,
  cover: "https://picsum.photos/300/400",
};

export default function Lab10CompoundBookCardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <BookCard book={book}>
        <BookCard.Cover />
        <BookCard.Title />
        <BookCard.Price />
        <BookCard.FavoriteButton />
      </BookCard>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f3f4f6" },
});
