import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function TextInputComponent() {
  const [value, setValue] = useState("");
  return (
    <View className="w-full flex items-center justify-center p-4">
      <Text className="flex items-center justify-center text-3xl font-fold underline my-4">
        TextInput Component
      </Text>
      <View className="w-full flex items-center justify-center px-10 mb-10">
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder="Enter your text here"
          className="w-full h-[50px] border-2 border-gray-500 text-2xl placeholder:text-gray-500"
        />
        <Text className="text-2xl mt-4">
          You typed: <Text className="text-red-600">{value}</Text>
        </Text>
      </View>
    </View>
  );
}
