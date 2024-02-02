import { createBrowserRouter } from "react-router-dom";
import FinalPhase from "../components/FinalPhase/FinalPhase";
import FirstPhase from "../components/FirstPhase/FirstPhase";
import Home from "../components/Home/Home";
import SecondPhase from "../components/SecondPhase/SecondPhase";
import Root from "../layout/Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/home/firstPhase",
            element: <FirstPhase />,
          },
          {
            path: "/home/secondPhase",
            element: <SecondPhase />,
          },
          {
            path: "/home/finalPhase",
            element: <FinalPhase />,
          },
        ],
      },
    ],
  },
]);
