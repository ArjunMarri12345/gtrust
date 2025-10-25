// src/pages/Donate.jsx

import React, { useState, useEffect } from 'react';
import '../css/DonateStyles.css'; 
import DonationAmountForm from '../components/DonationAmountForm'; 
// 🚨 REMOVED: StripeCheckoutForm import is removed.
// 🚨 REMOVED: Stripe component imports (loadStripe, Elements) are removed.

const Donate = () => {
  // Set initial state to empty string so user must explicitly choose a country
  const [selectedCountry, setSelectedCountry] = useState(''); 
  const [donationAmount, setDonationAmount] = useState(0);
  // We use two steps: 1 for amount selection, 2 for static bank details display
  const [checkoutStep, setCheckoutStep] = useState(1); 
  

  // Reset steps when country changes
  useEffect(() => {
    setCheckoutStep(1);
    setDonationAmount(0);
  }, [selectedCountry]);
  
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  // Function called from DonationAmountForm
  const startStaticCheckout = (amount) => {
      setDonationAmount(amount);
      // Move to Step 2 to display the static bank transfer instructions
      setCheckoutStep(2); 
  };

  const handleBackToAmount = () => {
      setCheckoutStep(1);
      setDonationAmount(0);
  };


  const renderPaymentDetails = () => {
    // --- US Donation Flow (Static Bank Transfer) ---
    if (selectedCountry === 'United States') {
        if (checkoutStep === 1) {
            // Show the donation amount selector
            return (
                <DonationAmountForm 
                    onStartCheckout={startStaticCheckout} // 🎯 Renamed function
                    selectedCountry={selectedCountry}
                />
            );
        } else if (checkoutStep === 2) {
            // 🎯 Step 2: Show static bank transfer details
            return (
                <div className="static-ach-details">
                    <h4>US Bank Transfer (ACH) for ${donationAmount}</h4>
                    <p className="note">
                        Please use these details to complete a bank transfer 
                        (Wire/ACH) for your donation amount.
                    </p>
                    <div className="ach-details-box">
                        <div className="detail-row"><span className="label">Bank Name:</span><span className="value">Example US Bank</span></div>
                        <div className="detail-row"><span className="label">Routing Number:</span><span className="value">071000013</span></div>
                        <div className="detail-row"><span className="label">Account Number:</span><span className="value">59385380063035615</span></div>
                        <div className="detail-row"><span className="label">Account Name:</span><span className="value">Ganesh Charitable Society</span></div>
                    </div>

                    <button className="back-button" onClick={handleBackToAmount}>
                        Change Amount / Go Back
                    </button>
                </div>
            );
        }
    } 
    
    // --- QR Code/UPI (India) ---
    else if (selectedCountry === 'India') {
        return (
            <div className="payment-option-container">
                <h4>Donations from India (INR)</h4>
                <div className="qr-code-box">
                    <p>Scan the QR code below using any UPI app (Paytm, GPay, PhonePe, etc.) to donate instantly.</p>
                    <img 
                      src="/qr.jpg" 
                      alt="UPI Payment QR Code for Ganesh Charitable Society" 
                      className="donation-qr-code"
                    />
                    <p className="qr-note">Ensure the payment name displayed is "Ganesh Charitable Society".</p>
                </div>
            </div>
        );
    } 
    
    // --- Default/Other ---
    return (
        <div className="payment-note">
            <p>Please select a country to view relevant donation options.</p>
        </div>
    );
  };

  return (
    <div className="gcs-page donate-page">
      <h1 className="page-title">Support Our Cause</h1>
      
      <div className="donate-container">
        <h2>Select Your Donation Method</h2>

        <div className="country-selector">
          <label htmlFor="country-select">Choose a country:</label>
          <select 
            id="country-select" 
            value={selectedCountry} 
            onChange={handleCountryChange}
          >
                <option value="">-- Select an option --</option>
            <option value="United States">United States (USD)</option>
            <option value="India">India (INR)</option>
            <option value="Other">Other Country</option>
          </select>
        </div>
        
        {/* 🚨 Elements is no longer needed, but can be left as a harmless wrapper */}
        <div className="payment-details-wrapper">
            {renderPaymentDetails()}
        </div>
      </div>
    </div>
  );
};

export default Donate;