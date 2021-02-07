import React from 'react';
import {Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators';
import { Input } from '../Common/FormControls/FormControls';

const maxLength15 = maxLengthCreator(15)

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={[required, maxLength15]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required, maxLength15]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

let Login = (props) => {
    let onSubmit = (formData) => {
        console.log(formData);
    } 

    return <div><LoginReduxForm onSubmit={onSubmit}/></div>
}

export default Login;