import {useState, ChangeEvent, FC} from 'react';
import AddTaskForm from './AddTaskForm';
import Task from './Task';
import './App.css';

interface TaskItem {
  id: string;
  text: string;
}

const App: FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([
    {id: '1', text: 'Example of a task 1'},
    {id: '2', text: 'Example of a task 2'},
    {id: '3', text: 'Example of a task 3'},
  ]);
  const [currentTask, setCurrentTask] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(e.target.value);
  };

  const handleAddTask = () => {
    if (currentTask.trim() === '') return;
    const newTask: TaskItem = {id: Date.now().toString(), text: currentTask};
    setTasks([...tasks, newTask]);
    setCurrentTask('');
  };

  const handleDeleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className='App'>
      <AddTaskForm
        currentTask={currentTask}
        handleInputChange={handleInputChange}
        handleAddTask={handleAddTask}
      />
      {tasks.map((task) => (
        <Task key={task.id} task={task} handleDeleteTask={handleDeleteTask}/>
      ))}
    </div>
  );
};

export default App;
