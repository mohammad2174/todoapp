import React from 'react';
import TodosContext from './../../Context/todos';
import AuthContext from './../../Context/auth';
import axios from "axios";


// function FormAddTodo(props){
//
//     const [text , setText] = useState('');
//     const todosContext = useContext(TodosContext);
//    let formHandler = e => {
//         e.preventDefault();
//        todosContext.add(text);
//         setText('');
//     }
//
//     let inputHandler = e => setText(e.target.value)
//
//     return(
//         <form className="form-inline" onSubmit={formHandler}>
//             <div className="form-group">
//                 <input type="text" className="form-control mx-sm-3" placeholder="i want to do ..." value={text} onChange={inputHandler}/>
//                 <button type='submit' className="btn btn-primary">add</button>
//             </div>
//         </form>
//     )
// }

class FormAddTodo extends React.Component {
    state = {text : ''}
    static contextType = TodosContext;
     formHandler(e) {
        e.preventDefault();
        // this.context.dispatch({type : 'add_todo' , payload : {text: this.state.text}});
         if (this.state.text.length > 1) {
             let todo = {text: this.state.text , done : false};
             axios.post(`https://react-cousre-169dd-default-rtdb.firebaseio.com/todos.json` , todo)
                 .then(response => this.context.dispatch({type : 'add_todo' , payload : {todo: {...todo , key : response.data.name}}}))
                 .then(err => console.log(err))
             this.setState({text : ''});
         }
    }

     inputHandler(e) { this.setState({text : e.target.value}) }
    render() {
        return(
            <AuthContext.Consumer>
                { context => (
                    <>
                        {
                             context.authenticated
                            ? (
                                    <form className="form-inline" onSubmit={this.formHandler.bind(this)}>
                                        <div className="form-group">
                                            <input type="text" className="form-control mx-sm-3" placeholder="i want to do ..." value={this.state.text} onChange={this.inputHandler.bind(this)}/>
                                            <button type='submit' className="btn btn-primary">add</button>
                                        </div>
                                    </form>
                                )
                                : <p>You must be login</p>
                        }
                    </>
                )}
            </AuthContext.Consumer>
        )
    }
}


export default FormAddTodo;