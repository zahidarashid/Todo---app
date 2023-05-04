
import './App.css';
import TaskList from './components/tasklist';
import Todo from './components/todo';

function App() {
  return (
    <div className="App">
      <Todo />
      <TaskList />
    </div>
  );
}

export default App;
