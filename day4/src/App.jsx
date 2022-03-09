import React, { useState } from "react";
import "./App.css";
import Todolist from "./components/grosery";

function App() {
  const [inputlist, setInputlist] = useState("");
  const [items, setItems] = useState([]);

  const inpitem = (e) => {
    setInputlist(e.target.value);
  };

  const additems = () => {
    setItems((todoitem) => {
      return [...todoitem, inputlist];
    });
    setInputlist("");
  };

  const delfun = (id) => {
    setItems((todoitem) => {
      return todoitem.filter((carr, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main">
      <div className="App">
        <div className="top">
          <div className="head"><h1><span className="To">Gros</span><span className="do">ery</span> List </h1></div>
          <div className="inp">
            <input type="text" value={inputlist} onChange={inpitem} placeholder="Enter your ToDo task here..." />
            <button className="add" onClick={additems}>Add</button>
          </div>
        </div>
        <div className="ul">
          {items.map((list, index) => {
            return (
              <h4><Todolist key={index} id={index} list={list} onSelect={delfun}/></h4>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;