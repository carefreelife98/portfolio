import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MAIN_PATH} from "./constants";
import {Route, Routes} from "react-router-dom";
import Container from "./layouts/Container";
import Main from "./views";

function App() {
  return (
      <Routes>
        <Route element={<Container/>}>
          <Route path={MAIN_PATH()} element={<Main/>}/>
        </Route>
      </Routes>
  );
}

export default App;
