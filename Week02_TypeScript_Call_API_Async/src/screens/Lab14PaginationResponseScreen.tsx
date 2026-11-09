import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { fetchProductsPage } from "../api/productPageApi";
import { ApiResponse, Product } from "../types/api";

export default function Lab14PaginationResponseScreen() {
  const [res, setRes] = useState<ApiResponse<Product> | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async (p: number) => {
    setLoading(true);
    setRes(await fetchProductsPage(p));
    setLoading(false);
  }, []);

  useEffect(() => { load(page); }, [page, load]);

  const totalPages = res ? Math.ceil(res.total / 10) : 1;

  return (
    <SafeAreaView style={styles.container}>
      {loading && <ActivityIndicator />}
      <FlatList data={res?.data ?? []} keyExtractor={(p) => String(p.id)}
        renderItem={({ item }) => <Text style={styles.item}>{item.title} - ${item.price}</Text>} />
      <View style={styles.pager}>
        <Button title="Trước" disabled={page <= 1} onPress={() => setPage((p) => p - 1)} />
        <Text>Trang {res?.page ?? page}/{totalPages}</Text>
        <Button title="Sau" disabled={page >= totalPages} onPress={() => setPage((p) => p + 1)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
  item: { padding: 10, borderBottomWidth: StyleSheet.hairlineWidth },
  pager: { flexDirection: "row", justifyContent: "space-around", alignItems: "center", padding: 12 },
});
