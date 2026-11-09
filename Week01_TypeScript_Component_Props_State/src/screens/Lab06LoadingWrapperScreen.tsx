import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import LoadingContainer from "../components/LoadingContainer";

export default function Lab06LoadingWrapperScreen() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LoadingContainer isLoading={loading}>
        <Text style={styles.text}>Dữ liệu đã tải xong!</Text>
      </LoadingContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20 },
});
