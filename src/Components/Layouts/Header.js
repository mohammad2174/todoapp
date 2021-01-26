import React, {useContext} from 'react';
import AuthContext from '../../Context/auth';
import TodosContext from '../../Context/todos';
import {Link} from "react-router-dom";


function Header() {
    const todosContext = useContext(TodosContext);
    const authContext = useContext(AuthContext);
    let doLogin = () => authContext.dispatch({type : 'login_user'});
    let doLogout = () => authContext.dispatch({type : 'logout_user'});

    return(
        <header>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex navbar-expand-md justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <strong>Todo App</strong>
                    </a>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item active'>
                            <Link className='nav-link active' to="/">Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to={{
                                pathname : '/about',
                                search : '?name=milad',
                                hash : '#mypage',
                            }}>About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to={location => `/contact${location.search}`}>Contact</Link>
                        </li>
                    </ul>
                    {
                        ! authContext.authenticated
                        ? <button className="btn btn-sm btn-success" onClick={doLogin}>login</button>
                        : <button className="btn btn-sm btn-danger" onClick={doLogout}>logout</button>
                    }
                </div>
            </div>
        </header>
    )
}


export default Header;