import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Order from "./pages/Order";
import Tracking from "./pages/Tracking";
import Page404 from "./pages/Page404";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/admin/Dashboard";
import SignUp from "./pages/SignUp";
import Authwrapper from "./pages/wrapper/Authwrapper";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
          <Route path="/track" element={<Tracking />} />
          <Route path="/login" element={<Login />} />

          <Route
            element={
              <Authwrapper>
                <Outlet />
              </Authwrapper>
            }
          >
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/new-register" element={<SignUp />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
