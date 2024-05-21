import TasksFilter from './TasksFilter.js';

export function Footer(list) {
    return (
  <footer className="footer">
    <span className="todo-count">{Object.values(list)[0].length} items left</span>
    <TasksFilter />
    <button className="clear-completed">Clear completed</button>
  </footer>
)
}