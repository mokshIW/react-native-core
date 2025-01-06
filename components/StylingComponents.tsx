import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StylingComponents() {
  return (
    <View className="mb-10 flex items-center justify-center">
      <Text className="flex items-center justify-center text-3xl font-fold underline my-4">
        Styling Example Component
      </Text>
      <View className="w-full flex items-center justify-center">
        <View className="w-20 h-20 bg-red-600" />
        <View className="w-20 h-20 bg-blue-600" />
        <View className="w-20 h-20 bg-green-600" />
      </View>

      <View
        style={[
          styles.combinedStyle,
          { borderWidth: 10, borderColor: "green" },
        ]}
      />
      <View
        style={[styles.combinedStyle, { borderWidth: 10, borderColor: "red" }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  combinedStyle: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    marginTop: 10,
    marginBottom: 10,
  },
});
