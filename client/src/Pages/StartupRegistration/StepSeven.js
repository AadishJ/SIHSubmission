import React, { useState } from 'react';

function StepSeven({ onNext, onPrevious, formData }) {
  const [legalData, setLegalData] = useState({
    certificateOfIncorporation: '',
    panTanNumber: '',
    gstRegistration: '',
    intellectualProperty: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLegalData({
      ...legalData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext({ ...formData, ...legalData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="certificateOfIncorporation" className="form-label">Certificate of Incorporation</label>
        <input
          type="text"
          className="form-control"
          id="certificateOfIncorporation"
          name="certificateOfIncorporation"
          value={legalData.certificateOfIncorporation}
          onChange={handleChange}
          placeholder="Enter certificate of incorporation details"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="panTanNumber" className="form-label">PAN/TAN Number</label>
        <input
          type="text"
          className="form-control"
          id="panTanNumber"
          name="panTanNumber"
          value={legalData.panTanNumber}
          onChange={handleChange}
          placeholder="Enter PAN/TAN number"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="gstRegistration" className="form-label">GST Registration</label>
        <input
          type="text"
          className="form-control"
          id="gstRegistration"
          name="gstRegistration"
          value={legalData.gstRegistration}
          onChange={handleChange}
          placeholder="Enter GST registration details"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="intellectualProperty" className="form-label">Intellectual Property</label>
        <input
          type="text"
          className="form-control"
          id="intellectualProperty"
          name="intellectualProperty"
          value={legalData.intellectualProperty}
          onChange={handleChange}
          placeholder="Enter intellectual property details"
        />
      </div>
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-secondary" onClick={onPrevious}>Previous</button>
        <button type="submit" className="btn btn-primary">Next</button>
      </div>
    </form>
  );
}

export default StepSeven;
