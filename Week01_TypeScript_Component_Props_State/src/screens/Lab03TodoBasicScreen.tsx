import React, { useState } from "react";
import {
  Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View,
} from "react-native";

interface Todo {
  id: string;
  title: string;
}

export default function Lab03TodoBasicScreen() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Học TypeScript" },
    { id: "2", title: "Làm bài thực hành" },
  ]);
  const [text, setText] = useState<string>("");

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now().toString(), title: text.trim() }]);
    setText("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TextInput style={styles.input} value={text} onChangeText={setText}
          placeholder="Nhập việc cần làm" />
        <Button title="Thêm" onPress={addTodo} />
      </View>
      {/* Hiển thị bằng map() theo yêu cầu */}
      {todos.map((t: Todo) => (
        <Text key={t.id} style={styles.item}>• {t.title}</Text>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  row: { flexDirection: "row", gap: 8, marginBottom: 16 },
  input: { flex: 1, borderWidth: 1, borderColor: "#999", borderRadius: 8, padding: 8 },
  item: { fontSize: 16, paddingVertical: 6 },
});
