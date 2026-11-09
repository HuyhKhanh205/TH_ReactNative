import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface UserCardProps {
  name: string;
  age: number;
  isAdmin: boolean;
}

export default function UserCard({ name, age, isAdmin }: UserCardProps) {
  return (
    <View style={[styles.card, isAdmin ? styles.admin : styles.user]}>
      <Text style={styles.name}>{name}</Text>
      <Text>Tuổi: {age}</Text>
      {isAdmin ? <Text style={styles.badge}>★ ADMIN</Text> : <Text>Thành viên</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, borderRadius: 12, marginBottom: 12, borderWidth: 1 },
  admin: { backgroundColor: "#fff3cd", borderColor: "#f0ad4e" },
  user: { backgroundColor: "#e7f1ff", borderColor: "#6ea8fe" },
  name: { fontSize: 18, fontWeight: "bold" },
  badge: { color: "#b02a37", fontWeight: "bold" },
});
