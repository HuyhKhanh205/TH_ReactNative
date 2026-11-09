import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ProfileTab() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://i.pravatar.cc/200?img=12" }} style={styles.avatar} />
      <Text style={styles.name}>Huỳnh Khánh</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
  avatar: { width: 120, height: 120, borderRadius: 60 },
  name: { fontSize: 22, fontWeight: "bold" },
});
