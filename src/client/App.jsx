import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Home from "./components/Home";
import Available_jobs from "./components/routes/Available_jobs";
import Details_jobs from "./components/routes/Details_jobs";
import Post_job from "./components/routes/Post_job";
import NavBar from "./components/NavBar";
import Messages from "./components/routes/Messages";
import Error_Page from "./components/routes/Error_Page";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error_Page />,
  },
  {
    path: "/available_jobs",
    element: <Available_jobs />,
  },
  {
    path: "/available_jobs/details/:jobId",
    element: <Details_jobs />,
  },
  {
    path: "/inbox",
    element: <Messages />,
  },
  {
    path: "/post_job",
    element: <Post_job />,
  },
]);
function App() {
  return (
    <>
      <Row className="nav-bar">
        <NavBar />
      </Row>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
