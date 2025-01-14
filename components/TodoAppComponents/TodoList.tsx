import { View, Text, ScrollView } from "react-native";
import React, { FC } from "react";
import { Todo } from "@/types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todoList: Todo[];
  onEditTodo: (id: string, newText: string) => void;
  onDeleteTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
}

const TodoList: FC<TodoListProps> = ({
  todoList,
  onEditTodo,
  onDeleteTodo,
  onToggleTodo,
}) => {
  return (
    <ScrollView className="flex-1">
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEditTodo={(newText) => onEditTodo(todo?.id, newText)}
          onDeleteTodo={() => onDeleteTodo(todo?.id)}
          onToggleTodo={() => onToggleTodo(todo?.id)}
        />
      ))}
    </ScrollView>
  );
};

export default TodoList;
