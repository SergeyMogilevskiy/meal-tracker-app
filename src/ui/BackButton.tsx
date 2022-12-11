import React from 'react';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <button className="back-button" onClick={handleBack}>
      Back
    </button>
  );
};
