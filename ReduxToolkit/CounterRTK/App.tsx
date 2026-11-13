import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './store/Store';
import CounterScreen from './componets/CounterScreen';

export default function App() {
  return (
    <Provider store={store}>
      <CounterScreen />
      <StatusBar style="auto" />
    </Provider>
  );
}
