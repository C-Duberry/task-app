import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteTask, toggleCompleted, updateTask } from "../redux/entries";

/*This component is used to make the entries for the to do list.  */

const ToDos = ({ id, title, completed }) => {

  const [edit, setEdit] = useState(false);
  const [valueId, setValueId] = useState(null);
  const [updatedContent, setUpdatedContent] = useState("");
  const dispatch = useDispatch();

  /*Called with an onClick event with the delete button, 
  the function dispatches the id as an action payload, 
  where it is used to find the item to delete in 
  the store object. */

  const deleteItem = () => {
    dispatch(deleteTask({ id }));
  };

  /*Used to toggle the completed boolean in the entry object. The function
  dispatches the id, and the opposite of the completed state as 
  action payload. The function is called as an onClick event for the 
  checkbox input. Toggles completed.*/

  const check = () => {
    dispatch(toggleCompleted({ id, completed: !completed }));
  };

/*Called as an onClick event for the edit button. It sets the edit state
to true and valueId as the id, both of which are used as logic within the 
return. */

  const setStatus = () => {
    setEdit(true);
    setValueId(id);
  };

 /*Called when the form with the input and update button is submitted. 
 It dispatches the new information entered as action payload to replace 
 the data in the entries the user wants to update.  */ 

  const update = (event) => {
    event.preventDefault()
    dispatch(updateTask({ id: id, title: updatedContent }));
    setEdit(false);
  };

  /*The component returns the to do content along with a checkbox to mark whether 
  the item has been completed, a delete button (button has text with Unicode trashcan), an edit 
  button (button has text with Unicode pencil icon) and if the edit status
  and valueId is equal to the id, a form with the update button will show, along with an input box.
   The input box's value is set to updateContent, which once the button is clicked and form submitted
   is updated and then sent to the store in the update function above. */

  return (
    <li>
      <div className="list-items">
        <span className="task">{title}</span>
        <span className="edit-delete">
          <input type="checkbox" className="check-task" onClick={check}></input>
          <button className="delete-btn" type="button" onClick={deleteItem}>
            Delete &#x1F5D1;  
          </button> 
          <button className="edit-btn" onClick={() => setStatus()}>
            Edit &#x270E;
          </button>
          <br></br>
        </span>
      </div>
      {edit && valueId === id && (
        <>
        <form onSubmit={update}>
          <input
            className="update-input"
            type="text"
            value={updatedContent}
            placeholder="Update task"
            onChange={(e) => setUpdatedContent(e.target.value)}
          />
          <button type="submit" className="add-btn" >
            Update
          </button>
          </form>
        </>
      )}
    </li>
  );
};

export default ToDos;

/*References

Crud example [ redux toolkit ] (no date) YouTube. YouTube. 
Available at: https://www.youtube.com/playlist?list=PLtFbQRDJ11kHPsrZ_jZHrGGpwtS7Ngrl8 (Accessed: February 10, 2023).

React redux todo app tutorial | learn redux with redux toolkit (2021) YouTube. YouTube. 
Available at: https://www.youtube.com/watch?v=fiesH6WU63I&amp;t=1487s (Accessed: February 10, 2023). */


