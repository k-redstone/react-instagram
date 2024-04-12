import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";

export const routerInfo = [
  {
    path: "/",
    element: <LoginPage />,
  },

  {
    path: "/home",
    element: <HomePage />,
  },
];
