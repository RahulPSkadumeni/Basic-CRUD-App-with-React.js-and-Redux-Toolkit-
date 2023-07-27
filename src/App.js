import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Edit from "./component/Edit";
import Create from "./component/Create";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
  {
    path: "/create",
    element: <Create />,
  },
]);

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
