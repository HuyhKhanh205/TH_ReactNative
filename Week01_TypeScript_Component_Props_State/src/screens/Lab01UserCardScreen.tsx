import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import UserCard from "../components/UserCard";

export default function Lab01UserCardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <UserCard name="Nguyễn Văn A" age={30} isAdmin />
      <UserCard name="Trần Thị B" age={22} isAdmin={false} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, paddingTop: 60, backgroundColor: "#f5f5f5" },
});
