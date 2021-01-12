import React, {useState} from 'react';
import TodosContext from './../../Context/todos';


function FormAddTodo(props){

    const [text , setText] = useState('');
   let formHandler = (e , context) => {
        e.preventDefault();
       context.add(text);
        setText('');
    }

    let inputHandler = e => setText(e.target.value)

    return(
        <TodosContext.Consumer>
            { context => (
                <form className="form-inline" onSubmit={(e) => formHandler(e, context)}>
                    <div className="form-group">
                        <input type="text" className="form-control mx-sm-3" placeholder="i want to do ..." value={text} onChange={inputHandler}/>
                        <button type='submit' className="btn btn-primary">add</button>
                    </div>
                </form>
            )}
        </TodosContext.Consumer>
    )
}


export default FormAddTodo;