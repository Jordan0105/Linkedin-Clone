import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Available_jobs from "./components/routes/Available_jobs";
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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
