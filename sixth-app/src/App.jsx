import React from "react";
import { TaskProvider } from "./Components/TaskContext";
import TaskSection from "./Components/TaskSection";

function App() {
  return (
    <TaskProvider>
      <TaskSection />
    </TaskProvider>
  );
}

export default App;
