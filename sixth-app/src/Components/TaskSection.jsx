import React, { useContext, useState } from "react";
import { TaskContext } from "./TaskContext";

function TaskSection() {
  const { tasks, addTask } = useContext(TaskContext);
  const [taskText, setTaskText] = useState("");

  const handleAdd = () => {
    addTask(taskText);
    setTaskText("");
  };

  return (
    <div>
      <h2>Task Section</h2>

      <input
        type="text"
        placeholder="Enter a task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskSection;
