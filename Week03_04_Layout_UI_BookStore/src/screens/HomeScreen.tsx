import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import CategoryChips from "../components/CategoryChips";
import BookGridItem from "../components/BookGridItem";
import FloatingCartButton from "../components/FloatingCartButton";
import { books } from "../data/data";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <CategoryChips />
        <View style={styles.grid}>
          {books.map((b) => <BookGridItem key={b.id} book={b} showBadge />)}
        </View>
      </ScrollView>
      <FloatingCartButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f4f6" },
  content: { paddingBottom: 100 },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", paddingHorizontal: 12 },
});
