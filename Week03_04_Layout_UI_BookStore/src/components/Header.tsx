import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>📚 BookStore</Text>
      <View style={styles.icons}>
        <Ionicons name="search" size={24} color="#fff" />
        <Ionicons name="cart" size={24} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 56, paddingHorizontal: 16, backgroundColor: "#312e81",
    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
  },
  logo: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  icons: { flexDirection: "row", gap: 16 },
});
