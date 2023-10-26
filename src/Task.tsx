import { FC } from "react";

interface TaskProps {
  task: { id: string; text: string };
  handleDeleteTask: (id: string) => void;
}

const Task: FC<TaskProps> = ({ task, handleDeleteTask }) => {
  return (
    <div>
      {task.text}
      <button onClick={() => handleDeleteTask(task.id)}>Удалить</button>
    </div>
  );
};

export default Task;
