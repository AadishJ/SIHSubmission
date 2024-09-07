import React, { useState } from 'react';

function StepFive({ onNext, onPrevious, formData }) {
  const [businessData, setBusinessData] = useState({
    briefDescription: '',
    websiteUrl: '',
    stageOfBusiness: '',
    fundingDetails: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBusinessData({
      ...businessData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext({ ...formData, ...businessData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="briefDescription" className="form-label">Brief Description</label>
        <textarea
          className="form-control"
          id="briefDescription"
          name="briefDescription"
          value={businessData.briefDescription}
          onChange={handleChange}
          placeholder="Enter an overview of the startup"
          rows="4"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="websiteUrl" className="form-label">Website URL</label>
        <input
          type="url"
          className="form-control"
          id="websiteUrl"
          name="websiteUrl"
          value={businessData.websiteUrl}
          onChange={handleChange}
          placeholder="Enter website URL"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="stageOfBusiness" className="form-label">Stage of Business</label>
        <select
          className="form-select"
          id="stageOfBusiness"
          name="stageOfBusiness"
          value={businessData.stageOfBusiness}
          onChange={handleChange}
          required
        >
          <option value="">Select stage</option>
          <option value="Idea Stage">Idea Stage</option>
          <option value="Prototype">Prototype</option>
          <option value="Early Revenue">Early Revenue</option>
          <option value="Growth Stage">Growth Stage</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="fundingDetails" className="form-label">Funding Details</label>
        <textarea
          className="form-control"
          id="fundingDetails"
          name="fundingDetails"
          value={businessData.fundingDetails}
          onChange={handleChange}
          placeholder="Enter funding details"
          rows="4"
        />
      </div>
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-secondary" onClick={onPrevious}>Previous</button>
        <button type="submit" className="btn btn-primary">Next</button>
      </div>
    </form>
  );
}

export default StepFive;
