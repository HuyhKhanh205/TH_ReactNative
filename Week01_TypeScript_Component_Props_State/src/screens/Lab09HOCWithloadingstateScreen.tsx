import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { withLoadingState } from "../hoc/withLoadingState";

interface Book { id: string; title: string; price: number }
interface ListProps { data: Book[] }

const BOOKS: Book[] = [
  { id: "1", title: "Clean Code", price: 350000 },
  { id: "2", title: "Dế Mèn Phiêu Lưu Ký", price: 80000 },
];

function BookListScreenBase({ data }: ListProps) {
  return (
    <FlatList data={data} keyExtractor={(b) => b.id}
      renderItem={({ item }) => (
        <Text style={styles.item}>{item.title} - {item.price.toLocaleString()}đ</Text>
      )} />
  );
}
function OrderHistoryScreenBase({ data }: ListProps) {
  return (
    <View>{data.map((b) => <Text key={b.id} style={styles.item}>Đơn: {b.title}</Text>)}</View>
  );
}

const BookListScreen = withLoadingState(BookListScreenBase);
const OrderHistoryScreen = withLoadingState(OrderHistoryScreenBase);

export default function Lab09HOCWithloadingstateScreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => {
      setError(attempt === 0); // lần đầu lỗi, bấm "Thử lại" sẽ thành công
      setLoading(false);
    }, 1500);
    return () => clearTimeout(t);
  }, [attempt]);

  const retry = () => { setError(false); setAttempt((a) => a + 1); };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.half}>
        <BookListScreen data={BOOKS} isLoading={loading} isError={error}
          errorMessage="Không tải được danh sách sách" onRetry={retry} />
      </View>
      <View style={styles.half}>
        <OrderHistoryScreen data={BOOKS} isLoading={loading} isError={error}
          errorMessage="Không tải được đơn hàng" onRetry={retry} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
  half: { flex: 1 },
  item: { padding: 12, fontSize: 16 },
});
