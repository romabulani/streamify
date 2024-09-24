import React from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4 my-6 md:w-[800px] mx-auto w-screen px-2">
      <NavBar />
      <Outlet/>
    </div>
  );
}

export default App;
