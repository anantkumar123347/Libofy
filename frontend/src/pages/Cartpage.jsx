import React, { useState, useEffect } from "react";
import "./Cartpage.css";
import PaymentModal from "../components/PaymentModal";

function Cartpage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  useEffect(() => {
    const fetchCartBooks = async () => {
      try {
        const email = localStorage.getItem("userEmail");
        if (!email) {
          setError("No email found in localStorage");
          setLoading(false);
          return;
        }

        const response = await fetch(`https://libofybackendserver.onrender.com/user/cart?email=${encodeURIComponent(email)}`);
        if (!response.ok) {
          throw new Error("Failed to fetch books from cart");
        }

        const data = await response.json();
        setBooks(Array.isArray(data.cart) ? data.cart : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCartBooks();
  }, []);

  const refreshCart = async () => {
    try {
      const email = localStorage.getItem("userEmail");
      if (!email) {
        setError("No email found in localStorage");
        return;
      }

      const response = await fetch(`https://libofybackendserver.onrender.com/user/cart?email=${encodeURIComponent(email)}`);
      if (!response.ok) {
        throw new Error("Failed to fetch books from cart");
      }

      const data = await response.json();
      setBooks(Array.isArray(data.cart) ? data.cart : []);
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteBookFromCart = async (bookId) => {
    try {
      const email = localStorage.getItem("userEmail");
      if (!email) {
        setError("No email found in localStorage");
        return;
      }

      const response = await fetch("https://libofybackendserver.onrender.com/user/cart", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, bookId }),
      });

      if (!response.ok) {
        throw new Error("Failed to remove the book from cart");
      }

      refreshCart();  // Re-fetch the updated cart after deletion
    } catch (error) {
      setError(error.message);
    }
  };

  const totalBill = books.reduce((acc, book) => acc + book.price, 0);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    setShowModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (!formData[key]) {
        alert(`Please fill in ${key}`);
        return;
      }
    }

    alert(`Payment successful for ${formData.fullName}! Total: $${totalBill}`);
    setShowModal(false); // Close modal
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {books.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Author</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book._id}>
                  <td>
                    <img src={book.image} alt={book.title} className="cart-book-image" />
                  </td>
                  <td>{book.name}</td>
                  <td>{book.author}</td>
                  <td>${book.price}</td>
                  <td>
                    <button className="delete-button" onClick={() => deleteBookFromCart(book._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="total-bill">
            <h3>Total Bill: ${totalBill}</h3>
          </div>

          <div className="payment-section">
            <button className="pay-button" onClick={handlePayment}>
              Pay Now
            </button>
          </div>
        </div>
      )}

      {/* Include Payment Modal */}
      <PaymentModal
        showModal={showModal}
        formData={formData}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        closeModal={() => setShowModal(false)}
        totalBill={totalBill}
        userEmail={localStorage.getItem("userEmail")}
        books={books}  // Pass books array here (with full book objects)
        refreshCart={refreshCart}  // Pass the refreshCart function here
      />
    </div>
  );
}

export default Cartpage;
