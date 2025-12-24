import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import api from "../api/axios";

interface Task {
  _id: string;
  title: string;
  description?: string;
  status: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data.data);
    } catch {
      toast.error("Failed to load tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/tasks/${editingId}`, { title, description, status });
        toast.success("Task updated");
        setEditingId(null);
      } else {
        await api.post("/tasks", { title, description, status });
        toast.success("Task created");
      }

      setTitle("");
      setDescription("");
      setStatus("pending");
      setIsModalOpen(false);
      fetchTasks();
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/tasks/${id}`)
      toast.success("Task deleted");
      setTasks(tasks.filter((t) => t._id !== id));
    } catch {
      toast.error("Delete failed");
    }
  };

  const toggleStatus = async (task: Task) => {
    try {
      await api.put(`/tasks/${task._id}`, {
        title: task.title,
        description: task.description,
        status: task.status === "pending" ? "completed" : "pending",
      });

      fetchTasks();
    } catch {
      toast.error("Update failed");
    }
  };

  const handleEdit = (task: Task) => {
    setTitle(task.title);
    setDescription(task.description || "");
    setStatus(task.status);
    setEditingId(task._id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingId(null);
    setTitle("");
    setDescription("");
    setStatus("pending");
    setIsModalOpen(false);
  };

  const handleLogout = async () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    await api.post("/auth/logout");
    navigate("/login");
  };

  return (
    <div className="relative min-h-screen bg-black text-white p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Tasks</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white cursor-pointer text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Create Todo
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-xl">
            <TaskForm
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              status={status}
              setStatus={setStatus}
              onSubmit={handleCreate}
              isEditing={!!editingId}
              onCancel={handleCloseModal}
            />
          </div>
        </div>
      )}


      <TaskList
        tasks={tasks}
        onDelete={handleDelete}
        onToggleStatus={toggleStatus}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default Dashboard;
