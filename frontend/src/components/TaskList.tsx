import React from "react";
import TaskCard from "./TaskCard";

interface Task {
    _id: string;
    title: string;
    description?: string;
    status: string;
}

interface TaskListProps {
    tasks: Task[];
    onDelete: (id: string) => void;
    onToggleStatus: (task: Task) => void;
    onEdit: (task: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({
    tasks,
    onDelete,
    onToggleStatus,
    onEdit,
}) => {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tasks.map((task) => (
                <TaskCard
                    key={task._id}
                    task={task}
                    onDelete={onDelete}
                    onToggleStatus={onToggleStatus}
                    onEdit={onEdit}
                />
            ))}
        </div>
    );
};

export default TaskList;
