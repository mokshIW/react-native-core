import { NavigationContainer } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <NavigationContainer>
      <View className="flex p-4 my-4">
        <Text className="text-3xl">React Native Navigation</Text>
      </View>
    </NavigationContainer>
  );
}
