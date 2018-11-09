import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as todolistActions from '../Actions/TodolistActions';



class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: "",
            isUpdateBtnVisible :false,
            todoIndex:"",
            errMsg:"",
            successMsg:""
         
        }
        this.changeUserInput = this.changeUserInput.bind(this);
    

    }
    changeUserInput(e) {
        this.setState({
            userInput: e.target.value,
            errMsg:"",
            successMsg:""
            

        });
        

    }

    addTodo() {
        let userInput = this.state.userInput;
        if(userInput ==''){
            this.setState({
                errMsg:"Input Field is Empty"
            })
        }
        else{
        this.setState({userInput:''})}
        this.props.dispatch(todolistActions.addTodo(userInput));


    }
    deleteTodo(index){
        console.log(index)
        this.props.dispatch(todolistActions.deleteTodo(index));

    }
    editTodo(index){
        this.setState({userInput:this.props.todoList[index],isUpdateBtnVisible:true,todoIndex:index})
        //this.props.dispatch(todolistActions.editTodo(index));
    }
    updateTodo(){
        let userInput = this.state.userInput
        let index = this.state.todoIndex
        this.setState({isUpdateBtnVisible:false,userInput:"",successMsg:"Successfully updated"})
       
       this.props.dispatch(todolistActions.updateTodo(userInput,index))
    }


    render() {
        let todoList = this.props.todoList.map((val, index) =>
            <li key={index}>{val}&nbsp;
                        <button onClick={this.deleteTodo.bind(this,index)}>Remove</button>
                <button onClick={this.editTodo.bind(this,index,val)}>Edit</button>

            </li>

        )
        let button
      if(this.state.isUpdateBtnVisible == true ){
        button =  <button onClick={this.updateTodo.bind(this)} >Update</button>
      }
      else{
      button=  <button onClick={this.addTodo.bind(this)}>Add</button>

      }
 let errmsg = this.state.errMsg
 let successMsg = this.state.successMsg

        return (
            <div>

                <div className="Container">
        <h1>{errmsg}{successMsg}</h1>
                    {todoList}

                    <input type="text" onChange={this.changeUserInput} value={this.state.userInput} />
                    {button}

                </div>
            </div>
        );
    }
}

const storeProps = (store) => ({
    todoList: store.Todolist.toDoList,
    msg:store.Todolist.errMsg,
})

export default connect(storeProps)(List)



