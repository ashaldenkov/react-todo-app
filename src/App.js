import './App.css';
import {Footer} from './components/Footer.js';
import {TaskList} from './components/TaskList.js';
import {NewTaskForm} from './components/NewTaskForm.js';


function App() {
  return (
    <section className="todoapp">
          <div className ="header">
            <h1>todos</h1>
            <NewTaskForm />
          </div>
          <section className="main">
          <TaskList />
          <Footer />
          </section>
    </section>
  );
}

export default App;
