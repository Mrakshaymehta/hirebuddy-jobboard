import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ResumeUpload from './components/ResumeUpload';
import JobList from './components/JobList';
import axios from 'axios';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/jobs')
      .then(res => {
        setJobs(res.data);
        setFilteredJobs(res.data);
      })
      .catch(err => console.error('Error fetching jobs:', err));
  }, []);

  const handleSearch = (query) => {
    const filtered = jobs.filter(job =>
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>HireBuddy Job Board</h1>
      <SearchBar onSearch={handleSearch} />
      <ResumeUpload />
      <JobList jobs={filteredJobs} />
    </div>
  );
};

export default App;
