import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as todolistActions from '../Actions/TodolistActions';



class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: "",
         
        }
        this.changeUserInput = this.changeUserInput.bind(this);
        //this.state = {
        // userInput: '',
        // list: ["Task1", "Task2"],
        // visible: false,
        //err: "",
        //duplicate: false,
        //editBtn: false,
        //successmsg: ""


        // }

    }
    changeUserInput(e) {
        this.setState({
            userInput: e.target.value,

        });
        


    }

    addTodo() {
        let userInput = this.state.userInput;
        this.setState({userInput:''})
        this.props.dispatch(todolistActions.addTodo(userInput));


    }
    deleteTodo(index){
        console.log(index)
        this.props.dispatch(todolistActions.deleteTodo(index));

    }
    editTodo(index){
        this.setState({userInput:this.props.todoList[index]})
        this.props.dispatch(todolistActions.editTodo(index));
    }


    render() {
        let todoList = this.props.todoList.map((val, index) =>
            <li key={index}>{val}&nbsp;
                        <button onClick={this.deleteTodo.bind(this,index)}>Remove</button>
                <button onClick={this.editTodo.bind(this,index,val)}>Edit</button>

            </li>

        )
      

        return (
            <div>

                <div className="Container">
        <h1>{this.props.msg}</h1>
                    {todoList}

                    <input type="text" onChange={this.changeUserInput} value={this.state.userInput} />
                    <button onClick={this.addTodo.bind(this)}>Add</button>

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



