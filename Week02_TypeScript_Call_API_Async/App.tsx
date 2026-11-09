import React, { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Lab09NewsFeedScreen from "./src/screens/Lab09NewsFeedScreen";
import Lab10UserProfileDetailScreen from "./src/screens/Lab10UserProfileDetailScreen";
import Lab11ProductSearchAPIScreen from "./src/screens/Lab11ProductSearchAPIScreen";
import Lab12APIErrorHandlingScreen from "./src/screens/Lab12APIErrorHandlingScreen";
import Lab13FilteredListGenericScreen from "./src/screens/Lab13FilteredListGenericScreen";
import Lab14PaginationResponseScreen from "./src/screens/Lab14PaginationResponseScreen";
import Lab15PullToRefreshScreen from "./src/screens/Lab15PullToRefreshScreen";

const SCREENS: { name: string; C: React.ComponentType }[] = [
  { name: "Lab09NewsFeedScreen", C: Lab09NewsFeedScreen },
  { name: "Lab10UserProfileDetailScreen", C: Lab10UserProfileDetailScreen },
  { name: "Lab11ProductSearchAPIScreen", C: Lab11ProductSearchAPIScreen },
  { name: "Lab12APIErrorHandlingScreen", C: Lab12APIErrorHandlingScreen },
  { name: "Lab13FilteredListGenericScreen", C: Lab13FilteredListGenericScreen },
  { name: "Lab14PaginationResponseScreen", C: Lab14PaginationResponseScreen },
  { name: "Lab15PullToRefreshScreen", C: Lab15PullToRefreshScreen },
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
      <Text style={styles.title}>Tuần 2 - Call API Async</Text>
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
