import React from "react";
import Input from "./Input";
import Button from "./Button";

interface TaskFormProps {
    title: string;
    setTitle: (value: string) => void;
    description: string;
    setDescription: (value: string) => void;
    status: string;
    setStatus: (value: string) => void;
    onSubmit: (e: React.FormEvent) => void;
    isEditing: boolean;
    onCancel: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
    title,
    setTitle,
    description,
    setDescription,
    status,
    setStatus,
    onSubmit,
    isEditing,
    onCancel,
}) => {
    return (
        <form
            onSubmit={onSubmit}
            className="mb-10 max-w-xl bg-gray-900 p-10 rounded-2xl relative"
        >
            <button
                type="button"
                onClick={onCancel}
                className="absolute top-4 cursor-pointer bg-gray-700 px-2 py-1 rounded right-4 text-gray-400 hover:text-white"
            >
                ✕
            </button>
            <Input
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <Input
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-400">Status</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full rounded-lg bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-white transition"
                >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <Button title={isEditing ? "Update Task" : "Add Task"} />
        </form>
    );
};

export default TaskForm;
