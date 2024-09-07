import React, { useState } from 'react';

function StepEight({ onNext, onPrevious, formData }) {
  const [pitchDeckData, setPitchDeckData] = useState({
    pitchDeck: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPitchDeckData({
      ...pitchDeckData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext({ ...formData, ...pitchDeckData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="pitchDeck" className="form-label">Pitch Deck/Business Plan</label>
        <input
          type="text"
          className="form-control"
          id="pitchDeck"
          name="pitchDeck"
          value={pitchDeckData.pitchDeck}
          onChange={handleChange}
          placeholder="Enter pitch deck/business plan details"
        />
      </div>
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-secondary" onClick={onPrevious}>Previous</button>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
}

export default StepEight;
