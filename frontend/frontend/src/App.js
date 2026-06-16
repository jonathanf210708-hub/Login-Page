import {
 BrowserRouter,
 Routes,
 Route
} from "react-router-dom";

import Login from "./pages/Login/login.jsx";
import Register from "./pages/Register/register.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

function App() {

 return (

  <BrowserRouter>

   <Routes>

    <Route
      path="/"
      element={<Register />}
    />

    <Route
      path="/Login"
      element={<Login />}
    />

    <Route
      path="/Dashboard"
      element={<Dashboard />}
    />

   </Routes>

  </BrowserRouter>

 );

}

export default App;