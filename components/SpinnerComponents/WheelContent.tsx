import React, { useRef, useState } from "react";
import { View, TouchableOpacity, Animated, Easing, Text } from "react-native";
import Svg, { G, Path, Text as SvgText } from "react-native-svg";

export default function WheelContent() {
  const [selectedSegment, setSelectedSegment] = useState<number | null>(null);
  const spinAnimation = useRef(new Animated.Value(0)).current;

  // Wheel segments data
  const segments = 8;
  const segmentLabels = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const segmentAngle = 360 / segments;
  const indicatorOffset = 90; // Indicator at the top of the circle (12 o'clock position)
  const initialOffset = segmentAngle / 2; // Offset to align indicator with center of the segment

  const spinWheel = () => {
    // Reset the animated value to 0 before starting the new animation
    spinAnimation.setValue(0);

    // Randomly decide the rotation (in degrees) to land on
    const randomRotation = Math.floor(Math.random() * segments) * segmentAngle;
    const targetRotation = 360 * 3 + randomRotation; // Add multiple spins for visual effect

    // Start animation
    Animated.timing(spinAnimation, {
      toValue: targetRotation,
      duration: 4000,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start(() => {
      // Calculate the effective rotation after accounting for multiple spins
      const finalRotation =
        (targetRotation + indicatorOffset + initialOffset) % 360;

      // Determine the segment based on the rotation
      const landedIndex =
        segments - Math.floor(finalRotation / segmentAngle) - 1;

      // Ensure the index is within bounds
      setSelectedSegment((landedIndex + segments) % segments);
      console.log(
        `Landed on: ${segmentLabels[(landedIndex + segments) % segments]}`
      );
    });
  };

  const spinStyle = {
    transform: [
      {
        rotate: spinAnimation.interpolate({
          inputRange: [0, 360],
          outputRange: [`${initialOffset}deg`, `${360 + initialOffset}deg`],
        }),
      },
    ],
  };

  return (
    <View className="items-center">
      <Text className="text-xl font-bold mb-5">Spin the Wheel!</Text>

      {/* Spinner */}
      <View className="w-40 h-40 items-center justify-center mb-5 relative">
        {/* Indicator */}
        <View
          className="absolute top-[-10px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-black"
          style={{ zIndex: 1 }}
        />

        {/* Spinner */}
        <Animated.View style={[spinStyle, { width: 160, height: 160 }]}>
          <Svg height="100%" width="100%" viewBox="0 0 100 100">
            {Array.from({ length: segments }).map((_, i) => {
              const startAngle = i * segmentAngle;
              const endAngle = startAngle + segmentAngle;
              const largeArc = endAngle - startAngle <= 180 ? "0" : "1";

              // Coordinates for segment paths
              const x1 = 50 + 50 * Math.cos((Math.PI * startAngle) / 180);
              const y1 = 50 + 50 * Math.sin((Math.PI * startAngle) / 180);
              const x2 = 50 + 50 * Math.cos((Math.PI * endAngle) / 180);
              const y2 = 50 + 50 * Math.sin((Math.PI * endAngle) / 180);

              return (
                <G key={i}>
                  <Path
                    d={`M50,50 L${x1},${y1} A50,50 0 ${largeArc},1 ${x2},${y2} Z`}
                    fill={
                      [
                        "#FF6347", // Red
                        "#FFD700", // Yellow
                        "#8A2BE2", // Blue Violet
                        "#32CD32", // Lime Green
                        "#00CED1", // Dark Turquoise
                        "#FF4500", // Orange Red
                        "#ADFF2F", // Green Yellow
                        "#1E90FF", // Dodger Blue
                      ][i % 8]
                    } // Cycle through the 8 colors
                  />
                  <SvgText
                    x={
                      50 +
                      25 *
                        Math.cos(
                          ((startAngle + endAngle) / 2) * (Math.PI / 180)
                        )
                    }
                    y={
                      50 +
                      25 *
                        Math.sin(
                          ((startAngle + endAngle) / 2) * (Math.PI / 180)
                        )
                    }
                    fill="#000"
                    textAnchor="middle"
                    fontSize="12"
                  >
                    {segmentLabels[i]}
                  </SvgText>
                </G>
              );
            })}
          </Svg>
        </Animated.View>
      </View>

      {/* Spin Button */}
      <TouchableOpacity
        className="bg-green-500 px-5 py-3 mt-4 rounded-lg"
        onPress={spinWheel}
      >
        <Text className="text-white text-lg font-semibold">Spin</Text>
      </TouchableOpacity>

      {/* Result Display */}
      {selectedSegment !== null && (
        <Text className="mt-4 text-lg font-bold">
          Landed on: {segmentLabels[selectedSegment]}
        </Text>
      )}
    </View>
  );
}
