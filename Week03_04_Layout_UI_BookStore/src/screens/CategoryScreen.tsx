import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import CategoryChips from "../components/CategoryChips";
import BookCardRow from "../components/BookCardRow";
import { books } from "../data/data";

export default function CategoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <CategoryChips />
        {books.map((b) => <BookCardRow key={b.id} book={b} />)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: "#f3f4f6" } });
