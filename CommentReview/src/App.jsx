import React, { useState } from 'react';
import StarRating from './StarRating';

function App() {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const handleSubmit = () => {
    if (!comment || rating === 0) {
      alert('Please enter a comment and rating');
      return;
    }

    const newReview = {
      comment,
      rating
    };

    setReviews([newReview, ...reviews]);
    setComment('');
    setRating(0);
  };

  return (
    <div className="container">
      <h1>Leave Your Review</h1>

      <StarRating rating={rating} setRating={setRating} />

      <textarea
        placeholder="Write your review..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit Review</button>

      {reviews.map((review, index) => (
        <div className="review" key={index}>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i}>{i < review.rating ? '★' : '☆'}</span>
            ))}
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
