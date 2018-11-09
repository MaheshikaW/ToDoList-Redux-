import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as todolistActions from '../Actions/TodolistActions';
import { Alert } from 'react-bootstrap';
import { Button, ListGroupItem, FormControl, Form, Glyphicon, PageHeader } from 'react-bootstrap';


class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: "",
            isUpdateBtnVisible: false,
            todoIndex: "",
            errMsg: "",
            successMsg: "",
            isDuplicate: false

        }
        this.changeUserInput = this.changeUserInput.bind(this);
    }
    changeUserInput(e) {
        this.setState({ userInput: e.target.value, errMsg: "", successMsg: "" });
    }

    addTodo() {
        let userInput = this.state.userInput;
        if (userInput == '') {
            this.setState({ errMsg: "Input Field is Empty" })
        }
        else {
            this.setState({ userInput: '', errMsg: "" })
        }
        this.props.dispatch(todolistActions.addTodo(userInput));
    }
    checkduplicates() {
        let todolist = this.props.todoList;
        let userInput = this.state.userInput
        for (let i = 0; i < todolist.length; i++) {
            if (userInput === todolist[i]) {
                this.setState({ errMsg: "Todo is already added", isDuplicate: true })
                return true;
            }
            else {
                this.setState({
                    errMsg: "",
                    isDuplicate: false
                })
            }

        }
        if (this.state.isDuplicate === false) {
            this.addTodo();
        }

    }

    deleteTodo(index) {
        console.log(index)
        this.setState({ errMsg: "", successMsg: "" })
        this.props.dispatch(todolistActions.deleteTodo(index));
    }
    editTodo(index) {
        this.setState({ userInput: this.props.todoList[index], isUpdateBtnVisible: true, todoIndex: index })
        //this.props.dispatch(todolistActions.editTodo(index));
    }
    updateTodo() {
        let userInput = this.state.userInput
        let index = this.state.todoIndex
        this.setState({ isUpdateBtnVisible: false, userInput: "", successMsg: "Successfully updated" })

        this.props.dispatch(todolistActions.updateTodo(userInput, index))
    }


    render() {
        const btnStyle = {

            marginLeft: 400,

        }
        let todoList = this.props.todoList.map((val, index) =>
            <ListGroupItem key={index}>{val}&nbsp;
                       <button style={btnStyle} onClick={this.deleteTodo.bind(this, index)}><Glyphicon glyph="trash" /></button>
                &nbsp; <button onClick={this.editTodo.bind(this, index, val)}>  <Glyphicon glyph="edit" /></button>
            </ListGroupItem>
        )
        let button;

        if (this.state.isUpdateBtnVisible == true) {
            button = <Button bsStyle="primary" onClick={this.updateTodo.bind(this)} >Update</Button>
        }
        else {
            button = <Button onClick={this.checkduplicates.bind(this)} bsStyle="success">Add</Button>

        }

        let errmsg;
        if (this.state.errMsg !== '') {
            errmsg = <Alert bsStyle="danger">
                <strong>{this.state.errMsg}</strong>
            </Alert>;
        }

        if (this.state.successMsg !== '') {
            errmsg = <Alert bsStyle="success">
                <strong>Successfully Updated</strong>
            </Alert>;
        }


        return (
            <div>
                <div className="row">
                    <br /><br />
                    <div className="col-md-4"></div>

                    <div className="col-md-4" >
                        <PageHeader>My To do List</PageHeader>
                        {errmsg}
                        <Form inline>
                            <FormControl type="text" onChange={this.changeUserInput} value={this.state.userInput} />{button}</Form><br />
                        {todoList}


                    </div></div>
            </div>
        );
    }
}

const storeProps = (store) => ({
    todoList: store.Todolist.toDoList,
    msg: store.Todolist.errMsg,
})

export default connect(storeProps)(List)



