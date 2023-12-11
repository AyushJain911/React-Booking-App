import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/", element: <Hotel /> },
    { path: "/", element: <List /> },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
