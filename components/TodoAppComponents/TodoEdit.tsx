import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { FC, useState } from "react";
import { Todo } from "@/types";

interface TodoEditProps {
  todo: Todo;
  onSave: (newText: string) => void;
  onCancel: () => void;
}

const TodoEdit: FC<TodoEditProps> = ({ todo, onSave, onCancel }) => {
  const [text, setText] = useState(todo?.text);

  const handleSave = () => {
    if (text.trim()) {
      onSave(text.trim());
    }
  };

  return (
    <View className="flex flex-row py-2.5 border-b border-[#cccccc]">
      <TextInput
        value={text}
        onChangeText={setText}
        className="flex-1 border border-[#cccccc] px-2.5 py-1 mr-2.5"
      />

      <View>
        <TouchableOpacity
          onPress={handleSave}
          className="mr-2 bg-[#4cd964] px-2.5 py-2 rounded-lg"
        >
          <Text className="text-white text-md font-medium">Save</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onCancel}
          className="bg-[#ff9500] px-2.5 py-2 rounded-lg"
        >
          <Text className="text-white text-md font-medium">Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoEdit;
