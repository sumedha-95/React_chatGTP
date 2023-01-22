import "./App.css";
import Chat from "./Chat";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
