
export const addTodo= (userinput) => {
	return ((dispatch)=>{
		dispatch(addTodoList(userinput))
	})

}
export const deleteTodo=(index)=>{
return((dispatch)=>{
    dispatch(deleteToDo(index))
})
}

export const updateTodo=(userinput,index)=>{
    return((dispatch)=>{
        dispatch(updateToDo(userinput,index))
    })
}
function addTodoList(userinput){
    return{
        type:"ADD_NEWTODO",
        payload:userinput
    }
}

function deleteToDo(index){
    return{
        type:"DELETE_TODO",
        payload:index
    }
}

function updateToDo(userinput,index){
    return{
        type:"UPDATE_TODO",
        payload:{userinput,index}
    }
}