import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Taskly</h1>
      <Task title="Dishes" description="Clean the dishes in the sink" deadline="Today" />
      <Task title="Laundry" description="Put all ditry clothes in the washer" deadline="Tomorrow" />
      <Task title="Tidy" description="Hoover, dust, and organise room" deadline="Today" />
    </div>
  );
}

export default App;
