import React, { Component } from 'react';
import './NewTodoForm.css'
import uuid from 'uuid/v4';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        if (this.state.task) {
            const newTask = {task: this.state.task, id: uuid(), completed: false};
            // if (localStorage.todos) {
            //     localStorage.setItem('todos', [localStorage.getItem('todos'), newTask]);
            // } else {
            //     console.log('pushing');
            //     localStorage.todos = [].push(newTask);
            // }
            this.props.createTask(newTask);
            this.setState({
                task: ""
            });
        }

    }

    render() {
        return (
            <form
                className="NewTodoForm"
                onSubmit={this.handleSubmit}
            >
                <input
                    placeholder="Add Todo"
                    value={this.state.task}
                    name="task"
                    type="text"
                    onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>
        );
    }
}


export default NewTodoForm;