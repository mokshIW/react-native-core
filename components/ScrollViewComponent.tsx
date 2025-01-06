import React from "react";
import { View, Text, ScrollView } from "react-native";

export default function ScrollViewComponent() {
  return (
    <View className="mb-10 flex items-center justify-center">
      <Text className="flex items-center justify-center text-3xl font-fold underline my-4">
        Scroll View Component
      </Text>
      <ScrollView
        style={{
          width: "100%",
          height: 300,
          backgroundColor: "#84CC16",
          padding: 16,
        }}
        nestedScrollEnabled={true}
        contentContainerClassName="w-full bg-lime-300 p-4 mt-10 mb-20"
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <View key={index} className="w-full h-20 bg-white my-2 rounded-lg">
            <Text className="text-2xl text-center">Item {index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
