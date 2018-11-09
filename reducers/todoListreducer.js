

const defaultState = {
  toDoList: ["task1", "task2"],

  
  



}
const reducer = (state = defaultState, action) => {


  switch (action.type) {
    case "ADD_NEWTODO": {

      let userInput = action.payload
      let errMsg;
    

      let toDolist = [...state.toDoList, userInput]
      state = { ...state, userInput: userInput, toDoList: toDolist, }

      break

    }
    case "DELETE_TODO": {
      let toDoIndex = action.payload
      let toDolist = [...state.toDoList]
      toDolist.splice(toDoIndex, 1)
      state = { ...state, toDoList: toDolist }
      break
    }
    

    case "UPDATE_TODO":{
      let toDoIndex = action.payload.index
      let userInput = action.payload.userinput
      let toDolist = [...state.toDoList]
      toDolist.splice(toDoIndex, 1,userInput)
      state = { ...state, toDoList: toDolist }
      break
      
    }
  }
  return state;
}

export default reducer;