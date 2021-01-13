function AppReducer(state , action) {
    console.log(state , action)
    switch (action.type) {
        case 'add_todo' :
            return addTodo(state , action);
            break;
        case 'delete_todo' :
            return deleteTodo(state , action);
            break;
        case 'toggle_todo' :
            return toggleTodo(state , action);
            break;
        case 'edit_todo' :
            return editTodo(state , action);
            break;
        case 'login_user' :
            return {
                ...state,
                authenticated : true
            }
            break;
        case 'logout_user' :
            return {
                ...state,
                authenticated : false
            }
            break;
        default:
            return state;
            break;
    }
    return state;
}

export default AppReducer;

let addTodo = (state , action) => {
    let {text} = action.payload
    return {
        ...state,
        todos : [
            ...state.todos,
            {key : Date.now() , done : false , text}
        ]
    }
}

let deleteTodo = (state , action) => {
    let {key} = action.payload;
    return {
        ...state,
        todos : state.todos.filter(item => item.key !== key)
    }
}

let toggleTodo = (state , action) => {
    let {key} = action.payload;
    let item = state.todos.find(item => item.key === key);
    item.done = ! item.done;
    let newTodos = state.todos.filter(item => item.key !== key);
    return {
        ...state,
        todos: [
            ...newTodos,
            item
        ]
    }
}

let editTodo = (state , action) => {
    let {key , text} = action.payload;
    let item = state.todos.find(item => item.key === key);
    item.text = text;
    let newTodos = state.todos.filter(item => item.key !== key);
    return {
        ...state,
        todos: [
            ...newTodos,
            item
        ]
    }
}

// addTodo(text) {
//     this.setState(prevState => {
//         return {
//             todos : [
//                 ...prevState.todos,
//                 {key : Date.now(), done : false, text}
//             ]
//         }
//     })
// }
//
// deleteTodo(key){
//     this.setState(prevState => {
//         return {
//             todos : prevState.todos.filter(item => item.key !== key)
//         }
//     })
// }
//
// editTodo(key, text){
//     let { todos } = this.state;
//     let item = todos.find(item => item.key === key);
//     item.text = text;
//     let newTodos = todos.filter(item => item.key !== key);
//     this.setState({
//         todos: [
//             ...newTodos,
//             item
//         ]
//     })
// }
//
// toggleTodo(key){
//     let { todos } = this.state;
//     let item = todos.find(item => item.key === key);
//     item.done = ! item.done;
//     let newTodos = todos.filter(item => item.key !== key);
//     this.setState({
//         todos: [
//             ...newTodos,
//             item
//         ]
//     })
// }