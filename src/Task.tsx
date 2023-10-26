import React from "react";

const Task = ({ task, handleDeleteTask }) => {
  return (
    <div>
      {task.text}
      <button onClick={() => handleDeleteTask(task.id)}>Удалить</button>
    </div>
  );
};

export default Task;
