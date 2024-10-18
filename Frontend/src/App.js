
// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import JobList from './components/JobList';

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/jobs');
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Zambia Job Scraper</h1>
      <button onClick={fetchJobs} disabled={loading}>
        {loading ? 'Loading...' : 'Find Jobs'}
      </button>
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;