import React, {useEffect, useState, useContext} from "react";
import FormAddTodo from "../Components/Todo/FormAddTodo";
import TodoList from "../Components/Todo/TodoList";
import todoApi from "../Api/todos";
import TodoContext from "./../Context/todos";


function Home(){

    let jsonHandler = (data) => {
        setLoading(false);
        let todos =  Object.entries(data).map(([key , value]) => {
            return {
                ...value,
                key
            }
        });
        todoContext.dispatch({type : 'init_todo' , payload :{todos}})
    }

    const [loading , setLoading] = useState();
    const todoContext = useContext(TodoContext);

    useEffect(() => {
        setLoading(true);
        todoApi.get(`https://react-cousre-169dd-default-rtdb.firebaseio.com/todos.json`)
            .then(response => jsonHandler(response.data))
            .catch(err => console.log(err));
    },[]);

    return (
        <>
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
                        {
                            loading
                                ? <h2>Loading data ...</h2>
                                : (
                                    <TodoList />
                                )

                        }
                    </div>
                </div>
            </div>
        </>
    )
}




export default Home;