import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MyButton from "../components/MyButton";

export default function Lab04CustomButtonScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <MyButton label="Mặc định (xanh)" onPress={() => console.log("default")} />
      <MyButton label="Màu đỏ" color="#dc3545" onPress={() => console.log("red")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", gap: 16 },
});
