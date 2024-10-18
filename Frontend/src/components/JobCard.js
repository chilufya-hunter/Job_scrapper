// src/components/JobCard.js
import React from 'react';

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h2><a href={job.link} target="_blank" rel="noopener noreferrer">{job.title}</a></h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.type}</p>
      <p><strong>Deadline:</strong> {job.deadline}</p>
      <p>{job.description}</p>
    </div>
  );
}

export default JobCard;