import React from 'react';

function WishlistItem({ item, onRemove }) {
  return (
    <li className="wishlist-item">
      <span>{item.name} <em>({item.category})</em></span>
      <button onClick={() => onRemove(item.id)}>❌</button>
    </li>
  );
}

export default WishlistItem;
