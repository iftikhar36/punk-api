import "./App.css";
import DataFetching from "./component/DataFetching";
import Search from "./component/search/Search";
import {useState} from "react";
function App() {
    return (
        <div className="App">
            <h2>Press the button for a random cat fact!</h2>
            <hr />
            <DataFetching />
        </div>
    );
}
export default App;