import React, { useState, useEffect } from 'react';
import './Order.css';

function Order() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/order');
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setOrders(Array.isArray(data.allOrders) ? data.allOrders : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const deleteOrder = async (orderId) => {
    try {
      const response = await fetch('http://localhost:5000/order', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderId }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete order');
      }

      setOrders(orders.filter((order) => order._id !== orderId));
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="order-container">
      <h2>All Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="order-table">
          <thead>
            <tr>
              <th>#</th>
              <th>User Email</th>
              <th>Ordered Books</th>
              <th>Total Price</th>
              <th>Delivery Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{order.email}</td>
                <td>
                  <ul>
                    {order.items.map((book) => (
                      <li key={book._id}>
                        {book.name} by {book.author} (${book.price})
                      </li>
                    ))}
                  </ul>
                </td>
                <td>${order.totalAmount.toFixed(2)}</td>
                <td>
                  <p>{order.deliveryAddress.fullName}</p>
                  <p>{order.deliveryAddress.phone}</p>
                  <p>{order.deliveryAddress.address}, {order.deliveryAddress.city}</p>
                  <p>{order.deliveryAddress.state} - {order.deliveryAddress.postalCode}, {order.deliveryAddress.country}</p>
                </td>
                <td>
                  <button
                    onClick={() => deleteOrder(order._id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Order;
