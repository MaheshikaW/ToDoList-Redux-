
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
export const editTodo=(index,val)=>{
    return((dispatch)=>{
        dispatch(editToDo(index,val))
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
function editToDo(index){
    return{
        type:"EDIT_TODO",
        payload:index,
       
       
    }
}