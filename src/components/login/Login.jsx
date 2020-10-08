import React from 'react';
import LoginForm from "./LoginForm";
import {login, logout} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    let Login = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/news"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={Login} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login);