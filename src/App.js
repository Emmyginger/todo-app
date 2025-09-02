import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import FilterButtons from './components/FilterButtons';
import './index.css';

function App() {
  // State to hold the list of todos. It initializes from localStorage if available.
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  // State to manage the current filter view ('all', 'active', 'completed')
  const [filter, setFilter] = useState('all');

  // useEffect hook to save todos to localStorage whenever the list changes.
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), // Simple unique ID
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Function to toggle a todo's completed status
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Function to clear all todos
  const clearAllTodos = () => {
    setTodos([]);
  };

  // Logic to filter todos based on the current filter state
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') {
      return !todo.completed;
    }
    if (filter === 'completed') {
      return todo.completed;
    }
    return true; // for 'all'
  });

  // Calculate the number of tasks remaining
  const tasksRemaining = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="todo-app">
      <h1>Todo List ✔️</h1>
      <p>What needs to be done?</p>
      
      <TodoForm addTodo={addTodo} />
      
      <FilterButtons setFilter={setFilter} clearAllTodos={clearAllTodos} />
      
      <h2 className="list-heading">{tasksRemaining} tasks remaining</h2>
      
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;