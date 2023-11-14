import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ListsPage from "./pages/Lists";
import ItemsPage from "./pages/Items";
import ErrorPage from "./pages/Error";

import "./App.css";

//---------------------------------------------------------------------

const router = createBrowserRouter([
  {
    index: true,
    errorElement: <ErrorPage />,
    element: <ListsPage />,
  },
  {
    path: "items/:listId",
    element: <ItemsPage />,
  },
]);
//---------------------------------------------------------------------
function App() {
  return <RouterProvider router={router} />;
}

export default App;
