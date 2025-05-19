import React, { useState } from 'react';

function WishlistForm({ onAdd }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category) return;
    onAdd({ id: Date.now(), name, category });
    setName('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="wishlist-form">
      <input
        type="text"
        placeholder="Item name (e.g., MacBook)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category (e.g., Gadget)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default WishlistForm;
