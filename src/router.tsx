import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { MyPage } from "./pages/MyPage";
import { AdminPage } from "./pages/AdminPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);
