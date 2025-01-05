"use client";
import React, { useState, useEffect } from 'react';

interface Task {
  id: number;
  title: string;
  status: string;
}

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('pending');
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: Date.now(),
      title,
      status,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTitle('');
    setStatus('pending');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="task-input"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="task-select"
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit" className="task-button">Add Task</button>
    </form>
  );
};

export default TodoForm;
