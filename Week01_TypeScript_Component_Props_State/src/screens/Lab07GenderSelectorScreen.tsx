import React, { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

type Gender = "male" | "female" | "other";
const OPTIONS: Gender[] = ["male", "female", "other"];

export default function Lab07GenderSelectorScreen() {
  const [gender, setGender] = useState<Gender>("male");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        {OPTIONS.map((g) => (
          <Pressable key={g} onPress={() => setGender(g)}
            style={[styles.opt, gender === g && styles.active]}>
            <Text style={gender === g && styles.activeText}>{g}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.result}>Đã chọn: {gender}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", gap: 20 },
  row: { flexDirection: "row", gap: 10 },
  opt: { paddingHorizontal: 16, paddingVertical: 10, borderWidth: 1, borderRadius: 20 },
  active: { backgroundColor: "#4f46e5", borderColor: "#4f46e5" },
  activeText: { color: "#fff" },
  result: { fontSize: 18 },
});
