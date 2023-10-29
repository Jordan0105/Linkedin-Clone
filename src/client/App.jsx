import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Available_jobs from "./components/routes/Available_jobs";
import Details_jobs from "./components/routes/Details_jobs";
import NavBar from "./components/NavBar";
import { Row } from "react-bootstrap";
import "./App.css";
import Error_Page from "./components/routes/Error_Page";
import Messages from "./components/routes/Messages";

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
