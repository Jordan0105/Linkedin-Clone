import { useFormik } from "formik";

const Sign_Up = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      direction: "",
      photo_url: "",
      password: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Tell us your name</label>
      <input
        id="name"
        name="name"
        type="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor="lastname">Tell us your name</label>
      <input
        id="lastname"
        name="lastname"
        type="lastname"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <button type="submit">Register</button>
    </form>
  );
};
export default Sign_Up;
