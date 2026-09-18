import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';
import AddTaskForm from './components/Form';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title: "Dishes", description: "Clean the dishes in the sink", deadline: "Today", priority: "Low", done: false },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority: "Medium", done: false },
      { id: 3, title: "Tidy up", deadline: "Today", priority: "High", done: false }
    ]
  });

  const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: "Medium" // default value
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
    // console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  }

  const deleteHandler = (taskIndex) => {
      const tasks = [...taskState.tasks];
      tasks.splice(taskIndex, 1);
      setTaskState({tasks})
  }

  const formChangeHandler = (event) => {
    let form = {...formState};

    switch(event.target.name) {
      case "title":
        form.title = event.target.value;
        break;
      case "description":
        form.description = event.target.value;
        break;
      case "deadline":
        form.deadline = event.target.value;
        break;
      case "priority":
        form.priority = event.target.value;
        break;
      default:
        form = formState;
    }

    setFormState(form);
  }

  // console.log(formState);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = {...formState};

    form.id = uuidv4();

    tasks.push(form); // Add the form obj to the tasks arr
    setTaskState({tasks}) // Update task state with updated tasks arr
  }

  return (
    <div className="container">
      <h1>Taskly</h1>
      {taskState.tasks.map((task, index) => (
        <Task
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          priority={task.priority}
          key={task.id}
          done={task.done}
          markDone={() => doneHandler(index)}
          deleteTask = {() => deleteHandler(index)}
        />
      ))}
      <AddTaskForm 
        change={formChangeHandler}
        // onChange={(event) => props.change(event)}
        submit={formSubmitHandler}
      />
    </div>
  );
}

export default App;
