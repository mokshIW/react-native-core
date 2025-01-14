import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, Pressable } from "react-native";
import { BlurView } from "expo-blur"; // Import BlurView
import WheelContent from "./WheelContent";

export default function WheelOfFortune() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View className="flex items-center justify-center flex-1 bg-gray-100">
      {/* Main Screen */}
      <Text className="text-2xl font-bold mb-5">Wheel of Fortune</Text>
      <TouchableOpacity
        className="bg-blue-500 px-5 py-3 rounded-lg"
        onPress={toggleModal}
      >
        <Text className="text-white text-lg font-semibold">Open Wheel</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={toggleModal}
      >
        <Pressable
          className="flex-1 justify-center items-center"
          onPress={toggleModal}
        >
          {/* Blurred Background */}
          <BlurView
            intensity={9} // Adjust blur intensity (0-100)
            tint="dark" // Options: "dark", "light", "default"
            className="absolute top-0 bottom-0 left-0 right-0"
          />

          <View
            className="w-4/5 bg-white rounded-lg p-5 shadow-md"
            onStartShouldSetResponder={() => true} // To prevent closing modal when interacting inside
          >
            {/* Close Button */}
            <TouchableOpacity
              className="absolute top-3 right-3 bg-red-500 w-8 h-8 rounded-full items-center justify-center"
              onPress={toggleModal}
            >
              <Text className="text-white font-bold text-lg">X</Text>
            </TouchableOpacity>

            {/* Wheel Content */}
            <WheelContent />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}
