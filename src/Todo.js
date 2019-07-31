import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    handleRemove() {
        this.props.remove(this.props.id);
    }


    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    toggleCompletion() {
        this.props.complete(this.props.id);
    }

    handleUpdate(evt) {
        evt.preventDefault();
        this.props.update(this.props.id, this.state.task);
        this.handleEdit();
    }

    render() {
        let result;

        if(this.state.isEditing) {
            result = (
                <div className="Todo">
                    <form
                        className="Todo-edit-form"
                        onSubmit={this.handleUpdate}
                    >
                        <input
                            type="text"
                            value={this.state.task}
                            name="task"
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div className="Todo">
                    <li
                        className={this.props.completed ? "Todo-task completed" : "Todo-task"}
                        onClick={this.toggleCompletion}
                    >
                        {this.props.task}
                    </li>
                    <div className="Todo-buttons">
                        <button onClick={this.handleEdit}>
                            <i className="Todo-edit fa fa-edit" />
                        </button>
                        <button onClick={this.handleRemove}>
                            <i className="fa fa-trash" />
                        </button>
                    </div>
                </div>
            )
        }

        return result;
    }
}


export default Todo;