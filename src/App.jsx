import Sidebar from "./layout/Sidebar";
import TopBar from "./layout/TopBar";
import Overview from "./pages/Overview/Overview";

const App = () => {
  return (
    <div className="grid grid-cols-[80px__1fr] grid-rows-[70px__1fr__1fr] area min-h-screen w-full">
      <Sidebar />
      <TopBar />
      <Overview />
    </div>
  );
};

export default App;
