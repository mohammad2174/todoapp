import React from 'react';
import TodosContext from './../../Context/todos';
import AuthContext from './../../Context/auth';


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
        this.context.dispatch({type : 'add_todo' , payload : {text: this.state.text}});
         this.setState({text : ''});
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