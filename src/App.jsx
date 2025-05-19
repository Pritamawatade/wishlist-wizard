import React, { useState, useEffect } from 'react';
import WishlistForm from './components/WishlistForm';
import WishlistList from './components/WishlistList';
import CategoryFilter from './components/CategoryFilter'; // Optional


function App() {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addItem = (item) => {
    setWishlist([...wishlist, item]);
  };

  const removeItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const filteredItems = filter === 'All'
    ? wishlist
    : wishlist.filter((item) => item.category === filter);

  const uniqueCategories = ['All', ...new Set(wishlist.map((item) => item.category))];

  return (
    <div className="app">
      <h1>🛒 Wishlist Wizard</h1>
      <WishlistForm onAdd={addItem} />
      <CategoryFilter categories={uniqueCategories} onSelect={setFilter} selected={filter} />
      <WishlistList items={filteredItems} onRemove={removeItem} />
    </div>
  );
}

export default App;
