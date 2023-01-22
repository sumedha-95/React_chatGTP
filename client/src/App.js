import React, { Fragment } from "react";
import "./App.css";
import "./normal.css";
import Chat from "./Chat";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
