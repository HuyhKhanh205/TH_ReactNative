import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator, FlatList, RefreshControl, SafeAreaView, StyleSheet, Text,
} from "react-native";

interface Product { id: number; title: string; price: number }

export default function Lab15PullToRefreshScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);     // tải lần đầu
  const [refreshing, setRefreshing] = useState<boolean>(false); // kéo để làm mới

  const fetchData = useCallback(async () => {
    const res = await fetch("https://dummyjson.com/products?limit=20");
    const json = await res.json();
    setProducts(json.products as Product[]);
  }, []);

  useEffect(() => {
    fetchData().finally(() => setLoading(false));
  }, [fetchData]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try { await fetchData(); } finally { setRefreshing(false); }
  }, [fetchData]);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={products} keyExtractor={(p) => String(p.id)}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        renderItem={({ item }) => <Text style={styles.item}>{item.title} - ${item.price}</Text>} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
  item: { padding: 12, borderBottomWidth: StyleSheet.hairlineWidth },
});
