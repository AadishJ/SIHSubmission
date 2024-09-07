import React, { useState, useEffect } from 'react';

function StepTwo({ onNext, onPrevious, formData }) {
  const [addressData, setAddressData] = useState({
    fullAddress: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    stateUnion: '',
    pincode: '',
    district: '',
    subdistrict: ''
  });

  useEffect(() => {
    // Populate the form with existing data if available
    if (formData.addressData) {
      setAddressData(formData.addressData);
    }
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddressData({
      ...addressData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext({ addressData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="fullAddress" className="form-label">Full Address</label>
        <input
          type="text"
          className="form-control"
          id="fullAddress"
          name="fullAddress"
          value={addressData.fullAddress}
          onChange={handleChange}
          placeholder="Enter full address"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="addressLine1" className="form-label">Address Line 1</label>
        <input
          type="text"
          className="form-control"
          id="addressLine1"
          name="addressLine1"
          value={addressData.addressLine1}
          onChange={handleChange}
          placeholder="Enter address line 1"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="addressLine2" className="form-label">Address Line 2</label>
        <input
          type="text"
          className="form-control"
          id="addressLine2"
          name="addressLine2"
          value={addressData.addressLine2}
          onChange={handleChange}
          placeholder="Enter address line 2"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="city" className="form-label">City/Village</label>
        <input
          type="text"
          className="form-control"
          id="city"
          name="city"
          value={addressData.city}
          onChange={handleChange}
          placeholder="Enter city or village"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="stateUnion" className="form-label">State/Union Territory</label>
        <select
          className="form-select"
          id="stateUnion"
          name="stateUnion"
          value={addressData.stateUnion}
          onChange={handleChange}
          required
        >
          <option value="">Select state/union territory</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Bihar">Bihar</option>
          <option value="Delhi">Delhi</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="pincode" className="form-label">Pincode</label>
        <input
          type="text"
          className="form-control"
          id="pincode"
          name="pincode"
          value={addressData.pincode}
          onChange={handleChange}
          placeholder="Enter pincode"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="district" className="form-label">District</label>
        <select
          className="form-select"
          id="district"
          name="district"
          value={addressData.district}
          onChange={handleChange}
          required
        >
          <option value="">Select district</option>
          {/* Add district options as needed */}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="subdistrict" className="form-label">Subdistrict</label>
        <select
          className="form-select"
          id="subdistrict"
          name="subdistrict"
          value={addressData.subdistrict}
          onChange={handleChange}
          required
        >
          <option value="">Select subdistrict</option>
          {/* Add subdistrict options as needed */}
        </select>
      </div>
      <button type="button" className="btn btn-secondary me-2" onClick={onPrevious}>Previous</button>
      <button type="submit" className="btn btn-primary">Next</button>
    </form>
  );
}

export default StepTwo;
