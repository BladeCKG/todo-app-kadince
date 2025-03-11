export interface Todo {
    id: number;
    name: string;
    description: string;
    createdTime: string;
    completedTime: string | null;
    completed: boolean;
    urgency: "low" | "medium" | "high";
    deadline: string | null;
}
