"use client";

import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import {
    Button,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Box,
} from "@mui/material";
import { Todo } from "./types/todo";

export default function TodoPage() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState("all");
    const [todoToEdit, setTodoToEdit] = useState<Todo | null>(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedTodos, setSelectedTodos] = useState<number[]>([]);
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [deletingTodoIds, setDeletingTodoIds] = useState<number[]>([]);

    const handleAddTodo = (todo: Todo) => {
        setTodos([...todos, todo]);
        setOpenDialog(false);
    };

    const handleEditTodo = (id: number, updatedTodo: Todo) => {
        setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
        setTodoToEdit(null);
        setOpenDialog(false);
    };

    const handleDeleteTodo = (id: number) => {
        setDeletingTodoIds([id]);
        setOpenConfirmDialog(true);
    };

    const handleBulkDelete = () => {
        setDeletingTodoIds(selectedTodos);
        setOpenConfirmDialog(true);
    };

    const confirmDelete = () => {
        setTodos(todos.filter((todo) => !deletingTodoIds.includes(todo.id)));
        setSelectedTodos([]);
        setOpenConfirmDialog(false);
    };

    const cancelDelete = () => {
        setOpenConfirmDialog(false);
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === "all") return true;
        if (filter === "pending") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    const handleOpenAddTodo = () => {
        setTodoToEdit(null);
        setOpenDialog(true);
    };

    return (
        <Box sx={{ maxWidth: "lg", mx: "auto", p: 6 }}>
            <Typography variant="h3" align="center" sx={{ fontWeight: 700 }}>
                To Do List
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    mb: 4,
                    justifyContent: "center",
                }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpenAddTodo}
                >
                    New Todo Item
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    onClick={handleBulkDelete}
                    disabled={selectedTodos.length === 0}
                >
                    Delete
                </Button>
            </Box>

            <TodoForm
                onAddTodo={handleAddTodo}
                onEditTodo={handleEditTodo}
                todoToEdit={todoToEdit}
                open={openDialog}
                setOpen={setOpenDialog}
            />

            <Box
                sx={{
                    display: "flex",
                    gap: 1,
                    mb: 1,
                }}
            >
                {["all", "pending", "completed"].map((filterOption) => (
                    <Button
                        key={filterOption}
                        onClick={() => setFilter(filterOption)}
                        variant="contained"
                        color={
                            filter === filterOption ? "primary" : "secondary"
                        }
                    >
                        {filterOption.charAt(0).toUpperCase() +
                            filterOption.slice(1)}
                    </Button>
                ))}
            </Box>

            <Box
                sx={{
                    border: "1px solid #ddd",
                    borderRadius: 1,
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                {filteredTodos.length === 0 ? (
                    <Typography
                        variant="h4"
                        align="center"
                        sx={{ color: "gray" }}
                    >
                        No Todo Item
                    </Typography>
                ) : (
                    <TodoList
                        todos={filteredTodos}
                        onDeleteTodo={handleDeleteTodo}
                        onEditTodo={(todo) => {
                            setTodoToEdit(todo);
                            setOpenDialog(true);
                        }}
                        selectedTodos={selectedTodos}
                        onSelectTodo={(id) => {
                            setSelectedTodos((prev) =>
                                prev.includes(id)
                                    ? prev.filter((todoId) => todoId !== id)
                                    : [...prev, id]
                            );
                        }}
                    />
                )}
            </Box>

            <Dialog open={openConfirmDialog} onClose={cancelDelete}>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                    <Typography>
                        Are you sure you want to delete the selected todo items?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancelDelete} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={confirmDelete} color="secondary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
