

const defaultState = {
  toDoList: ["task1", "task2"],
  errMsg: "",
  



}
const reducer = (state = defaultState, action) => {


  switch (action.type) {
    case "ADD_NEWTODO": {

      let userInput = action.payload
      let errMsg;
      if (userInput === '') {
        errMsg = "InputField is Empty";

      }

      let toDolist = [...state.toDoList, userInput]
      state = { ...state, userInput: userInput, toDoList: toDolist, errMsg: errMsg }

      break

    }
    case "DELETE_TODO": {
      let toDoIndex = action.payload
      let toDolist = [...state.toDoList]
      toDolist.splice(toDoIndex, 1)
      state = { ...state, toDoList: toDolist }
      break
    }
    case "EDIT_TODO":{
      console.log(action.payload)
    }
  }
  return state;
}

export default reducer;