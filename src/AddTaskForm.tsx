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
    <div className='AddTaskForm'>
      <input
        type='text'
        value={currentTask}
        onChange={handleInputChange}
        placeholder='Add new task...'
      />
      <button onClick={handleAddTask} type='button'>Add</button>
    </div>
  );
};

export default AddTaskForm;