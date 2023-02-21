import { Route, Routes } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import TopBar from "./layout/TopBar";
import Overview from "./pages/Overview/Overview";

const App = () => {
  return (
    <div className="grid grid-cols-[1fr] sm:grid-cols-[80px__1fr] grid-rows-[70px__1fr__1fr] area min-h-screen w-full">
      <Sidebar />
      <TopBar />
      <Routes>
        <Route element={<Overview />} path="/" />
      </Routes>
    </div>
  );
};

export default App;
