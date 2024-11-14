import React from "react";
import { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [category, setCategory] = useState("Code")
  const [text, setText] = useState("")

  function handleSubmit(event) {
      event.preventDefault();
      onTaskFormSubmit({ text, category });
      setText("");
      setCategory("Code");
    }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input value={text} type="text" name="text" onChange={(e)=>setText(e.target.value)} />
      </label>
      <label>
        Category
        <select value={category} name="category" onChange={(e)=>setCategory(e.target.value)} >
          {categories.map((cat)=>(<option key={cat}>{cat}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
