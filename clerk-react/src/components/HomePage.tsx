import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";

interface Task {
  task: string;
  dueDate: string;
  priority: string;
  description: string;
  completed: boolean;
}

const TaskManager: React.FC = () => {
  const clerk = useClerk();
  const { user } = clerk;
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [priority, setPriority] = useState<string>("Low");
  const [description, setDescription] = useState<string>("");

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      const newTask: Task = {
        task: taskInput,
        dueDate: dueDate,
        priority: priority,
        description: description,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setTaskInput("");
      setDueDate("");
      setPriority("Low");
      setDescription("");
    }
  };

  const handleTaskCompletion = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleSignOut = () => {
    clerk.signOut();
  };

  if (!user) {
    navigate("/signin");
    return null;
  }

  return (
    <div className="task-manager">
      <h1>My Tasks</h1>
      <div className="add-task">
        <input
          type="text"
          placeholder="Enter task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <input
          type="date"
          placeholder="Due date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <table className="task-list">
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className={task.completed ? "completed" : ""}>
              <td>{task.task}</td>
              <td>{task.description}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>
                <button onClick={() => handleTaskCompletion(index)}>
                  {task.completed ? "Completed" : "Not completed"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default TaskManager;
