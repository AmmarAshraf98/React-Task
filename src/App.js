import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Profile from "./Components/Profile/Profile";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "profile", element: <Profile /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
