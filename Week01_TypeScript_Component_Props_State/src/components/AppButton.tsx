import React from "react";
import {
  ActivityIndicator, Pressable, StyleSheet, Text, TextStyle, View, ViewStyle,
} from "react-native";

export type Variant = "primary" | "secondary" | "outline" | "danger";
export type Size = "small" | "medium" | "large";

export interface AppButtonProps {
  title: string;
  variant?: Variant;
  size?: Size;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

// Style tách riêng theo variant / size bằng object, không if-else lồng trong JSX
const variantStyles: Record<Variant, { box: ViewStyle; text: TextStyle }> = {
  primary: { box: { backgroundColor: "#4f46e5" }, text: { color: "#fff" } },
  secondary: { box: { backgroundColor: "#e5e7eb" }, text: { color: "#111" } },
  outline: {
    box: { backgroundColor: "transparent", borderWidth: 1.5, borderColor: "#4f46e5" },
    text: { color: "#4f46e5" },
  },
  danger: { box: { backgroundColor: "#dc2626" }, text: { color: "#fff" } },
};

const sizeStyles: Record<Size, { box: ViewStyle; text: TextStyle }> = {
  small: { box: { paddingVertical: 6, paddingHorizontal: 12 }, text: { fontSize: 12 } },
  medium: { box: { paddingVertical: 10, paddingHorizontal: 18 }, text: { fontSize: 15 } },
  large: { box: { paddingVertical: 14, paddingHorizontal: 24 }, text: { fontSize: 18 } },
};

export default function AppButton({
  title, variant = "primary", size = "medium", onPress,
  disabled = false, loading = false, icon,
}: AppButtonProps) {
  const v = variantStyles[variant];
  const s = sizeStyles[size];
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={[styles.base, v.box, s.box, (disabled || loading) && styles.disabled]}
    >
      {loading ? (
        <ActivityIndicator color={v.text.color as string} />
      ) : (
        <View style={styles.content}>
          {icon}
          <Text style={[styles.text, v.text, s.text]}>{title}</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: { borderRadius: 8, alignItems: "center", justifyContent: "center" },
  content: { flexDirection: "row", alignItems: "center", gap: 6 },
  text: { fontWeight: "600" },
  disabled: { opacity: 0.5 },
});
