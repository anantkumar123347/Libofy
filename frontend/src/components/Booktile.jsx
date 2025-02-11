import React, { useState } from 'react';
import './Booktile.css';

function Booktile({ image, title, author, genre, year, price, bookId }) {
  const [addSuccess, setAddSuccess] = useState(false);  // State to track if the book was added

  const handleAddToCart = async () => {
    const email = localStorage.getItem('userEmail');
    if (!email) {
      console.log("User is not logged in.");
      return;  // Optionally, prompt the user to log in
    }

    try {
      const response = await fetch('https://libofybackendserver.onrender.com/user/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, book_id: bookId }),  // Use bookId here
      });

      if (!response.ok) {
        throw new Error('Failed to add book to cart');
      }

      const data = await response.json();
      console.log(data.message);  // Handle success response

      // Show success message
      setAddSuccess(true);

      // Hide the success message after 3 seconds
      setTimeout(() => {
        setAddSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error:', error.message);  // Handle error
    }
  };

  return (
    <div className="booktile">
      <img src={image} alt={title} className="booktile-image" />
      <div className="booktile-content">
        <h3 className="booktile-title">{title}</h3>
        <p className="booktile-author">by {author}</p>
        <p className="booktile-genre">{genre} | {year}</p>
        <p className="booktile-price">${price}</p>
        <button className="booktile-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
        
        {/* Conditionally render the success message */}
        {addSuccess && <p className="add-success-message">Book added to cart!</p>}
      </div>
    </div>
  );
}

export default Booktile;
