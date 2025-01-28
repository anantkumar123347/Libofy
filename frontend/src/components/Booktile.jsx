import React from 'react';
import './Booktile.css';

function Booktile({ image, title, author, genre, year, price }) {
  return (
    <div className="booktile">
      <img src={image} alt={title} className="booktile-image" />
      <div className="booktile-content">
        <h3 className="booktile-title">{title}</h3>
        <p className="booktile-author">by {author}</p>
        <p className="booktile-genre">{genre} | {year}</p>
        <p className="booktile-price">${price}</p>
        <button className="booktile-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default Booktile;
