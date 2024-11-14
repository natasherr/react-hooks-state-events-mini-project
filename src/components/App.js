import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
import { useState } from "react";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [category, setCategory] = useState("All")
  const [tasks, setTasks] = useState(TASKS)

  function handleDeleteTask(deletedTaskText) {setTasks(tasks.filter((task) => task.text !== deletedTaskText))}

  function handleAddTask(newTask) {setTasks([...tasks, newTask])}

  const visibleTasks = tasks.filter((task) => category === "All" || task.category === category)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategory={category}  onSelectCategory={setCategory}  categories={CATEGORIES}/>

      <NewTaskForm categories={CATEGORIES.filter((category) => category !== "All")} onTaskFormSubmit={handleAddTask} />

      <TaskList onDeleteTask={handleDeleteTask} tasks={visibleTasks} />
    </div>
  );
}

export default App;
