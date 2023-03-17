import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="container root">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
