import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../store/cartSlice";
import { RootState } from "../store/store";

const PRODUCTS = [
  { id: 1, name: "Laptop Dell XPS", price: 1200 },
  { id: 2, name: "Mouse Logitech", price: 45 },
  { id: 3, name: "Keyboard Mechanical", price: 120 },
  { id: 4, name: 'Monitor LG 27"', price: 350 },
  { id: 5, name: "USB Cable", price: 15 },
];

export default function CartScreen() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleAddProduct = () => {
    const randomProduct = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
    dispatch(addToCart(randomProduct));
  };

  const handleRemoveProduct = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Giỏ Hàng</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text style={styles.empty}>Giỏ hàng trống</Text>}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>

            <View style={styles.quantityBox}>
              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() => handleUpdateQuantity(item.id, item.quantity - 1)}
              >
                <Text style={styles.qtyButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() => handleUpdateQuantity(item.id, item.quantity + 1)}
              >
                <Text style={styles.qtyButtonText}>+</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => handleRemoveProduct(item.id)}>
              <Text style={styles.removeText}>Xóa</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
          <Text style={styles.buttonText}>+ Thêm Sản Phẩm</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => dispatch(clearCart())}
        >
          <Text style={styles.buttonText}> Xóa sản phẩm khỏi giỏ</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.totalBox}>
        <Text style={styles.totalText}>Tổng: ${total}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
  },
  empty: {
    textAlign: "center",
    color: "#888",
    marginTop: 32,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  price: {
    color: "#fb0404",
  },
  quantityBox: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 12,
  },
  qtyButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  removeText: {
    color: "#F44336",
    fontWeight: "600",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
    marginVertical: 16,
  },
  addButton: {
    flex: 1,
    backgroundColor: "green",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  clearButton: {
    flex: 1,
    backgroundColor: "red",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  totalBox: {
    padding: 16,
    marginBottom: 24,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
  },
});
