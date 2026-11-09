import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FloatingCartButton({ count = 3 }: { count?: number }) {
  return (
    <View style={styles.btn}>
      <Ionicons name="cart" size={26} color="#fff" />
      <View style={styles.count}><Text style={styles.countText}>{count}</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: { position: "absolute", bottom: 24, right: 20, width: 56, height: 56, borderRadius: 28,
    backgroundColor: "#4f46e5", alignItems: "center", justifyContent: "center", elevation: 6 },
  count: { position: "absolute", top: -4, right: -4, minWidth: 20, height: 20, borderRadius: 10,
    backgroundColor: "#ef4444", alignItems: "center", justifyContent: "center", paddingHorizontal: 4 },
  countText: { color: "#fff", fontSize: 11, fontWeight: "bold" },
});
