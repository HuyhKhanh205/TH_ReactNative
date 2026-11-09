import React, { useState } from "react";
import {
  NativeSyntheticEvent, SafeAreaView, StyleSheet, Text, TextInput,
  TextInputChangeEventData,
} from "react-native";

export default function Lab05LiveInputScreen() {
  const [text, setText] = useState<string>("");

  // Kiểu của sự kiện thay đổi text
  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setText(e.nativeEvent.text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="Gõ gì đó..." onChange={handleChange} />
      <Text style={styles.count}>Số ký tự: {text.length}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, paddingTop: 80 },
  input: { borderWidth: 1, borderColor: "#888", borderRadius: 8, padding: 10 },
  count: { marginTop: 12, fontSize: 18 },
});
