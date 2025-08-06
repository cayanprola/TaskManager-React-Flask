import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store our tasks
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React basics', completed: false, category: 'Learning' },
    { id: 2, title: 'Build portfolio project', completed: false, category: 'Career' },
    { id: 3, title: 'Apply to jobs', completed: false, category: 'Career' }
  ]);
  
  const [newTask, setNewTask] = useState('');
  const [newCategory, setNewCategory] = useState('General');

  // Function to add a new task
  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(), // Simple ID generation for now
        title: newTask,
        completed: false,
        category: newCategory
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  // Function to toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Task Manager</h1>
        <p className="app-subtitle">Organize your tasks efficiently</p>
        <p className="app-version">Version 1.0</p>
        <p className="app-github">
          Created by -
          <a href="https://github.com/cayanprola" target="_blank" rel="noopener noreferrer">
          Cayan Prola
          </a>
        </p>
      </header>

      <main className="app-main">
        {/* Add Task Form */}
        <form onSubmit={addTask} className="task-form">
          <div className="form-group">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task..."
              className="task-input"
            />
            <select 
              value={newCategory} 
              onChange={(e) => setNewCategory(e.target.value)}
              className="category-select"
            >
              <option value="General">General</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Learning">Learning</option>
              <option value="Career">Career</option>
            </select>
            <button type="submit" className="add-btn">Add Task</button>
          </div>
        </form>

        {/* Tasks List */}
        <div className="tasks-container">
          <h2>Your Tasks ({tasks.length})</h2>
          {tasks.length === 0 ? (
            <p className="no-tasks">No tasks yet. Add one above!</p>
          ) : (
            <div className="tasks-list">
              {tasks.map(task => (
                <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                  <div className="task-content">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="task-checkbox"
                    />
                    <span className="task-title">{task.title}</span>
                    <span className="task-category">{task.category}</span>
                  </div>
                  <button 
                    onClick={() => deleteTask(task.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Task Statistics */}
        <div className="task-stats">
          <div className="stat">
            <strong>Total:</strong> {tasks.length}
          </div>
          <div className="stat">
            <strong>Completed:</strong> {tasks.filter(task => task.completed).length}
          </div>
          <div className="stat">
            <strong>Remaining:</strong> {tasks.filter(task => !task.completed).length}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;