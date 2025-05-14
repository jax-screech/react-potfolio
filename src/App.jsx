import React from "react";
import Counter from "./components/counter";
import "./App.css";
import FetchData from "./components/MultipleData";
import FetchApis from "./components/ApiData";
function App() {
  return (
    <div className="app">
      <FetchApis />
    </div>
  );
}
export default App;