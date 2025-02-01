import React, { useState } from "react";
import "./Payment.css";

const PaymentModal = ({
  showModal,
  formData,
  handleInputChange,
  handleFormSubmit,
  closeModal,
  totalBill,
  userEmail,
  books,
  refreshCart,
}) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false); // state for success popup

  if (!showModal) return null; // Don't render if modal is not visible

  const makePayment = async () => {
    try {
      const itemIds = books.map((book) => book._id); // Collect book IDs
      
      // Prepare the order data
      const orderData = {
        email: userEmail, // Ensure this is not undefined
        items: itemIds, // Make sure this array is not empty
        totalAmount: totalBill, // Ensure this is a number
        deliveryAddress: {
          fullName: formData.fullName,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          postalCode: formData.postalCode,
          country: formData.country,
        },
      };

      console.log("Sending order data:", orderData); // Debug log

      const response = await fetch("http://localhost:5000/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Failed to place order");
      }

      const result = await response.json();
      console.log("Order placed successfully:", result);

      // Empty the user cart
      console.log("Sending request with email:", userEmail);
      const resp = await fetch("http://localhost:5000/user/cart/empty", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail }),
      });

      if (!resp.ok) {
        throw new Error("Failed to empty the user cart");
      }

      setShowSuccessModal(true); // Show the success popup

    } catch (error) {
      console.error("Error in making payment:", error.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Enter Your Shipping Details</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            makePayment();
          }}
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleInputChange}
            required
          />

          <button type="submit" className="submit-button">
            Confirm Payment
          </button>
          <button type="button" className="cancel-button" onClick={closeModal}>
            Cancel
          </button>
        </form>
      </div>

      {/* Success Popup Modal */}
      {showSuccessModal && (
        <div className="success-modal-overlay">
          <div className="success-modal-content">
            <h3>Your order has been successfully placed!</h3>
            <p>It will reach you in 7 days. Thank you for shopping with us!</p>
            <button
              onClick={() => {
                setShowSuccessModal(false);
                refreshCart(); // Refresh the cart after closing the success modal
              }}
              className="close-success-button"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentModal;
