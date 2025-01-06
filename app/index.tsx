import BasicCoreComponents from "@/components/BasicCoreComponents";
import ScrollViewComponent from "@/components/ScrollViewComponent";
import TextInputComponent from "@/components/TextInputComponent";
import { ScrollView, View } from "react-native";

export default function Index() {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerClassName="p-4 mt-10 mb-20"
    >
      <BasicCoreComponents />
      <TextInputComponent />
      <ScrollViewComponent />
    </ScrollView>
  );
}
