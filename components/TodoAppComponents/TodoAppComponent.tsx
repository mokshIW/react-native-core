import { View, Text } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { TodoInput } from "./TodoInput";
import TodoList from "./TodoList";
import { Todo } from "@/types";

export default function TodoAppComponent() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    console.log("text", text);
    setTodoList([
      ...todoList,
      {
        id: Date.now().toString(),
        text,
        completed: false,
      },
    ]);
  };

  const deleteTodo = (id: string) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    console.log("id", id);
    console.log("newText", newText);

    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
  };

  const toggleTodo = (id: string) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  console.log("todoList", todoList);
  return (
    <View className="flex-1 p-4 mt-6">
      <Stack.Screen options={{ headerShown: false }} />
      <Text className="text-2xl font-bold mb-5 text-center">Todo App</Text>
      <TodoInput onAddTodo={addTodo} />
      <TodoList
        todoList={todoList}
        onEditTodo={editTodo}
        onDeleteTodo={deleteTodo}
        onToggleTodo={toggleTodo}
      />
    </View>
  );
}
