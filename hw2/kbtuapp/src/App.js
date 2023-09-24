import logo from "./logo.svg";
import "./App.css";
import photo from "./sticker.webp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello! This is my first react app!</p>
        <img src={photo} className="App-logo" alt="logo" />
        <p>Done by: Oryngozha Nazzere</p>
      </header>
    </div>
  );
}

export default App;
