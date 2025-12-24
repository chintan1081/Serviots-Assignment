interface Task {
  _id: string;
  title: string;
  description?: string;
  status: string;
}

interface Props {
  task: Task;
  onDelete: (id: string) => void;
  onToggleStatus: (task: Task) => void;
  onEdit: (task: Task) => void;
}

const TaskCard: React.FC<Props> = ({ task, onDelete, onToggleStatus, onEdit }) => {
  return (
    <div className="rounded-xl bg-gray-900 p-5 border border-gray-800">
      <h3 className="text-lg font-semibold">{task.title}</h3>
      {task.description && (
        <p className="text-gray-400 mt-1">{task.description}</p>
      )}

      <div className="mt-4 flex items-center justify-between">
        <span
          className={`text-sm ${task.status === "completed"
            ? "text-green-400"
            : "text-yellow-400"
            }`}
        >
          {task.status}
        </span>

        <div className="flex gap-3">
          <button
            onClick={() => onToggleStatus(task)}
            className="text-sm cursor-pointer text-blue-400 hover:underline"
          >
            Toggle
          </button>

          <button
            onClick={() => onEdit(task)}
            className="text-sm cursor-pointer text-yellow-400 hover:underline"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(task._id)}
            className="text-sm cursor-pointer text-red-400 hover:underline"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
