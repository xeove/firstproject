import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ?
                    <div>
                        {props.login}
                        <button onClick={props.logout}> logout </button>
                    </div>
                    : <NavLink to='/login'>login</NavLink>}
            </div>
        </header>
    )
}

export default Header;