import BasicCoreComponents from "@/components/CoreComponents/BasicCoreComponents";
import FlexLayout from "@/components/CoreComponents/FlexLayout";
import ScrollViewComponent from "@/components/CoreComponents/ScrollViewComponent";
import StylingComponents from "@/components/CoreComponents/StylingComponents";
import TextInputComponent from "@/components/CoreComponents/TextInputComponent";
import TouchableComponent from "@/components/CoreComponents/TouchableComponent";
import TodoAppComponent from "@/components/TodoAppComponents/TodoAppComponent";
import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerClassName="flex p-4 my-4"
    >
      {/* <Text className="text-3xl font-bold text-center my-4">
        Core Components
      </Text>
      <BasicCoreComponents />
      <TextInputComponent />
      <ScrollViewComponent />
      <StylingComponents />
      <FlexLayout />
      <TouchableComponent /> */}

      <TodoAppComponent />
    </ScrollView>
  );
}
