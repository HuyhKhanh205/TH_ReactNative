import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppButton from "../components/AppButton";

export default function Lab08AppButtonVariantScreen() {
  const [loading, setLoading] = useState(false);
  const add = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.col}>
        <AppButton title="Thêm vào giỏ hàng" variant="primary" size="large"
          loading={loading} onPress={add}
          icon={<Ionicons name="cart" size={18} color="#fff" />} />
        <AppButton title="Xem chi tiết" variant="outline" onPress={() => {}} />
        <AppButton title="Xóa sách" variant="danger" size="small" onPress={() => {}} />
        <AppButton title="Thứ cấp (disabled)" variant="secondary" disabled onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 24 },
  col: { gap: 14 },
});
