import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text } from "react-native";

interface Post {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Lab09NewsFeedScreen() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setPosts(data as Post[]);
      setLoading(false);
    };
    load();
  }, []);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={posts} keyExtractor={(p) => String(p.id)}
        renderItem={({ item }) => <Text style={styles.item}>{item.id}. {item.title}</Text>} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
  item: { padding: 12, borderBottomWidth: StyleSheet.hairlineWidth },
});
