import React, { useState } from 'react';
import './StepOne.css'; // Import the CSS file

function StepOne({ onNext }) {
  const [formData, setFormData] = useState({
    startupName: '',
    dateOfIncorporation: '',
    typeOfBusinessEntity: '',
    industrySector: '',
    companyIncorporationNumber: '',
    companyRegistrationDate: '',
    address: '',
    phoneNumber: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="startupName" className="form-label">Startup Name</label>
        <input
          type="text"
          className="form-control"
          id="startupName"
          name="startupName"
          value={formData.startupName}
          onChange={handleChange}
          placeholder="Enter startup name"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dateOfIncorporation" className="form-label">Date of Incorporation</label>
        <input
          type="text"
          className="form-control"
          id="dateOfIncorporation"
          name="dateOfIncorporation"
          value={formData.dateOfIncorporation}
          onChange={handleChange}
          placeholder="Enter date of incorporation"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="typeOfBusinessEntity" className="form-label">Type of Business Entity</label>
        <select
          className="form-select"
          id="typeOfBusinessEntity"
          name="typeOfBusinessEntity"
          value={formData.typeOfBusinessEntity}
          onChange={handleChange}
          required
        >
          <option value="">Select type</option>
          <option value="LLC">LLC</option>
          <option value="Sole Proprietorship">Sole Proprietorship</option>
          <option value="Corporation">Corporation</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="industrySector" className="form-label">Industry Sector</label>
        <select
          className="form-select"
          id="industrySector"
          name="industrySector"
          value={formData.industrySector}
          onChange={handleChange}
          required
        >
          <option value="">Select sector</option>
          <option value="Tech">Technology</option>
          <option value="Finance">Finance</option>
          <option value="Healthcare">Healthcare</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="companyIncorporationNumber" className="form-label">Company Incorporation Number</label>
        <input
          type="text"
          className="form-control"
          id="companyIncorporationNumber"
          name="companyIncorporationNumber"
          value={formData.companyIncorporationNumber}
          onChange={handleChange}
          placeholder="Enter incorporation number"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="companyRegistrationDate" className="form-label">Company Registration Date</label>
        <input
          type="date"
          className="form-control"
          id="companyRegistrationDate"
          name="companyRegistrationDate"
          value={formData.companyRegistrationDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input
          type="text"
          className="form-control"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter address"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
        <input
          type="tel"
          className="form-control"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter phone number"
          required
        />
      </div>
      <button type="submit" className="btn-primary">Next</button>
    </form>
  );
}

export default StepOne;
