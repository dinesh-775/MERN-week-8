import { createBrowserRouter, RouterProvider } from "react-router";
import RouterLayout from "./components/RouterLayout";
import UsersList from "./components/UsersList";
import AddUser from "./components/AddUser";
import Home from "./Home";
function App() {
  const routerObj = createBrowserRouter([
    {
      path: '/',
      element: <RouterLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: 'adduser',
          element: <AddUser />
        },
        {
          path: 'userslist',
          element: <UsersList />
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={routerObj} />
  )
}
export default App;