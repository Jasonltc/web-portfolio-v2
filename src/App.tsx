import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Errorpage from "./component/Errorpage";
import Homepage from "./pages/Homepage";
import Learning from "./component/experience/Learning";
import MainModel from "./component/blender_three/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/others",
        element: <Learning />,
      },
      {
        path: "/model-3d",
        element: <MainModel />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
