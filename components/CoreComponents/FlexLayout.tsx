import React from "react";
import { View, Text } from "react-native";

export default function FlexLayout() {
  return (
    <View className="flex items-center justify-center mb-10">
      <Text className="flex items-center justify-center text-3xl font-fold underline my-4">
        Flex Layout Component
      </Text>

      <View className="w-full flex items-center justify-center mb-4">
        <Text className="text-xl font-bold my-2">Main Axis (Row View)</Text>
        <View className="w-full flex flex-row items-center justify-between mb-4">
          <View className="w-16 h-16 bg-gray-300"></View>
          <View className="w-16 h-16 bg-gray-400"></View>
          <View className="w-16 h-16 bg-gray-500"></View>
        </View>
      </View>

      <View className="w-full flex items-center justify-center">
        <Text className="text-xl font-bold my-2">Cross Axis (Column View)</Text>
        <View className="w-full h-[250px] flex flex-col items-center justify-between mb-4">
          <View className="w-16 h-16 bg-slate-400"></View>
          <View className="w-16 h-16 bg-slate-600"></View>
          <View className="w-16 h-16 bg-slate-900"></View>
        </View>
      </View>

      {/* More Info: https://reactnative.dev/docs/flexbox */}
    </View>
  );
}
