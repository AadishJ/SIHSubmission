import React, { useState } from 'react';

function StepTen({ onPrevious, onNext, formData }) {
  const [dpiitData, setDpiitData] = useState({
    dpiitRecognition: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDpiitData({
      ...dpiitData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext({ ...formData, ...dpiitData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="dpiitRecognition" className="form-label">DPIIT Recognition</label>
        <input
          type="text"
          className="form-control"
          id="dpiitRecognition"
          name="dpiitRecognition"
          value={dpiitData.dpiitRecognition}
          onChange={handleChange}
          placeholder="Enter DPIIT recognition details"
          required
        />
      </div>
      <button type="button" className="btn btn-secondary me-2" onClick={onPrevious}>Previous</button>
      <button type="submit" className="btn btn-success">Finish</button>
    </form>
  );
}

export default StepTen;
