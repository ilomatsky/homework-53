import React, {ChangeEvent} from 'react';

interface AddTaskFormProps {
  currentTask: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddTask: () => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({
                                             currentTask,
                                             handleInputChange,
                                             handleAddTask,
                                           }) => {
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