import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { FC, useState } from "react";

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

const TodoInput: FC<TodoInputProps> = ({ onAddTodo }) => {
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim()) {
      onAddTodo(text);
      setText("");
    }
  };

  return (
    <View className="w-full flex flex-row mb-5">
      <TextInput
        value={text}
        onChangeText={setText}
        className="w-full flex-1 border border-[#cccccc] rounded-lg px-4 py-2 mr-3"
        placeholder="Add a new todo"
      />
      <TouchableOpacity
        onPress={handleAddTodo}
        className="bg-[#007AFF] px-4 py-2 items-center rounded-lg"
      >
        <Text className="text-white text-lg font-bold">Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export { TodoInput };
