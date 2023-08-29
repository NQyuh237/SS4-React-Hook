import React, { useState } from "react";

export default function Todolist() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    console.log(storageJobs);
    return storageJobs;
  });

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      // luu len local
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };
  // xoa cong viec
  const handleDelete = (index) => {
    const newJob = jobs.filter((value, i) => i != index);
    setJobs("");
    localStorage.setItem("jobs", JSON.stringify(newJob));
    setJobs(newJob);
  };
  return (
    <>
      <div>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setJob(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSubmit}>
          Add
        </button>
      </div>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job} <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
