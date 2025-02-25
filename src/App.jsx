import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Cooking from "./page/Cooking";
import FAQ_page from "./page/FAQ_page";
import Landing from "./page/Landing";
import Layout from "./layout/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/faq",
        element: <FAQ_page />,
      },
      {
        path: "/cooking",
        element: <Cooking />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
