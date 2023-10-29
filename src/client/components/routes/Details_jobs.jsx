import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";

const Details_jobs = () => {
  const [jobDetail, setjobDetail] = useState([]);
  const { jobId } = useParams();
  useEffect(() => {
    axios
      .get(`/api/available_jobs/details/${jobId}`)
      .then(response => {
        console.table(response.data);
        setjobDetail(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Container className="mt-5">
      {jobDetail.map(job => (
        <>
          <h2>{job.name}</h2>
          <p>
            <strong>Job Description:</strong> {job.description}
          </p>
          <p>
            <strong>Date Posted: </strong>
            {new Date(job.date_posted).toLocaleDateString()}
          </p>
          <p>
            <strong>Available Positions: </strong>
            {job.available_positions}
          </p>
          <p>
            <strong>Location: </strong>
            {job.work_location}
          </p>
          <p>
            <strong>Salary: </strong>
            {job.salary}C$
          </p>
        </>
      ))}
    </Container>
  );
};
export default Details_jobs;
