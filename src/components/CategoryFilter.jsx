import React from 'react';

function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="filter">
      <label>Filter by category: </label>
      <select value={selected} onChange={(e) => onSelect(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
