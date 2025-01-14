import WheelOfFortune from "@/components/SpinnerComponents/WheelOfFortune";
import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex items-center  h-full p-4 my-4">
      <Text className="text-3xl">React Native Navigation</Text>

      <WheelOfFortune />
    </View>
  );
}
