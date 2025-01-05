import Image from "next/image";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">TODO App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
