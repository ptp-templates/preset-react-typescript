import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";

export const router = createBrowserRouter([
  // dynamic path
  // { path: "/post/:id"  } , element: <PostDetail />
  {
    path: "/",
    element: <Home />,
  },
]);
