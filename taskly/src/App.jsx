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
      <Task title={taskState.tasks[0].title} description={taskState.tasks[0].description} deadline={taskState.tasks[0].deadline} />
      <Task title={taskState.tasks[1].title} description={taskState.tasks[1].description} deadline={taskState.tasks[1].deadline} />
      <Task title={taskState.tasks[2].title} deadline={taskState.tasks[2].deadline} />
    </div>
  );
}

export default App;
