import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(location.state?.cartItems || []);
  const [paymentSuccess, setPaymentSuccess] = useState(false); // State for payment success window

  const handleBack = () => {
    navigate('/product'); // Navigate back to the ProductPage
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseFloat(item.price.replace('₱', '').replace(',', ''));
    });
    return total.toFixed(2);
  };

  const handlePayment = () => {
    // Prepare payment details
    const paymentDetails = {
      products: cartItems.map(item => ({
        name: item.name,
        price: parseFloat(item.price.replace('₱', '').replace(',', '')),
        description: item.description // Assuming each item has a 'description' property
      })),
      totalPrice: calculateTotalPrice(),
      description: "Payment for cart items" // You can customize this as needed
    };

    // Send payment details to the backend
    fetch('http://localhost:3001/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentDetails),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Payment processed successfully:', data);
        setPaymentSuccess(true); // Show payment success window
        // Optionally, you can navigate to another page after successful payment
      })
      .catch((error) => {
        console.error('Error processing payment:', error);
        // Optionally, show an error message to the user
      });
  };

  const cancelProduct = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const closePaymentSuccess = () => {
    setPaymentSuccess(false); // Close payment success window
  };

  return (
    <div className="cart-page">
      <div style={{ backgroundColor: "#00b106" }} className="page-header">
        <button onClick={handleBack} className="btn btn-light back-button">Back</button>
      </div>
      <div className="large-box">
        <h2>Cart Summary</h2>
        <div className="summary-items">
          {cartItems.map((item, index) => (
            <div key={index} className="summary-item">
              <div className="item-details">
                <span>{item.name}</span>
                <span>Price: {item.price}</span>
              </div>
              <div className="item-image">
                <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              </div>
              <hr />
            </div>
          ))}
        </div>
        <div className="total-price-container">
          <div className="total-price">Total: ₱{calculateTotalPrice()}</div>
          <button style={{ width: "300px" }} onClick={handlePayment} className="payment-button btn btn-primary">Proceed to Payment</button>
        </div>
      </div>
      {paymentSuccess && (
        <div className="payment-success-popup">
          <div className="payment-success-box">
            <p className="payment-success-message">Payment Successful</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;