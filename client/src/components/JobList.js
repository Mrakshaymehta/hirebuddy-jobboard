import React from 'react';

const JobList = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job, index) => (
        <div key={index} style={{ border: '1px solid #ddd', marginBottom: '10px', padding: '10px' }}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <p><strong>Location:</strong> {job.location}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;