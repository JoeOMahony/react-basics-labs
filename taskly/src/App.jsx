import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';
import AddTaskForm from './components/Form';
import { v4 as uuidv4 } from 'uuid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TaskIcon from '@mui/icons-material/Task';
import Divider from '@mui/material/Divider';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/CheckCircle';

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title: "Dishes", description: "Clean the dishes in the sink", deadline: "Today", priority: "Low", done: false },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority: "Medium", done: false },
      { id: 3, title: "Tidy up", deadline: "Today", priority: "High", done: false }
    ]
  });

  const [formState, setFormState] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: "Medium", // default value
    done: false
  });

  const [formAlertState, setFormAlertState] = useState(false);

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({ tasks });
    // console.log(`${taskIndex} ${tasks[taskIndex].done}`);

    if (tasks[taskIndex].done) {
      setFormAlertState(true);
    }
  }

  const formAlertCloseHandler = () => {
    setFormAlertState(false);
  }

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({ tasks })
  }

  const formChangeHandler = (event) => {
    let form = { ...formState };

    switch (event.target.name) {
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
    const form = { ...formState };

    form.id = uuidv4();

    tasks.push(form); // Add the form obj to the tasks arr
    setTaskState({ tasks }) // Update task state with updated tasks arr
  }

  return (
    <div className="container">
      {/* App Header */}
      <Container component="main">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            backgroundColor: 'navy',
            textAlign: 'center',
            color: 'white',
            padding: '20px',
            margin: '20px 0 40px 0',
            borderRadius: '50px',
            '&:hover': {
              transform: 'scale(0.99)',
              transition: 'transform 0.3s ease-in-out',
            }
          }}
        >
          <TaskIcon sx={{ margin: '20px 20px 0 0', fontSize: '48px' }} />
          Taskly
        </Typography>
      </Container>
      {/* End App Header */}

      <Divider variant="middle" sx={{ m: '4em 4em' }} />


      {/* Task Card Grid */}
      <Container maxWidth="md" component="main">
        <Grid
          container
          spacing={5}
          sx={{ justifyContent: "center" }}
        >
          {taskState.tasks.map((task, index) => (
            <Task
              title={task.title}
              description={task.description}
              deadline={task.deadline}
              priority={task.priority}
              key={task.id}
              done={task.done}
              markDone={() => doneHandler(index)}
              deleteTask={() => deleteHandler(index)}
            />
          ))}
        </Grid>
      </Container>

      {/* Alert for form submission */}
      <Snackbar
        open={formAlertState}
        autoHideDuration={3000}
        onClose={formAlertCloseHandler}
      >
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
          onClose={formAlertCloseHandler}
          variant="filled"
        >
          Task Completed!
        </Alert>
      </Snackbar>
      {/* End Alert for form submission */}
      {/* End Task Card Grid */}

      {/* Footer - Add Task Form */}
      <Container
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          my: 6,
          py: 6,
        }}
      >
        <Grid container sx={{ justifyContent: "center" }}>
          <AddTaskForm
            change={formChangeHandler}
            // onChange={(event) => props.change(event)}
            submit={formSubmitHandler}
          />
        </Grid>
      </Container>
      {/* Footer - Add Task Form */}
    </div>
  );
}

export default App;