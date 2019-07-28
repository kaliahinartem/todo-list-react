import React, { Component } from 'react';
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
        const newTask = {task: this.state.task, id: uuid(), completed: false};
        this.props.createTask(newTask);
        this.setState({
            task: ""
        });
    }

    render() {
        return (
            <div>
                <h1>New Todo</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Add Todo"
                        value={this.state.task}
                        name="task"
                        type="text"
                        onChange={this.handleChange}
                    />
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}


export default NewTodoForm;