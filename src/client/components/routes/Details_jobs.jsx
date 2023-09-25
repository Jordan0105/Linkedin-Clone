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
  useEffect(() => {
    console.log(jobDetail[0]);
  }, [jobDetail]);
  return (
    <Container>
      {jobDetail.map(job => (
        <>
          <h2>{job.name}</h2>
          <p>{job.description}</p>
          <p>{job.date_posted}</p>
          <p>{job.available_positions}</p>
          <p>{job.work_location}</p>
          <p>{job.salary}</p>
        </>
      ))}
    </Container>
  );
};
export default Details_jobs;
