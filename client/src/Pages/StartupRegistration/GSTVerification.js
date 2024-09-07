// src/components/GstinVerification.js
import React, { useState } from 'react';
import axios from 'axios';

const GstinVerification = () => {
  const [gstin, setGstin] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [error, setError] = useState(null);

  const verifyGstin = async () => {
    const options = {
      method: 'GET',
      url: `https://powerful-gstin-tool.p.rapidapi.com/v1/gstin/${gstin}/is-valid`,
      headers: {
        'x-rapidapi-key': '74e7ff43b1mshecb7f7d514d1d48p16bbcajsnaf54757edb12',
        'x-rapidapi-host': 'powerful-gstin-tool.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log('API Response:', response.data); // Log the response
      setIsValid(response.data.valid);
      setError(null);
    } catch (error) {
      console.error('Error verifying GSTIN:', error);
      setError('Failed to verify GSTIN');
      setIsValid(null);
    }
  };

  return (
    <div>
      <h2>Verify GSTIN</h2>
      <input
        type="text"
        value={gstin}
        onChange={(e) => setGstin(e.target.value)}
        placeholder="Enter GSTIN"
      />
      <button onClick={verifyGstin}>Verify</button>
      {isValid !== null && (
        <div>
          GSTIN is {isValid ? 'valid' : 'invalid'}
        </div>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default GstinVerification;