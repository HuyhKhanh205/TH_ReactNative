import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { categories } from "../data/data";

export default function CategoryChips() {
  return (
    <View style={styles.wrap}>
      {categories.map((c) => (
        <View key={c} style={styles.chip}><Text style={styles.text}>{c}</Text></View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flexDirection: "row", flexWrap: "wrap", gap: 8, padding: 12, alignContent: "flex-start" },
  chip: { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 999, borderWidth: 1, borderColor: "#4f46e5" },
  text: { color: "#4f46e5" },
});
