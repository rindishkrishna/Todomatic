import './App.css';

function App() {
  return (
    <div className="container">
      <div className="inner-container">
        <div className="heading">Todomatic</div>
        <div>
        <textarea className="text" >
       
        </textarea>
        </div>
        <button className="btn">Add</button>
        <div className="categories">
          <button className="box">All</button>
          <button className="box">Active</button>
          <button className="box">Completed</button>
        </div>
        <div className="todo">
        <div className="items">
          <input type="checkbox" />
          <div>Item</div> 
        </div>
        <div className="buttons"> 
        <button className="btn" style={{marginRight:"10px"}}>Edit</button>
        <button className="btn">Delete</button>
        </div>
        <div className="items">
          <input type="checkbox" />
          <div>Item</div> 
        </div>
        <div className="buttons"> 
        <button className="btn" style={{marginRight:"10px"}}>Edit</button>
        <button className="btn">Delete</button>
        </div>

        </div>

      </div>
    </div>
  );
}

export default App;
