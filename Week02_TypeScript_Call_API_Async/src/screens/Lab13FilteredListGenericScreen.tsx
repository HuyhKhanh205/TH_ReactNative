import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import { filterByName } from "../utils/filterByName";

interface User { id: number; name: string }
interface Category { id: number; name: string; count: number }

const users: User[] = [
  { id: 1, name: "An" }, { id: 2, name: "Bình" }, { id: 3, name: "Anh Tuấn" },
];
const categories: Category[] = [
  { id: 1, name: "Văn học", count: 10 }, { id: 2, name: "Kinh tế", count: 5 },
  { id: 3, name: "Thiếu nhi", count: 8 },
];

export default function Lab13FilteredListGenericScreen() {
  const [kw, setKw] = useState("");
  // Cùng một hàm generic dùng cho 2 kiểu dữ liệu khác nhau
  const fu: User[] = filterByName(users, kw);
  const fc: Category[] = filterByName(categories, kw);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="Từ khóa..." value={kw} onChangeText={setKw} />
      <Text style={styles.h}>Users</Text>
      {fu.map((u) => <Text key={u.id}>{u.name}</Text>)}
      <Text style={styles.h}>Categories</Text>
      {fc.map((c) => <Text key={c.id}>{c.name} ({c.count})</Text>)}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  input: { borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 12 },
  h: { fontWeight: "bold", marginTop: 12 },
});
