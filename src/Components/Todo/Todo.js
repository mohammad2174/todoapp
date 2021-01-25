import React, {useState , useContext} from 'react';
import EditTodo from "./EditTodo";
import TodosContext from './../../Context/todos';
import axios from "axios";

function Todo(props) {
    const {item} = props;
    const [ edit, setEdit ] = useState(false);
    const todosContext = useContext(TodosContext);
    let editHandler = text => {
        axios.put(`https://react-cousre-169dd-default-rtdb.firebaseio.com/todos/${item.key}.json` , {done : item.done , text})
            .then(response => {
                todosContext.dispatch({type : 'edit_todo' , payload : {key : item.key ,text}});
            })
            .catch(err => {
                console.log(err)
            })
        setEdit(false);
    }
    let doneHandler = e => {
        axios.put(`https://react-cousre-169dd-default-rtdb.firebaseio.com/todos/${item.key}.json` , {done : ! item.done , text : item.text})
            .then(response => {
                todosContext.dispatch({type : 'toggle_todo', payload : {key: item.key}})
            })
            .catch(err => {
                console.log(err)
            })
    }
    let deleteHandler = e => {
        axios.delete(`https://react-cousre-169dd-default-rtdb.firebaseio.com/todos/${item.key}.json`)
            .then(response => {
                todosContext.dispatch({type : 'delete_todo' , payload : {key : item.key}});
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            {
                ! edit
                    ? (
                        <div className="col-6 mb-2">
                            <div
                                className="d-flex justify-content-between align-items-center border rounded p-3">
                                <div>
                                    {item.text}
                                </div>
                                <div>
                                    <button type="button" className={`btn-sm mr-1 ${ !item.done ? 'btn-success' : 'btn-warning'}`} onClick={doneHandler}>{item.done ? 'undone' : 'done'}</button>
                                    <button type="button" className="btn btn-info btn-sm mr-1" onClick={() => setEdit(true)}>edit</button>
                                    <button type="button" className="btn btn-danger btn-sm" onClick={deleteHandler}>delete</button>
                                </div>
                            </div>
                        </div>
                    )
                    : <EditTodo text={item.text} edit={editHandler} />
            }
        </>
    )
}

export default Todo;