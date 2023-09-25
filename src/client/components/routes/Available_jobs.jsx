import { useEffect, useState } from "react";
import axios from "axios";
import Jobs_card from "../cards/Jobs_card";
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
      <h2>Jobs Available</h2>
      {jobsList.map(job => (
        <>
          <Jobs_card data={job} />
        </>
      ))}
    </>
  );
};
export default Available_jobs;
