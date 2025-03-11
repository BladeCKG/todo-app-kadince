"use client";

import { FC, useState, useEffect } from "react";
import {
    Button,
    TextField,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Checkbox,
    FormControlLabel,
    Alert,
    Box,
    Typography,
} from "@mui/material";
import { Todo } from "../types/todo";

interface TodoFormProps {
    onAddTodo: (todo: Todo) => void;
    onEditTodo: (id: number, updatedTodo: Todo) => void;
    todoToEdit: Todo | null;
    open: boolean;
    setOpen: (open: boolean) => void;
}

const TodoForm: FC<TodoFormProps> = ({
    onAddTodo,
    onEditTodo,
    todoToEdit,
    open,
    setOpen,
}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [urgency, setUrgency] = useState<"low" | "medium" | "high">("low");
    const [deadline, setDeadline] = useState<string | null>(null);
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (todoToEdit) {
            setName(todoToEdit.name);
            setDescription(todoToEdit.description);
            setUrgency(todoToEdit.urgency);
            setDeadline(todoToEdit.deadline);
            setCompleted(todoToEdit.completed);
        } else {
            setName("");
            setDescription("");
            setUrgency("low");
            setDeadline(null);
            setCompleted(false);
        }
        setError(null);
    }, [todoToEdit]);

    const handleSubmit = () => {
        if (!name.trim() || !description.trim()) {
            setError("Name and Description cannot be empty");
            return;
        }

        const newTodo: Todo = {
            id: todoToEdit ? todoToEdit.id : Date.now(),
            name,
            description,
            createdTime: todoToEdit
                ? todoToEdit.createdTime
                : new Date().toISOString(),
            completedTime: completed ? new Date().toISOString() : null,
            completed,
            urgency,
            deadline,
        };

        if (todoToEdit) {
            onEditTodo(todoToEdit.id, newTodo);
        } else {
            onAddTodo(newTodo);
        }

        setOpen(false);
        emptifyForm();
    };

    const handleClose = () => {
        setOpen(false);
        emptifyForm();
    };

    const emptifyForm = () => {
        setName("");
        setDescription("");
        setUrgency("low");
        setDeadline(null);
        setCompleted(false);
        setError(null);
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle>
                {todoToEdit ? "Edit Todo Item" : "Create New Todo Item"}
            </DialogTitle>
            <DialogContent>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {" "}
                    {error && <Alert severity="error">{error}</Alert>}{" "}
                    <TextField
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 2 }}
                        inputProps={{ maxLength: 50 }}
                        error={!!error && !name.trim()}
                    />
                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        sx={{ marginBottom: 2 }}
                        inputProps={{ maxLength: 200 }}
                        error={!!error && !description.trim()}
                    />
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <InputLabel>Urgency</InputLabel>
                        <Select
                            value={urgency}
                            onChange={(e) =>
                                setUrgency(
                                    e.target.value as "low" | "medium" | "high"
                                )
                            }
                            label="Urgency"
                        >
                            <MenuItem value="low">Low</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="high">High</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        label="Deadline"
                        type="datetime-local"
                        value={deadline || ""}
                        onChange={(e) => setDeadline(e.target.value || null)}
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{ marginBottom: 2 }}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={completed}
                                onChange={(e) => setCompleted(e.target.checked)}
                            />
                        }
                        label="Mark as Completed"
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                    color="secondary"
                    sx={{ py: 1, px: 3 }}
                >
                    Cancel
                </Button>
                <Button
                    onClick={handleSubmit}
                    color="primary"
                    sx={{ py: 1, px: 3 }}
                >
                    {todoToEdit ? "Update" : "Create"}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default TodoForm;
