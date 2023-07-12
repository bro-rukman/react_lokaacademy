import { useState, useEffect } from "react";
import { ButtonPrimary } from "./components/button/ButtonPrimary";
import { HashRouter } from "react-router-dom";
import { Router } from "./routes/Router";
function App() {
  const [numbers, setNumbers] = useState(0);
  const [name, setName] = useState("hello");

  useEffect(() => {
    setName("Rukman");
  }, [numbers]);

  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
}

export default App;
