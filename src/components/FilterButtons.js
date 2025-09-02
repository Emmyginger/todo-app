import React from 'react';

function FilterButtons({ setFilter, clearAllTodos }) {
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('active')}>Active</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      <button onClick={clearAllTodos} className="clear-button">Clear All</button>
    </div>
  );
}

export default FilterButtons;