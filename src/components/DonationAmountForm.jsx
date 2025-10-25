// src/components/DonationAmountForm.jsx

import React, { useState } from 'react';

const suggestedAmounts = [25, 50, 100, 250];

const DonationAmountForm = ({ onStartCheckout, selectedCountry }) => {
  const [amount, setAmount] = useState(50); // Default amount
  const [customAmount, setCustomAmount] = useState('');
  
  const handleAmountSelect = (newAmount) => {
    setAmount(newAmount);
    setCustomAmount('');
  };
  
  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    // Ensure the main amount state reflects the custom input if valid
    if (value > 0) {
      setAmount(Number(value));
    }
  };
  
  const handleProceed = () => {
    // Basic validation
    const finalAmount = customAmount ? Number(customAmount) : amount;
    
    if (finalAmount <= 0) {
      alert("Please enter a donation amount greater than zero.");
      return;
    }
    // Call the parent function to initiate the checkout flow
    onStartCheckout(finalAmount);
  };
  
  // If a country other than the US is selected, return a note
  if (selectedCountry !== 'United States') {
    return <p className="payment-note">Please select United States to use the secure card/ACH option, or select India for UPI details.</p>;
  }


  return (
    <div className="donation-amount-selection">
      <h4>How much would you like to donate?</h4>

      <div className="suggested-amounts">
        {suggestedAmounts.map(a => (
          <button
            key={a}
            className={`amount-button ${amount === a && customAmount === '' ? 'active' : ''}`}
            onClick={() => handleAmountSelect(a)}
          >
            ${a}
          </button>
        ))}
      </div>

      <div className="custom-amount-input">
        <label htmlFor="customAmount">Or enter a custom amount ($)</label>
        <input 
          id="customAmount"
          type="number" 
          min="1"
          placeholder="Enter Amount"
          value={customAmount}
          onChange={handleCustomAmountChange}
        />
      </div>

      <button 
        className="proceed-button" 
        onClick={handleProceed}
        disabled={(amount <= 0 && customAmount === '') || (customAmount !== '' && Number(customAmount) <= 0)}
      >
        Proceed to Secure Payment
      </button>
    </div>
  );
};

export default DonationAmountForm;