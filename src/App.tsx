import {useState} from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <form>
      <input placeholder='Add new task' required />
      <button type='submit'>Add</button>
    </form>
  );
}

export default App;
