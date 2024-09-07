import React, { useState } from 'react';

function StepNine({ onNext, onPrevious, formData }) {
  const [teamData, setTeamData] = useState({
    numberOfEmployees: '',
    keyHires: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTeamData({
      ...teamData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext({ ...formData, ...teamData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="numberOfEmployees" className="form-label">Number of Employees</label>
        <input
          type="number"
          className="form-control"
          id="numberOfEmployees"
          name="numberOfEmployees"
          value={teamData.numberOfEmployees}
          onChange={handleChange}
          placeholder="Enter number of employees"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="keyHires" className="form-label">Key Hires</label>
        <input
          type="text"
          className="form-control"
          id="keyHires"
          name="keyHires"
          value={teamData.keyHires}
          onChange={handleChange}
          placeholder="Enter information about key hires"
        />
      </div>
      <button type="button" className="btn btn-secondary me-2" onClick={onPrevious}>Previous</button>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default StepNine;
