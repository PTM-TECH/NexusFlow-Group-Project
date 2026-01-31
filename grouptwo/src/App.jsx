import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Dashboard from "./components/Dashboard";
import Login from "./components/LogIn";
import Subscription from "./components/Subscription";
import Signup from "./components/SignUp";
import Errorpage from "./components/ErrorPage/Error";
import Servicedetails from "./components/Homepage/components/OurServices/ServiceList/Servicedetails";

function App() {
  const [users, setUsers] = useState([
    { email: "nick123@gmail.com", password: "123456" },
    { email: "lucy234@gmail.com", password: "password" },
  ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/signup"
          element={<Signup users={users} setUsers={setUsers} />}
        />
        <Route path="/login" element={<Login users={users} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/service/:name" element={<Servicedetails />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
