import React, { useState } from 'react';
import './App.css';


function App() {
  const [text,setText]=useState("");
  const [items,setItem]=useState([
    {"text":"Task 1"},
    {"text":"Task 2"}
  ])
  function addItem(txt){
    let newElement={
      "text":txt
    }
    setItem(oldArray => [...oldArray, newElement]);
  }
  return (
    <div className="container">
      <div className="inner-container">
        <div className="heading">Todomatic</div>
        <div>
        <textarea className="text"
        value={text}
        onChange={e=>setText(e.target.value)}
        >
        </textarea>
        </div>
        <button className="btn"
        onClick={()=>addItem(text)}
        >Add</button>
        <div className="categories">
          <button className="box">All</button>
          <button className="box">Active</button>
          <button className="box">Completed</button>
        </div>
        <div className="todo">
          {items.map((x)=>{
            return(
              <div id={x.text}>
              <div className="items">
              <input type="checkbox" />
              <div>{x.text}</div> 
            </div>
            <div className="buttons"> 
            <button className="btn" style={{marginRight:"10px"}}>Edit</button>
            <button className="btn">Delete</button>
            </div>
            </div>
            )
          })}


        </div>

      </div>
    </div>
  );
}

export default App;
