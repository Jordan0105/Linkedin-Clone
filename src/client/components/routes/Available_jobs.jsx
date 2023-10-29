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
      <h2 className="text-center mb-5">Jobs Available</h2>
      <div className="d-flex justify-content-evenly">
        {jobsList.map(job => (
          <>
            <Jobs_card data={job} />
          </>
        ))}
      </div>
    </>
  );
};
export default Available_jobs;
