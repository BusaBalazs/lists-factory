import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LocalStorageProvider } from "./store/LocalStorage";

import ListsPage from "./pages/Lists"
import ItemsPage from "./pages/Items"
import ErrorPage from "./pages/Error"

import "./App.css";

//---------------------------------------------------------------------

const router = createBrowserRouter([
  {
    index: true,
    errorElement: <ErrorPage />,
    element: <ListsPage />
  },
  {
    path: "items/:listId",
    element: <ItemsPage />
  }
])
//---------------------------------------------------------------------
function App() {
  return (
    <LocalStorageProvider>
      <RouterProvider router={router} />
    </LocalStorageProvider>
  )
}

export default App;
