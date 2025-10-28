import './App.css';
import NewEntry from './components/NewEntry';
import DisplayTodos from './components/DisplayTodos';

/*Compulsory Task 2

This is a to do app using React and Redux Toolkit.
The app allows the user to enter a new task, edit and update 
an existing task and delete a task should they choose to do so.*/

function App() {
  return (
    <div className="App">
      <main>
        <div className='todo-container'>
      < NewEntry />
      < DisplayTodos />
      </div>
      </main>
    </div>
  );
}

export default App;
