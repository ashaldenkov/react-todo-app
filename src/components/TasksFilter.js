
export default function TasksFilter({isActive, setActive}) {
    const handleFirst = () => {
        setActive("first");
      };
      const handleSecond = () => {
        setActive("second");
      };
      const handleThird = () => {
        setActive("third");
      };
    
      

    return (
    <ul className="filters">
    <li>
    <button className={isActive === 'first' ? 'selected' : null} onClick={ () => handleFirst()}>All</button>
    </li>
    <li>
    <button className={isActive === 'second' ? 'selected' : null} onClick={ () => handleSecond()}>Active</button>
    </li>
    <li>
    <button className={isActive === 'third' ? 'selected' : null} onClick={ () => handleThird()}>Completed</button>
    </li>
    </ul>
    )
}