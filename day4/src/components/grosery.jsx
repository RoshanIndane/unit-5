import React from "react";

const Todolist = (prop) => {
  return (
    <div className="lidiv">
      <li>{prop.list}</li>
      <button className="rem"
        onClick={() => {
          prop.onSelect(prop.id);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Todolist;