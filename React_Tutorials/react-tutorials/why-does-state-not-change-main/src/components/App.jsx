import React, {useState} from "react";

function App() {
  const [listInput, setListInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

  function handleInputList(event){
    let str = event.target.value; 
    setListInput(str);
  }

  function handleToDoList(){
    toDoList.push(listInput);
    setToDoList(toDoList);
    setListInput("");
    // console.log(toDoList);
    console.log("listInput: ", listInput);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
          onChange={handleInputList} 
          type="text"
          value={listInput} 
        />
        <button onClick={handleToDoList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
