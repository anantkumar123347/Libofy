import React, { useState, useEffect } from 'react';
import Booktile from '../components/Booktile';
import './Homepage.css'; 

function Homepage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:5000/books/');
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setBooks(Array.isArray(data.allBooks) ? data.allBooks : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="homepage-container">
      {/* Display all books by mapping over the books array */}
      <div className="book-tiles">
        {books.map((book) => (
          <Booktile
            key={book._id}
            image={book.image}
            title={book.name}
            author={book.author}
            genre={book.genre}
            year={book.publishYear}
            price={book.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
