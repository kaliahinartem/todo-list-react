import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from "./NewTodoForm";
import './TodoList.css'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: localStorage.getItem('todos') ?
                JSON.parse(localStorage.getItem('todos'))
                : []
        };
        this.createTask = this.createTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    componentDidUpdate() {
        console.log('updating localstorage');
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }

    createTask(newTask) {
        this.setState({
            todos: [...this.state.todos, newTask]
        });
    }

    removeTask(id) {
        this.setState({
            todos: this.state.todos.filter(task => (
                task.id !== id
            ))
        });
    }

    updateTask(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {...todo, task: updatedTask}
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        });
    }

    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        });
    }

    render() {
        let tasks = this.state.todos.map(item => (
                <Todo
                    id={item.id}
                    key={item.id}
                    task={item.task}
                    completed={item.completed}
                    remove={this.removeTask}
                    update={this.updateTask}
                    complete={this.toggleCompletion}
                />
        ));
        return (
            <div className='TodoList'>
                <h1>Todo List! <span>Simple React Todo List</span></h1>
                <ul>
                    {tasks}
                </ul>
                <NewTodoForm createTask={this.createTask} />
            </div>
        )
    }
}

export default TodoList;