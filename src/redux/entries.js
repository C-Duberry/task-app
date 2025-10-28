import { createSlice } from "@reduxjs/toolkit";

// Stores the to dos.

export const entrySlice = createSlice({
  name: "entry",

  initialState: {
    nextId: 2,
    data: {
      // 1: {
      //   // id: 1,
      //   // content: "Content 1",
      //   // completed: false,
      // },
    },
  },

  reducers: {

  /*Used to add a new task to the store object. The nextId is used as the id for each new 
 task and is incremented each time a task is added. The content is set to action payload and the completed
 is initially set to false. The data is then added to the entry state object.   */

    addNewTask: (state, action) => {
      const newTask = {
        [state.nextId]: {
          id: state.nextId,
          content: action.payload,
          completed: false,
        },
      };
      state.nextId += 1;
      Object.assign(state.data, newTask);
    },

    // Deletes task using the id as action payload to find the entry to delete.

    deleteTask: (state, action) => {
      delete state.data[action.payload.id];
    },

    // Toggles the completed to true/false based on the current state of completed.

    toggleCompleted: (state, action) => {
      state.data[action.payload.id].completed = action.payload.completed;
    },

    /*Updates the task by mapping through the data and finding the action payload id that matches the to do id, 
    if it matches the contents is replaced.  */

    updateTask: (state, action) => {
      Object.values(state.data).map((item) => {
  if (item.id == action.payload.id) {
  return  item.content = action.payload.title
       
        }
      });
    },
  },
});

export const { addNewTask, deleteTask, toggleCompleted, updateTask } =  entrySlice.actions;

export default entrySlice.reducer;


