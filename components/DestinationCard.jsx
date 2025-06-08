'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import SuccessPopup from './SuccessPopup.jsx';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const DestinationCard = ({
  imgSrc,
  title,
  location,
  tripType,
  rating,
  showExtras = true,
  showLocation = true,
}) => {
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [showSuccessTick, setShowSuccessTick] = useState(false);
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/destination/${title}`);
  };

  const handleCallbackRequest = (e) => {
    e.stopPropagation();
    setShowCallbackForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://desire4travels-1.onrender.com/callback-destination', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phoneNo: mobileNumber,
          destination: title,
          called: false,
        }),
      });

      if (response.ok) {
        setShowCallbackForm(false);
        setMobileNumber('');
        setShowSuccessTick(true);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Failed to send callback request. Please try again later.');
    }
  };

  return (
    <>
      {showSuccessTick && (
        <SuccessPopup
          message="Your callback request has been submitted successfully."
          onClose={() => setShowSuccessTick(false)}
        />
      )}

      <div className="destination-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
        <img src={imgSrc} alt={title} className="destination-image" />
        <div className="card-content">
          <h2 className="destination-title">{title}</h2>

          {showLocation && (
            <p className="location">
              <FaMapMarkerAlt /> {location}
            </p>
          )}

          {tripType && (
            <p className="trip-type">
              Type: {Array.isArray(tripType) ? tripType.join(', ') : tripType}
            </p>
          )}

          {showExtras && (
            <>
              <p className="rating">
                <FaStar className="star-icon" /> {rating} / 5
              </p>
              <button className="request-btn" onClick={handleCallbackRequest}>
                Request Call Back
              </button>
            </>
          )}

          {showExtras && showCallbackForm && (
            <div className="callback-form-overlay" onClick={(e) => e.stopPropagation()}>
              <form className="callback-form" onSubmit={handleSubmit}>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  required
                />
                <div>
                  <a href="/signup" className="signup-link">
                    Sign up for updates
                  </a>
                </div>
                <div className="form-buttons">
                  <button type="submit">Submit</button>
                  <button type="button" onClick={() => setShowCallbackForm(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DestinationCard;
