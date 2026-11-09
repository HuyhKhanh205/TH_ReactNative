import React from "react";
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";

export interface LoadingStateProps {
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
  onRetry?: () => void;
}

export function ErrorView({ message, onRetry }: { message?: string; onRetry?: () => void }) {
  return (
    <View style={styles.center}>
      <Text style={styles.err}>{message ?? "Đã có lỗi xảy ra"}</Text>
      <Button title="Thử lại" onPress={onRetry ?? (() => {})} />
    </View>
  );
}

// Generic P: props gốc của component được bọc
export function withLoadingState<P extends object>(WrappedComponent: React.ComponentType<P>) {
  return function WithLoadingState(props: P & LoadingStateProps) {
    const { isLoading, isError, errorMessage, onRetry, ...rest } = props;
    if (isLoading) {
      return (
        <View style={styles.center}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    if (isError) return <ErrorView message={errorMessage} onRetry={onRetry} />;
    return <WrappedComponent {...(rest as unknown as P)} />;
  };
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center", gap: 10 },
  err: { color: "#dc2626", fontSize: 16 },
});
