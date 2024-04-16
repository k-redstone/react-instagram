import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import ContentPage from "../pages/Content";
import ProfilePage from "../pages/Profile";

export const routerInfo = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/content/example",
    element: <ContentPage />
  },

  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "",
        element: <ContentPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
];
