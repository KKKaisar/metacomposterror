import logo from "./logo.svg";
import "./App.css";
import { Metacom } from "metacom";

window.Metacom = Metacom;
const metacom = Metacom.create("http://127.0.0.1:8000");
(async () => {
  const { api } = metacom;
  // try {
  //   await metacom.load('auth'); // Вызывает ошибку
  //   await api.auth.status(); // Check session status
  // } catch (err) {
  //   await api.auth.signIn({ login: 'marcus', password: 'marcus' });
  // }
  await metacom.load("example"); // Вызывает ошибку
  const result = api.example.add({ a: 1, b: 3 });
})();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{}</p>
      </header>
    </div>
  );
}

export default App;
