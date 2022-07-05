import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.css';

function App() {
  return (
    <div className="App">
      <span className="title">TODO LIST</span>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
