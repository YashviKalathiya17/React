import React, { useState } from 'react';

function StarReview() {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value); // set selected rating
  };

  return (
    <div style={{ fontSize: '30px', textAlign: 'center', marginTop: '40px' }}>
      <h3>Give Rating </h3>
      <div>
        
        <span onClick={() => handleClick(1)} style={{ color: rating >= 1 ? 'gold' : 'gray', cursor: 'pointer' }}>★</span>
        <span onClick={() => handleClick(2)} style={{ color: rating >= 2 ? 'gold' : 'gray', cursor: 'pointer' }}>★</span>
        <span onClick={() => handleClick(3)} style={{ color: rating >= 3 ? 'gold' : 'gray', cursor: 'pointer' }}>★</span>
        <span onClick={() => handleClick(4)} style={{ color: rating >= 4 ? 'gold' : 'gray', cursor: 'pointer' }}>★</span>
        <span onClick={() => handleClick(5)} style={{ color: rating >= 5 ? 'gold' : 'gray', cursor: 'pointer' }}>★</span>
      </div>
      <p style={{ marginTop: '10px' }}>
        Thank you for giving {rating} star{rating === 1 ? '' : 's'}
      </p>
    </div>
  );
}

export default StarReview;