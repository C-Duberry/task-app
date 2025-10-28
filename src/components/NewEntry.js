import React from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../redux/entries";
import { useState } from "react";

/*Component is used to get user input and 
  store it.  */

function NewEntry() {

  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");

 /*This function is called when the user submits their to do. 
 The function receives the input from the input box, where the 
 value is set as userInput. The function then uses the input 
 as an action payload and the data is stored. The userInput is 
 then set to blank ready for another to do.  */ 

  const addNew = (event) => {
    event.preventDefault()
    dispatch(addNewTask(userInput));
    setUserInput("");
  };

  /*The component returns a form with an input box to take 
  user data and a button to submit the data. */
  
  return (
    <div className="add-new">
            <span className="title-background"> 
        <h1>To Do List</h1>
        </span>
      <form onSubmit={addNew}>
      <input className="update-input"
        value={userInput}
        placeholder="Enter new task "
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button type="submit" className="add-btn" >Add New</button>
</form>  
  </div>
  );    
}

export default NewEntry;


