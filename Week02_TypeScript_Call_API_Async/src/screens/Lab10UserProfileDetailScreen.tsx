import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: { name: string };
}

export default function Lab10UserProfileDetailScreen() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((r) => r.json())
      .then((d: User) => setUser(d));
  }, []);

  if (!user) return <View style={styles.empty} />; // chưa có dữ liệu → màn hình trống

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.name}>{user?.name}</Text>
      <Text>@{user?.username}</Text>
      <Text>Email: {user?.email}</Text>
      <Text>Phone: {user?.phone}</Text>
      <Text>Website: {user?.website}</Text>
      <Text>Công ty: {user?.company?.name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  empty: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, padding: 24, paddingTop: 70, gap: 6 },
  name: { fontSize: 24, fontWeight: "bold" },
});
