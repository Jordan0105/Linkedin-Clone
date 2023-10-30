import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import * as Yup from "yup";

// TODO: Create a select input for country and city that db
// TODO: Create a table that links email of the user who post the job
// TODO: Modify available_work to accept country

const PostJobSchema = Yup.object().shape({
  name_job: Yup.string()
    .min(3, "The name is too short!")
    .max(50, "The name is too long!")
    .required("The name of the job is important!"),
  description_job: Yup.string()
    .min(10, "The description is too short!")
    .max(100, "The description is too long!")
    .required("The description of the job is required!"),
  work_location: Yup.string()
    .min(1, "The name of the place is too short!")
    .max(20, "The name of the place is too long!")
    .required("The job location's name is a mandatory requirement!"),
  available_positions: Yup.number()
    .min(1, "The minimum amount of positions must be 1")
    .required("The positions of the job is required"),
  salary: Yup.number()
    .min(1, "The minimum amount of salary must be 1")
    .required("The salary is required"),
  photo_url: Yup.string()
    .url("Please enter a valid URL")
    .required("Image URL is required"),
});

const Post_job_form = ({ setShowToast }) => {
  return (
    <Formik
      initialValues={{
        name_job: "",
        description_job: "",
        date_posted: new Date().toISOString().slice(0, 10),
        work_location: "",
        available_positions: "",
        salary: "",
        photo_url: "",
      }}
      validationSchema={PostJobSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          axios
            .post("/api/post_job", values)
            .then(response => {
              setShowToast(true);
            })
            .catch(error => {
              console.error(error);
            });
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <div className="container-form d-flex justify-content-center align-items-start flex-column">
          <div className="col-3 mt-2 mb-3">
            <label htmlFor="name_job" className="fw-bold">
              Name of the Job:
            </label>
            <Field
              id="name_job"
              name="name_job"
              type="text"
              className="form-control field-custom"
              placeholder="Teacher"
            />
            <span className="error_message_form mb-3">
              <ErrorMessage name="name_job" />
            </span>
          </div>

          <div className="col-5 mt-2 mb-3">
            <label htmlFor="description_job" className="fw-bold">
              Description:
            </label>
            <Field
              id="description_job"
              name="description_job"
              type="text"
              placeholder="An employee is requested who can assist clients with flexible hours."
              className="form-control field-custom mt-2"
            />
            <span className="error_message_form mb-3">
              <ErrorMessage name="description_job" />
            </span>
          </div>

          <div className="col-3 mt-2 mb-3">
            <label htmlFor="work_location" className="fw-bold">
              Job Location:
            </label>
            <Field
              id="work_location"
              name="work_location"
              type="text"
              className="form-control field-custom mt-2"
              placeholder="Carazo"
            />
            <span className="error_message_form mb-3">
              <ErrorMessage name="work_location" />
            </span>
          </div>

          <div className="col-2 overflow mt-2 mb-3">
            <label htmlFor="available_positions" className="fw-bold">
              Available Positions:
            </label>
            <Field
              id="available_positions"
              name="available_positions"
              className="form-control field-custom mt-2"
              type="number"
              min={0}
              placeholder={3}
            />
            <span className="error_message_form mb-3">
              <ErrorMessage name="available_positions" />
            </span>
          </div>

          <div className="col-2 mt-2 mb-3">
            <label htmlFor="salary" className="fw-bold">
              Salary (USD):
            </label>
            <Field
              id="salary"
              name="salary"
              type="number"
              className="form-control field-custom mt-2"
              placeholder={100}
              min={0}
            />
            <span className="error_message_form mb-3">
              <ErrorMessage name="salary" />
            </span>
          </div>

          <div className="col-4 mt-2 mb-3">
            <label htmlFor="photo_url" className="fw-bold">
              Insert Image URL:
            </label>
            <Field
              id="photo_url"
              name="photo_url"
              type="url"
              className="form-control field-custom mt-2"
              placeholder={"https://www.example.com/images/sample-image.jpg"}
            />
            <span className="error_message_form mb-3">
              <ErrorMessage name="photo_url" />
            </span>
          </div>

          <div className="col-1 mt-2 mb-3">
            <Button variant="primary" type="submit" className="mt-2">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
export default Post_job_form;
