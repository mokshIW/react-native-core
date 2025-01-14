import { View, Text, TouchableOpacity } from "react-native";
import React, { FC, useState } from "react";
import { Todo } from "@/types";
import TodoEdit from "./TodoEdit";

interface TodoItemProps {
  todo: Todo;
  onEditTodo: (newText: string) => void;
  onDeleteTodo: () => void;
  onToggleTodo: () => void;
}

const TodoItem: FC<TodoItemProps> = ({
  todo,
  onEditTodo,
  onDeleteTodo,
  onToggleTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  console.log(isEditing, "isEditing");

  const handleEdit = (newText: string) => {
    onEditTodo(newText);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <TodoEdit
        todo={todo}
        onSave={handleEdit}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <View className="flex flex-row items-center py-2.5 border-b border-[#cccccc]">
      <TouchableOpacity onPress={onToggleTodo} className="flex-1">
        <Text
          className={`text-lg font-semibold ${
            todo?.completed && "line-through text-green-700"
          } `}
        >
          {todo.text}
        </Text>
      </TouchableOpacity>
      <View className="flex flex-row">
        <TouchableOpacity
          onPress={() => setIsEditing(true)}
          className="mr-2 bg-[#007aff] px-3.5 py-2 rounded-lg"
        >
          <Text className="text-white text-lg font-medium">Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onDeleteTodo}
          className="bg-[#ff3b30] px-2.5 py-2 rounded-lg"
        >
          <Text className="text-white text-lg font-medium">Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;
