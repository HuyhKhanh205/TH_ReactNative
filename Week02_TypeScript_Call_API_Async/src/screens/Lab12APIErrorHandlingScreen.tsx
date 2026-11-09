import React from "react";
import { Alert, Button, SafeAreaView, StyleSheet } from "react-native";
import axios, { AxiosError } from "axios";

interface CustomError {
  message: string;
  status?: number;
  code?: string;
}

function toCustomError(error: unknown): CustomError {
  if (axios.isAxiosError(error)) {
    const e = error as AxiosError;
    return { message: e.message, status: e.response?.status, code: e.code };
  }
  if (error instanceof Error) return { message: error.message };
  return { message: "Lỗi không xác định" };
}

export default function Lab12APIErrorHandlingScreen() {
  const callBadApi = async () => {
    try {
      // URL sai cố tình
      await axios.get("https://jsonplaceholder.typicode.com/not-found-url-123");
    } catch (error) {
      const err = toCustomError(error);
      Alert.alert("Lỗi API", `${err.message}\nStatus: ${err.status ?? "N/A"}\nCode: ${err.code ?? "N/A"}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Gọi API lỗi" onPress={callBadApi} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: "center", padding: 24 } });
