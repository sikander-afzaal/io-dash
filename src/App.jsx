import { Route, Routes } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import TopBar from "./layout/TopBar";
import Contact from "./pages/Contact/Contact";
import Overview from "./pages/Overview/Overview";
import ProjectView from "./pages/ProjectView/ProjectView";

const App = () => {
  return (
    <div className="grid grid-cols-[1fr] sm:grid-cols-[80px__1fr] grid-rows-[70px__1fr] area min-h-screen w-full">
      <Sidebar />
      <TopBar />
      <Routes>
        <Route element={<Overview />} path="/" />
        <Route element={<ProjectView />} path="/view" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </div>
  );
};

export default App;
