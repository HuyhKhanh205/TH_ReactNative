import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Lab02CounterScreen() {
  // Ngầm định: TypeScript tự suy luận count là number
  const [count, setCount] = useState(0);
  // Tường minh: khai báo kiểu rõ ràng
  const [count2, setCount2] = useState<number>(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ngầm định useState(0): {count}</Text>
      <View style={styles.row}>
        <Button title="-" onPress={() => setCount((c) => Math.max(0, c - 1))} />
        <Button title="+" onPress={() => setCount((c) => c + 1)} />
      </View>
      <Text style={styles.title}>Tường minh useState&lt;number&gt;(0): {count2}</Text>
      <View style={styles.row}>
        <Button title="-" onPress={() => setCount2((c) => (c > 0 ? c - 1 : 0))} />
        <Button title="+" onPress={() => setCount2((c) => c + 1)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
  title: { fontSize: 18, fontWeight: "600" },
  row: { flexDirection: "row", gap: 24 },
});
