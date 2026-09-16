import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';

function App() {
const [ taskState, setTaskState ] = useState({
  tasks: [
    {title: "Dishes", description: "Clean the dishes in the sink", deadline: "Today"},
    {title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow"},
    {title: "Tidy up", deadline: "Today"}
  ]
});

  return (
    <div className="container">
      <h1>Taskly</h1>
      {taskState.tasks.map((task) => (
        <Task
          title={task.title}
          description={task.description}
          deadline={task.deadline}
        />
      ))}
    </div>
  );
}

export default App;
