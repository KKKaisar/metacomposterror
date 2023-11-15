import logo from "./logo.svg";
import "./App.css";
import { Metacom } from "metacom";

window.Metacom = Metacom;
// const metacom = Metacom.create("ws:127.0.0.1:8001");
const metacom = Metacom.create("ws://127.0.0.1:8001");
const { api } = metacom;
await metacom.load("example");
const result = await api.example.add({ a: 1, b: 3 });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{result}</p>
      </header>
    </div>
  );
}

export default App;
