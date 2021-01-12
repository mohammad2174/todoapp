import React from 'react';

const todosContext = React.createContext({
    todos : [],
    add : () => {},
    edit : () => {},
    delete : () => {},
    done : () => {},
})

export default todosContext;