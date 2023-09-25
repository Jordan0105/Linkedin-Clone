import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Available_jobs from "./components/routes/Available_jobs";
import Details_jobs from "./components/routes/Details_jobs";
import NavBar from "./components/NavBar";
import { Row } from "react-bootstrap";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/available_jobs",
    element: <Available_jobs />,
  },
  {
    path: "/available_jobs/details/:jobId",
    element: <Details_jobs />,
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
