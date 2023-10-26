import {FC} from 'react';

interface TaskProps {
  task: { id: string; text: string };
  handleDeleteTask: (id: string) => void;
}

const Task: FC<TaskProps> = ({task, handleDeleteTask}) => {
  return (
    <div className='Task'>
      {task.text}
      <button onClick={() => handleDeleteTask(task.id)} type='button' className='deleteBtn'>Delete</button>
    </div>
  );
};

export default Task;
