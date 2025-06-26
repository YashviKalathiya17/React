import React from 'react';

const StarRating = ({ rating, setRating }) => {
  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          onClick={() => setRating(i + 1)}
        >
          {i < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
