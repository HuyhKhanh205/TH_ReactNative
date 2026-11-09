import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export type TabKey = "home" | "category" | "cart" | "account";

const TABS: { key: TabKey; label: string; icon: keyof typeof Ionicons.glyphMap }[] = [
  { key: "home", label: "Trang chủ", icon: "home" },
  { key: "category", label: "Danh mục", icon: "grid" },
  { key: "cart", label: "Giỏ hàng", icon: "cart" },
  { key: "account", label: "Tài khoản", icon: "person" },
];

interface Props { active: TabKey; onChange?: (k: TabKey) => void }

export default function TabBar({ active, onChange }: Props) {
  return (
    <View style={styles.bar}>
      {TABS.map((t) => {
        const on = t.key === active;
        return (
          <Pressable key={t.key} style={styles.tab} onPress={() => onChange?.(t.key)}>
            <Ionicons name={t.icon} size={22} color={on ? "#4f46e5" : "#888"} />
            <Text style={[styles.label, on && styles.labelOn]}>{t.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: { flexDirection: "row", height: 60, backgroundColor: "#fff", borderTopWidth: 1, borderColor: "#e5e7eb" },
  tab: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" },
  label: { fontSize: 11, color: "#888", marginTop: 2 },
  labelOn: { color: "#4f46e5", fontWeight: "bold" },
});
