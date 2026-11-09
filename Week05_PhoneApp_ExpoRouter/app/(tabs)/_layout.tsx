import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type IconName = keyof typeof Ionicons.glyphMap;

const screen = (title: string, icon: IconName, iconOn: IconName) => ({
  title,
  tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => (
    <Ionicons name={focused ? iconOn : icon} size={size} color={color} />
  ),
});

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#4f46e5" }}>
      <Tabs.Screen name="index" options={screen("Products", "phone-portrait-outline", "phone-portrait")} />
      <Tabs.Screen name="search" options={screen("Search", "search-outline", "search")} />
      <Tabs.Screen name="favorites" options={screen("Favorites", "heart-outline", "heart")} />
      <Tabs.Screen name="profile" options={screen("Profile", "person-outline", "person")} />
    </Tabs>
  );
}
