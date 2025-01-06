import React, { useState } from "react";
import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";

// More Info: https://reactnative.dev/docs/touchablehighlight
export default function TouchableComponent() {
  const [opacityCount, setOpacityCount] = useState(0);
  const [highlightCount, setHighlightCount] = useState(0);
  return (
    <View className="flex items-center justify-center mb-10">
      <Text className="flex items-center justify-center text-3xl font-fold underline my-4">
        Touchable Stuff Component
      </Text>

      <View className="w-full flex items-center justify-center">
        <TouchableOpacity
          onPress={() => setOpacityCount(opacityCount + 0.001)}
          className="h-fit w-auto bg-lime-400 px-4 flex items-center justify-center rounded-lg"
        >
          <Text className="text-xl font-bold my-2">Touchable Opacity</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-xl font-bold my-2">
        Opacity Count: {opacityCount}
      </Text>

      <View className="w-full flex items-center justify-center">
        <TouchableHighlight
          onPress={() => setHighlightCount(highlightCount + 1.1)}
          underlayColor={"green"}
          className="h-fit w-auto bg-blue-700 px-4 flex items-center justify-center rounded-lg"
        >
          <Text className="text-xl font-bold my-2 text-white">
            Touchable Highlight
          </Text>
        </TouchableHighlight>
      </View>

      <Text className="text-xl font-bold my-2">
        Highlight Count: {highlightCount}
      </Text>
    </View>
  );
}
