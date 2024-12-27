import React, { useState, useEffect } from 'react';
import './Allbooks.css';

function Allbooks() {
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
  const deleteBook = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/books/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete book');
      }
      setBooks(books.filter((book) => book._id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="allbooks-container">
      <h1>Here are all the books you have added</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {books.length === 0 && !loading && <p>No books available.</p>}

      <table className="books-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Author</th>
            <th>Publish Year</th>
            <th>Genre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>
                <img src={book.image} alt={book.name} className="book-image" />
              </td>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.publishYear}</td>
              <td>{book.genre}</td>
              <td>
                <button className="delete-button"  onClick={() => deleteBook(book._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Allbooks;
