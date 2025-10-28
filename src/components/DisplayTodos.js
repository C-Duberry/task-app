import React from "react";
import ToDos from "./ToDos";
import { useSelector } from "react-redux";

/*This component is used to display each to do item.  */

function DisplayTodos() {

//Retrieves the task entries from redux store

  const entry = useSelector((state) => state.entry);

/*Map method maps over the entry object and returns the to do data such 
as the id, title(content) and whether they have been completed. The map sends
props to the ToDo component - where the entries are created.*/  

  const showEntries = Object.entries(entry.data).map((item, index) => {

    return (
      <ToDos
        key={item[0]}
        id={item[0]}
        title={item[1].content}
        completed={item[1].completed}
      />
    );
  });

// The component returns the entries. 

  return (
    <div className="todo-container">
      <ul>{showEntries}</ul>
    </div>
  );
}

export default DisplayTodos;


