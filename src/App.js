import logo from './logo.svg';
//import './App.css';
import TodoCounter from './components/TodoCounter';
import TodoList from './components/TodoList';
import TodoSearch from './components/TodoSearch';

const todos = [
  { id: 1, text: "Primera Tarea", completed: false },
  { id: 2, text: "Segunda Tarea", completed: false },
  { id: 3, text: "Tercera Tarea", completed: false }
]
function App() {
  return (
    <div className="container-fluid">
      <TodoCounter />
      <TodoSearch />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
