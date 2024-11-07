import { useState } from 'react';
import { Task } from './types';

export type TaskAddProps = {
  addTask: (task: Task) => void;
};

function TaskAdd({ addTask }: TaskAddProps) {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedTaskName = taskName.trim();

    if (!trimmedTaskName) {
      return;
    }

    addTask({
      id: new Date().getTime(),
      title: trimmedTaskName,
      isCompleted: false,
    });
    setTaskName('');
  };

  return (
    <form onSubmit={handleAddTask}>
      <label htmlFor="task-input">Add Task: </label>
      <input
        id="task-input"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
export default TaskAdd;
