import { useRouteError } from "react-router-dom";

const Error_Page = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <h2 className="text-center mt-5">Sorry, this page is under development</h2>
  );
};
export default Error_Page;
