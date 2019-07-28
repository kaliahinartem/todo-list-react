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
                <div>
                    <form onSubmit={this.handleUpdate}>
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
                <div key={this.props.id}>
                    <li
                        className={this.props.completed ? "completed" : ""}
                        onClick={this.toggleCompletion}
                    >{this.props.task}</li>
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={this.handleRemove}>X</button>
                </div>
            )
        }

        return result;
    }
}


export default Todo;