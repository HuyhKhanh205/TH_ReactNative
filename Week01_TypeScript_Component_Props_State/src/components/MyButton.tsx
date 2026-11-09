import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export interface MyButtonProps {
  label: string;
  onPress: () => void;
  color?: string; // không bắt buộc
}

export default function MyButton({ label, onPress, color = "#007AFF" }: MyButtonProps) {
  return (
    <Pressable onPress={onPress} style={[styles.btn, { backgroundColor: color }]}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: { paddingHorizontal: 24, paddingVertical: 12, borderRadius: 8 },
  text: { color: "#fff", fontWeight: "bold" },
});
