import React, {Component} from 'react';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TodoList} from "./components/todo-list.component"
import logo from './logo.svg';
import './App.css';

let Todos = new BehaviorSubject(['apple', 'pear', 'banana']);

class App extends Component {

    constructor() {
        super()
        this.state = {input: '', todos: []}
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    componentWillMount() {
        Todos.asObservable()
            .subscribe(x => {
                this.setState((prevState) => ({...prevState, todos: x}), () => console.log("Initialising State!"))
            })
    }

    onChangeHandler(e) {
        let foo = e.target.value.slice(0);
        this.setState(prevState => ({...prevState, input: foo}))
    }

    onSubmitHandler(e){
        this.setState(prevState=>({
            ...prevState,
            input: '',
            todos: [...prevState.todos, prevState.input]
        }))
        e.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">React With RXJS</h1>
                </header>
                <form onSubmit={this.onSubmitHandler}>
                    <input type="text" onChange={this.onChangeHandler} value={this.state.input}/>
                </form>
                <TodoList todos={this.state.todos}/>
            </div>
        );
    }
}

export default App;
