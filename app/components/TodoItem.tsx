"use client";

import { FC } from "react";
import { Button, Typography, Paper, Checkbox, Box } from "@mui/material";
import { Todo } from "../types/todo";

interface TodoItemProps {
    todo: Todo;
    onDeleteTodo: (id: number) => void;
    onEditTodo: () => void;
    onSelectTodo: () => void;
    isSelected: boolean;
}

const TodoItem: FC<TodoItemProps> = ({
    todo,
    onDeleteTodo,
    onEditTodo,
    onSelectTodo,
    isSelected,
}) => {
    const handleEditClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onEditTodo();
    };

    const handleDeleteClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onDeleteTodo(todo.id);
    };

    const handleCheckboxChange = (e: React.MouseEvent) => {
        e.stopPropagation();
        onSelectTodo();
    };

    const handleItemClick = () => {
        onSelectTodo();
    };

    return (
        <Paper
            elevation={2}
            sx={{
                p: 2,
                my: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                border: "1px solid #ddd",
                borderRadius: 1,
                width: "100%",
            }}
            onClick={handleItemClick}
        >
            <div
                style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
                <Checkbox
                    checked={isSelected}
                    onClick={handleCheckboxChange}
                    color="primary"
                    size="small"
                />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                        paddingLeft: "10px",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            textDecoration: todo.completed
                                ? "line-through"
                                : "none",
                            color: todo.completed ? "gray" : "black",
                        }}
                    >
                        {todo.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                        {todo.description.length > 100
                            ? `${todo.description.slice(0, 100)}...`
                            : todo.description}
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{ color: "InfoText", fontSize: "0.875rem" }}
                    >
                        Created: {new Date(todo.createdTime).toLocaleString()}
                    </Typography>
                    {todo.deadline && (
                        <Typography
                            variant="body2"
                            sx={{ color: "tomato", fontSize: "0.875rem" }}
                        >
                            Deadline: {new Date(todo.deadline).toLocaleString()}
                        </Typography>
                    )}
                    {todo.completed && todo.completedTime && (
                        <Typography
                            variant="body2"
                            sx={{ color: "Highlight", fontSize: "0.875rem" }}
                        >
                            Completed:{" "}
                            {new Date(todo.completedTime).toLocaleString()}
                        </Typography>
                    )}
                </Box>

                <div>
                    <Button
                        variant="outlined"
                        onClick={handleEditClick}
                        color="primary"
                        size="small"
                        sx={{ py: 1, px: 2, marginRight: 1 }}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={handleDeleteClick}
                        color="error"
                        size="small"
                        sx={{ py: 1, px: 2 }}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </Paper>
    );
};

export default TodoItem;
