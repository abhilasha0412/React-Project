// App.js
import React from "react";
import Wordlettercounter from "./Wordlettercounter";
import "./App.css";

function App() {
    return (
        <div className="App">
            <h1 id="top">
            Online Character Count Tool
            </h1>
            <h1>
            Words and Letters
            Counter
            </h1>
            <Wordlettercounter />
        </div>
    );
}

export default App;

