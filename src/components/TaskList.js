function TaskList({ tasks }) {
    return (
      <div className="task-list">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TaskList;
  