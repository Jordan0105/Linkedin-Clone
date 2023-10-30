import Post_job_form from "../forms/Post_job_form";
import Job_posted_toast from "../toast.jsx/Job_posted_toast";
import { useState } from "react";
// TODO: Create a axios.get to fetch country and city and pass as props

const Post_job = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="container my-5">
      <Post_job_form setShowToast={setShowToast} />

      {showToast ? (
        <Job_posted_toast showToast={showToast} setShowToast={setShowToast} />
      ) : null}
    </div>
  );
};
export default Post_job;
