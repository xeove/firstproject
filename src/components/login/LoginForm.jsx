import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../form-control/form-control";
import {fieldIsRequired} from "../../validators/validators";
import styles from "../../form-control/form-control.module.css"


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"email"} placeholder={"email..."} component={Input} validate={[fieldIsRequired]}/>
            </div>
            <div>
                <Field type={"password"} name={"password"} placeholder={"password..."} component={Input} validate={[fieldIsRequired]}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            { props.error && <div className={styles.formError}>
                {props.error}
            </div>
            }
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'login'})(LoginForm)