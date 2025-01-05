interface Task {
  id: number;
  title: string;
  status: string;
}

export const getTasks = (): Task[] => {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
};

export const addTask = (task: Task): void => {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const updateTask = (updatedTask: Task): void => {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex(task => task.id === updatedTask.id);
  if (taskIndex !== -1) {
    tasks[taskIndex] = updatedTask;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};

export const deleteTask = (taskId: number): void => {
  const tasks = getTasks();
  const updatedTasks = tasks.filter(task => task.id !== taskId);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
};
