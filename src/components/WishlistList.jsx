import React from 'react';
import WishlistItem from './WishlistItem';

function WishlistList({ items, onRemove }) {
  if (items.length === 0) return <p>No items yet. Start dreaming big! 💭</p>;

  return (
    <ul className="wishlist-list">
      {items.map((item) => (
        <WishlistItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
}

export default WishlistList;
