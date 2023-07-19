import React from "react";
import { HashRouter } from "react-router-dom";
import { Router } from "./routes/Router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
}

export default App;
