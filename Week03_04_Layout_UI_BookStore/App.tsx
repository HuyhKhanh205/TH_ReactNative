import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import CategoryScreen from "./src/screens/CategoryScreen";
import BookDetailScreen from "./src/screens/BookDetailScreen";
import CartScreen from "./src/screens/CartScreen";
import TabBar, { TabKey } from "./src/components/TabBar";

// Chuyển màn hình bằng useState (chưa dùng navigation thật)
export default function App() {
  const [tab, setTab] = useState<TabKey>("home");

  let screen: React.ReactNode;
  switch (tab) {
    case "home": screen = <HomeScreen />; break;
    case "category": screen = <CategoryScreen />; break;
    case "cart": screen = <CartScreen />; break;
    default: screen = <BookDetailScreen />; // Chi tiết sách (đặt ở tab Tài khoản để demo)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>{screen}</View>
      <TabBar active={tab} onChange={setTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
});
