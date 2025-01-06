import React, { useState } from "react";
import { View, Text, Image, Button } from "react-native";

export default function BasicCoreComponents() {
  const [count, setCount] = useState(0);

  return (
    <View className="mb-10 flex items-center justify-center">
      {/* View Component */}
      <Text className="flex items-center justify-center text-3xl font-fold underline my-4">
        View Component
      </Text>
      <View className="w-full flex flex-row items-center justify-between">
        <View className="w-20 h-20 bg-red-600" />
        <View className="w-20 h-20 bg-blue-600" />
        <View className="w-20 h-20 bg-green-600" />
      </View>

      {/* Text Component */}
      <Text className="flex items-center justify-center text-3xl font-fold underline my-4">
        Text Component
      </Text>
      <Text className="my-10 text-[30px] font-bold text-center">
        Welcome to React Native Tailwind CSS 🚀
      </Text>
      <Text className="text-center text-2xl">
        Text components can be{" "}
        <Text className="text-red-600 font-bold">nested</Text> inside each
        other.
      </Text>

      {/* Image Component */}
      <Text className="flex items-center justify-center text-3xl font-fold underline my-4">
        Image Component
      </Text>
      <View className="flex flex-row items-center justify-center gap-10">
        <Image
          source={{
            uri: "https://i.ytimg.com/vi/wPm9k6ul9EI/hqdefault.jpg",
          }}
          className="w-[150px] h-[150px] my-4"
          resizeMode="contain"
        />

        <Image
          source={require("../assets/images/placeholder/chess.webp")}
          className="w-[150px] h-[150px] my-4"
          resizeMode="contain"
        />
      </View>

      {/* Button Component */}
      <Text className="flex items-center justify-center text-3xl font-fold underline my-4">
        Button Component
      </Text>
      <View>
        <Button
          color="blue"
          disabled={count >= 10}
          title="Click Me"
          onPress={() => setCount(count + 1)}
        />
        <Text className="my-4 text-2xl">Count: {count}</Text>
      </View>
    </View>
  );
}
