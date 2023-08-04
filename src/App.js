import { Outlet } from "react-router-dom";
import "./App.css";
import SiderBar from "./components/SiderBar";

function App() {
  return (
    <div className="flex">
      <div className={`w-full sm:w-[350px] sm:block`}>
        <SiderBar />
      </div>
      <div className="z-10 flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
