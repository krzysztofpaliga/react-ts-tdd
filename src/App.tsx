import { useState } from 'react';
import { Task } from './types';
import TaskAdd from './TaskAdd';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const addTask = (newTask: Task): void => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <>
      <h1>Tasks</h1>
      <TaskAdd addTask={addTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
