import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import NavBar from "./components/Topbar/NavBar";
import Login from "./pages/SignIn/Login";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Blog from "./components/blog/Blog";
import Works from "./components/Works/Works";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="works" element={<Works />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
