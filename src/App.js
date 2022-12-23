import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./comp/router/router.jsx";
import ContextApi from "./comp/userStore/context/contextApi";
function App() {
  return (
    <div className="App">
      <ContextApi>
        <RouterProvider router={router} />
      </ContextApi>
    </div>
  );
}

export default App;
