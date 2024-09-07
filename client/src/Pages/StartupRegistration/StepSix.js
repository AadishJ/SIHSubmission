import React, { useState } from 'react';

function StepSix({ onNext, onPrevious, formData }) {
  const [financialData, setFinancialData] = useState({
    annualRevenue: '',
    bankAccountDetails: '',
    auditedFinancialStatements: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFinancialData({
      ...financialData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext({ ...formData, ...financialData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="annualRevenue" className="form-label">Annual Revenue</label>
        <input
          type="text"
          className="form-control"
          id="annualRevenue"
          name="annualRevenue"
          value={financialData.annualRevenue}
          onChange={handleChange}
          placeholder="Enter annual revenue"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="bankAccountDetails" className="form-label">Bank Account Details</label>
        <input
          type="text"
          className="form-control"
          id="bankAccountDetails"
          name="bankAccountDetails"
          value={financialData.bankAccountDetails}
          onChange={handleChange}
          placeholder="Enter bank account details"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="auditedFinancialStatements" className="form-label">Audited Financial Statements</label>
        <input
          type="text"
          className="form-control"
          id="auditedFinancialStatements"
          name="auditedFinancialStatements"
          value={financialData.auditedFinancialStatements}
          onChange={handleChange}
          placeholder="Enter audited financial statements details"
        />
      </div>
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-secondary" onClick={onPrevious}>Previous</button>
        <button type="submit" className="btn btn-primary">Next</button>
      </div>
    </form>
  );
}

export default StepSix;
