React To-Do List App ✔️
A clean, modern, and responsive to-do list application built with React. This app allows you to manage your daily tasks with a simple and intuitive interface. It also persists your tasks in the browser's local storage, so you'll never lose your list on a page refresh!

## Features
Add & Delete Tasks: Easily add new tasks and remove them when they're no longer needed.

Mark as Complete: Click the checkbox to toggle a task's completion status. Completed tasks are visually distinguished with a strikethrough.

Task Filtering: View all tasks, only the active ones, or only the completed ones.

Persistent Storage: Your to-do list is saved in localStorage, so your tasks remain even after closing the browser tab or refreshing the page.

Task Counter: A live counter shows you exactly how many tasks are left to complete.

Clear All: A dedicated button to clear all tasks from the list at once.

Fully Responsive: The layout is optimized for a seamless experience on both desktop and mobile devices.

## Technologies Used
This project was built using modern web technologies:

React: A JavaScript library for building user interfaces.

React Hooks: Utilizes useState for state management and useEffect for side effects (like interacting with localStorage).

JavaScript (ES6+): For application logic.

CSS3: For custom styling and responsive design using media queries.

HTML5: For the basic structure of the application.

## Getting Started
To get a local copy up and running, follow these simple steps.

### Prerequisites
Make sure you have Node.js and npm installed on your machine. You can download them from nodejs.org.

### Installation & Setup
Clone the repository:

Bash

git clone https://github.com/Emmyginger/todo-app
Navigate to the project directory:

Bash

cd your-repository-name
Install NPM packages:

Bash

npm install
Run the application:

Bash

npm start
This will run the app in development mode. Open http://localhost:3000 to view it in your browser. The page will reload when you make changes.

## Project Structure
The project is organized into components for better maintainability and separation of concerns.

src/
├── components/
│   ├── FilterButtons.js  # Renders the filter and 'Clear All' buttons
│   ├── TodoForm.js       # Handles the input form for new todos
│   ├── TodoItem.js       # Renders a single todo item
│   └── TodoList.js       # Renders the list of all todo items
├── index.css             # Main stylesheet for the application
├── App.js                # Main app component holding state and logic
└── index.js              # Entry point for the React application