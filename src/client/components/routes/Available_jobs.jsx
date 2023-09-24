import { useEffect, useState } from "react";
import axios from "axios";

const Available_jobs = () => {
  const [jobsList, setJobsList] = useState([]);
  useEffect(() => {
    axios
      .get("/api/available_jobs")
      .then(response => {
        setJobsList(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>Jobs Available</h1>
      {jobsList.map(job => (
        <li key={job.id}>{job.name}</li>
      ))}
    </>
  );
};
export default Available_jobs;
