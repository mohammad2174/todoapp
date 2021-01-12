import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Layouts/Header";
import FormAddTodo from "./Todo/FormAddTodo";
import TodoList from "./Todo/TodoList";
import TodosContext from './../Context/todos';


class App extends Component {
    state = {
        todos : []
    }

    addTodo(text) {
        this.setState(prevState => {
            return {
                todos : [
                    ...prevState.todos,
                    {key : Date.now(), done : false, text}
                ]
            }
        })
    }

    deleteTodo(key){
        this.setState(prevState => {
            return {
                todos : prevState.todos.filter(item => item.key !== key)
            }
        })
    }

    editTodo(key, text){
        let { todos } = this.state;
        let item = todos.find(item => item.key === key);
        item.text = text;
        let newTodos = todos.filter(item => item.key !== key);
        this.setState({
            todos: [
                ...newTodos,
                item
            ]
        })
    }

    toggleTodo(key){
        let { todos } = this.state;
        let item = todos.find(item => item.key === key);
        item.done = ! item.done;
        let newTodos = todos.filter(item => item.key !== key);
        this.setState({
            todos: [
                ...newTodos,
                item
            ]
        })
    }

    render() {
        return(
            <TodosContext.Provider value={{
                todos : this.state.todos,
                add : this.addTodo.bind(this),
                done : this.toggleTodo.bind(this),
                delete : this.deleteTodo.bind(this),
                edit : this.editTodo.bind(this)
            }}>
                <div className="App">
                    <Header />
                    <main>
                        <section className="jumbotron">
                            <div className="container d-flex flex-column align-items-center">
                                <h1 className="jumbotron-heading">Welcome!</h1>
                                <p className="lead text-muted">To get started, add some items to your list:</p>
                                <FormAddTodo />
                            </div>
                        </section>
                        <div className="todosList">
                            <div className="container">
                                <div className="d-flex flex-column align-items-center ">
                                    <TodoList />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </TodosContext.Provider>
        )
    }
}



export default App;