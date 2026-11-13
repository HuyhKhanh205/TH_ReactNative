import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/CounterSlice";
import { RootState } from "../store/Store";
import React from "react";

export default function CounterScreen() {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{counter}</Text>

      <View>
        <TouchableOpacity onPress={() => dispatch(decrement())}>
          <Text style={{ color: "#ff8453" }}>- Giảm</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => dispatch(increment())}>
          <Text style={{ color: "#223325" }}>+ Tăng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  counterText: {
    fontSize: 72,
    fontWeight: "bold",
    marginBottom: 32,
  },
});
