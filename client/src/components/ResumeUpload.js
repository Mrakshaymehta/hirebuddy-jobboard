import React, { useState } from 'react';
import axios from 'axios';

const ResumeUpload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert('Please select a file');

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const res = await axios.post('http://localhost:5000/api/upload', formData);
      alert('Predicted Role: ' + res.data.predictedRole);
    } catch (err) {
      console.error('Upload error:', err);
      alert('Upload failed');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} style={{ marginLeft: '10px' }}>Upload Resume</button>
    </div>
  );
};

export default ResumeUpload;
