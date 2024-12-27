import React, { useState } from 'react';
import './Addbook.css'; 

function Addbook() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle form field changes
  const handleNameChange = (e) => setName(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);
  const handlePublishYearChange = (e) => setPublishYear(e.target.value);
  const handleGenreChange = (e) => setGenre(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('author', author);
    formData.append('publishYear', publishYear);
    formData.append('genre', genre);
    formData.append('image', image);

    try {
      const response = await fetch('http://localhost:5000/books/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to add the book');
      }

      const data = await response.json();
      setSuccess(true);
      setError(null); 
      setName('');
      setAuthor('');
      setPublishYear('');
      setGenre('');
      setImage(null);
    } catch (error) {
      setError(error.message);
      setSuccess(false);
    }
  };

  return (
    <div className="addbook-container">
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit} className="addbook-form">
        <div className="form-group">
          <label>Book Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={handleNameChange} 
            placeholder="Enter the book name"
            required
          />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input 
            type="text" 
            value={author} 
            onChange={handleAuthorChange} 
            placeholder="Enter the author's name"
            required
          />
        </div>
        <div className="form-group">
          <label>Publish Year:</label>
          <input 
            type="number" 
            value={publishYear} 
            onChange={handlePublishYearChange} 
            placeholder="Enter the year of publication"
            required
          />
        </div>
        <div className="form-group">
          <label>Genre:</label>
          <input 
            type="text" 
            value={genre} 
            onChange={handleGenreChange} 
            placeholder="Enter the book's genre"
            required
          />
        </div>
        <div className="form-group">
          <label>Upload Book Image:</label>
          <input 
            type="file" 
            onChange={handleImageChange} 
            required
          />
        </div>
        <button type="submit" className="submit-button">Add Book</button>
      </form>

      {success && <p className="success-message">Book added successfully!</p>}
      {error && <p className="error-message">Error: {error}</p>}
    </div>
  );
}

export default Addbook;
