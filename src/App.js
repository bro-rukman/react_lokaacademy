import { useState, useEffect } from "react";
import "./App.css";
import { ButtonPrimary } from "./components/button/ButtonPrimary";
function App() {
  const [numbers, setNumbers] = useState(0);
  const [name, setName] = useState("hello");

  useEffect(() => {
    setName("Rukman");
  }, [numbers]);

  return (
    <div className="App">
      <button onClick={() => setNumbers(numbers + 1)}>tambah</button>
      <p>{numbers}</p>
      <button onClick={() => setNumbers(numbers - 1)}>kurang</button>
      <div>
        <button onClick={() => setName("world")}>nama</button>
        <p>{name}</p>
      </div>
      {/* <ButtonPrimary title={"Checkout"} />
      <ButtonPrimary title={"log in"} />
      <ButtonPrimary title={"log out"} /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
