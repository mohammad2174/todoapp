import React, {useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Layouts/Header";
import TodosContext from './../Context/todos';
import AuthContext from './../Context/auth';
import AppReducer from './../Reducers/appReducer';
import {BrowserRouter , Route} from 'react-router-dom';
import Home from "../Routes/Home";
import About from "../Routes/About";
import Contact from "../Routes/Contact";


// class App extends Component {
//     state = {
//         todos : [],
//         authenticated : false,
//     }
//
//     render() {
//         return(
//             <AuthContext.Provider value={{authenticated : this.state.authenticated,
//             login : () => {this.setState({authenticated : true})},
//             logout : () => {this.setState({authenticated : false})},
//             }}>
//                 <TodosContext.Provider value={{
//                     todos : this.state.todos,
//                     add : this.addTodo.bind(this),
//                     done : this.toggleTodo.bind(this),
//                     delete : this.deleteTodo.bind(this),
//                     edit : this.editTodo.bind(this)
//                 }}>
//                     <div className="App">
//                         <Header />
//                         <main>
//                             <section className="jumbotron">
//                                 <div className="container d-flex flex-column align-items-center">
//                                     <h1 className="jumbotron-heading">Welcome!</h1>
//                                     <p className="lead text-muted">To get started, add some items to your list:</p>
//                                     <FormAddTodo />
//                                 </div>
//                             </section>
//                             <div className="todosList">
//                                 <div className="container">
//                                     <div className="d-flex flex-column align-items-center ">
//                                         <TodoList />
//                                     </div>
//                                 </div>
//                             </div>
//                         </main>
//                     </div>
//                 </TodosContext.Provider>
//             </AuthContext.Provider>
//         )
//     }
// }

function App() {
    const [state , dispatch] = useReducer(AppReducer , {
        todos : [],
        authenticated : false,
    })



    return(
        <BrowserRouter>
            <AuthContext.Provider value={{authenticated : state.authenticated,
                dispatch
            }}>
                <TodosContext.Provider value={{
                    dispatch,
                    todos : state.todos,
                }}>
                    <div className="App">
                        <Header />
                        <main>
                            <Route path='/' exact component={Home} />
                            <Route path='/about' component={About} />
                            <Route path='/contact' component={Contact} />
                        </main>
                    </div>
                </TodosContext.Provider>
            </AuthContext.Provider>
        </BrowserRouter>
    )
}


export default App;