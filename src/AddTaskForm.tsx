import React from "react";

const AddTaskForm = ({ currentTask, handleInputChange, handleAddTask }) => {
  return (
    <div>
      <input
        type="text"
        value={currentTask}
        onChange={handleInputChange}
        placeholder="Введите задачу..."
      />
      <button onClick={handleAddTask}>Добавить</button>
    </div>
  );
};

export default AddTaskForm;
