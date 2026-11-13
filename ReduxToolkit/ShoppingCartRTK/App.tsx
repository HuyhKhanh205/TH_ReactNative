import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './store/store';
import CartScreen from './component/cartScreen';

export default function App() {
  return (
    <Provider store={store}>
      <CartScreen />
      <StatusBar style="auto" />
    </Provider>
  );
}
