import React, { useState } from 'react';

function StepFour({ onNext, onPrevious, formData }) {
  const [directorData, setDirectorData] = useState({
    numberOfDirectors: '',
    directors: [
      {
        dinDpin: '',
        name: '',
        gender: '',
        mobileNumber: '',
        postalAddress: '',
        emailId: ''
      }
    ]
  });

  const handleDirectorChange = (index, event) => {
    const { name, value } = event.target;
    const updatedDirectors = [...directorData.directors];
    updatedDirectors[index] = { ...updatedDirectors[index], [name]: value };
    setDirectorData({
      ...directorData,
      directors: updatedDirectors
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDirectorData({
      ...directorData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext({ ...formData, ...directorData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="numberOfDirectors" className="form-label">Number of Directors</label>
        <input
          type="number"
          className="form-control"
          id="numberOfDirectors"
          name="numberOfDirectors"
          value={directorData.numberOfDirectors}
          onChange={handleChange}
          placeholder="Enter number of directors"
          required
        />
      </div>
      {directorData.directors.map((director, index) => (
        <div key={index} className="border p-3 mb-3">
          <h5>Director {index + 1}</h5>
          <div className="mb-3">
            <label htmlFor={`dinDpin-${index}`} className="form-label">DIN/DPIN</label>
            <input
              type="text"
              className="form-control"
              id={`dinDpin-${index}`}
              name="dinDpin"
              value={director.dinDpin}
              onChange={(e) => handleDirectorChange(index, e)}
              placeholder="Enter DIN/DPIN"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor={`name-${index}`} className="form-label">Name of Director/Partner</label>
            <input
              type="text"
              className="form-control"
              id={`name-${index}`}
              name="name"
              value={director.name}
              onChange={(e) => handleDirectorChange(index, e)}
              placeholder="Enter name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor={`gender-${index}`} className="form-label">Gender</label>
            <select
              className="form-select"
              id={`gender-${index}`}
              name="gender"
              value={director.gender}
              onChange={(e) => handleDirectorChange(index, e)}
              required
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor={`mobileNumber-${index}`} className="form-label">Mobile Number</label>
            <input
              type="tel"
              className="form-control"
              id={`mobileNumber-${index}`}
              name="mobileNumber"
              value={director.mobileNumber}
              onChange={(e) => handleDirectorChange(index, e)}
              placeholder="Enter mobile number"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor={`postalAddress-${index}`} className="form-label">Postal Address</label>
            <input
              type="text"
              className="form-control"
              id={`postalAddress-${index}`}
              name="postalAddress"
              value={director.postalAddress}
              onChange={(e) => handleDirectorChange(index, e)}
              placeholder="Enter postal address"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor={`emailId-${index}`} className="form-label">Email ID</label>
            <input
              type="email"
              className="form-control"
              id={`emailId-${index}`}
              name="emailId"
              value={director.emailId}
              onChange={(e) => handleDirectorChange(index, e)}
              placeholder="Enter email ID"
              required
            />
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-secondary" onClick={onPrevious}>Previous</button>
        <button type="submit" className="btn btn-primary">Next</button>
      </div>
    </form>
  );
}

export default StepFour;
