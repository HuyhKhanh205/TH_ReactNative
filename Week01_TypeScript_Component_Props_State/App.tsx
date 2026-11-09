import React, { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Lab01UserCardScreen from "./src/screens/Lab01UserCardScreen";
import Lab02CounterScreen from "./src/screens/Lab02CounterScreen";
import Lab03TodoBasicScreen from "./src/screens/Lab03TodoBasicScreen";
import Lab04CustomButtonScreen from "./src/screens/Lab04CustomButtonScreen";
import Lab05LiveInputScreen from "./src/screens/Lab05LiveInputScreen";
import Lab06LoadingWrapperScreen from "./src/screens/Lab06LoadingWrapperScreen";
import Lab07GenderSelectorScreen from "./src/screens/Lab07GenderSelectorScreen";
import Lab08AppButtonVariantScreen from "./src/screens/Lab08AppButtonVariantScreen";
import Lab09HOCWithloadingstateScreen from "./src/screens/Lab09HOCWithloadingstateScreen";
import Lab10CompoundBookCardScreen from "./src/screens/Lab10CompoundBookCardScreen";

const SCREENS: { name: string; C: React.ComponentType }[] = [
  { name: "Lab01UserCardScreen", C: Lab01UserCardScreen },
  { name: "Lab02CounterScreen", C: Lab02CounterScreen },
  { name: "Lab03TodoBasicScreen", C: Lab03TodoBasicScreen },
  { name: "Lab04CustomButtonScreen", C: Lab04CustomButtonScreen },
  { name: "Lab05LiveInputScreen", C: Lab05LiveInputScreen },
  { name: "Lab06LoadingWrapperScreen", C: Lab06LoadingWrapperScreen },
  { name: "Lab07GenderSelectorScreen", C: Lab07GenderSelectorScreen },
  { name: "Lab08AppButtonVariantScreen", C: Lab08AppButtonVariantScreen },
  { name: "Lab09HOCWithloadingstateScreen", C: Lab09HOCWithloadingstateScreen },
  { name: "Lab10CompoundBookCardScreen", C: Lab10CompoundBookCardScreen },
];

export default function App() {
  const [idx, setIdx] = useState<number | null>(null);
  if (idx !== null) {
    const C = SCREENS[idx].C;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}><C /></View>
        <Pressable style={styles.back} onPress={() => setIdx(null)}>
          <Text style={styles.backText}>← Danh sách bài</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tuần 1 - Component, Props, State</Text>
      <ScrollView>
        {SCREENS.map((s, i) => (
          <Pressable key={s.name} style={styles.item} onPress={() => setIdx(i)}>
            <Text style={styles.itemText}>{s.name.replace(/Screen$/, "")}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 16 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  item: { padding: 14, borderRadius: 8, backgroundColor: "#eef2ff", marginBottom: 8 },
  itemText: { fontSize: 16 },
  back: { backgroundColor: "#312e81", padding: 12, alignItems: "center" },
  backText: { color: "#fff", fontWeight: "bold" },
});
