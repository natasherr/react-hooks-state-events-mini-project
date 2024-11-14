import React from "react";
import Task from "./Task"

function TaskList({onDeleteTask, tasks}) {
  const taskList= tasks.map((task, index)=>(
    <Task key={index} category={task.category} text={task.text} onDeleteTask={onDeleteTask}/>
  ))
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
