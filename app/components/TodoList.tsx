"use client";

import { FC } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../types/todo";

interface TodoListProps {
    todos: Todo[];
    onDeleteTodo: (id: number) => void;
    onEditTodo: (todo: Todo) => void;
    selectedTodos: number[];
    onSelectTodo: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({
    todos,
    onDeleteTodo,
    onEditTodo,
    selectedTodos,
    onSelectTodo,
}) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDeleteTodo={onDeleteTodo}
                    onEditTodo={() => onEditTodo(todo)}
                    onSelectTodo={() => onSelectTodo(todo.id)}
                    isSelected={selectedTodos.includes(todo.id)}
                />
            ))}
        </div>
    );
};

export default TodoList;
