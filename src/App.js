import React from "react";
import "./App.css";
import Appbar from "./components/appbar";

function App() {
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  document.onkeydown = function (e) {
    if (e.keyCode === 123) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
      return false;
    }
    if (e.ctrlKey && e.keyCode === 85) {
      return false;
    }
  };

  return (
    <div className="pt-[60px] bg-[url(./assets/bg/bg.jpeg)] bg-no-repeat bg-cover bg-center bg-fixed min-h-[100vh]">
      <Appbar />
    </div>
  );
}

export default App;
