import React from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators';
import { Input } from '../Common/FormControls/FormControls';
import {login} from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';

const maxLength20 = maxLengthCreator(20)

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"email"} component={Input} validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required, maxLength20]} type="password"/>
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
        props.login(formData.email, formData.password, formData.rememberMe)
        
    }
    
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return <div><LoginReduxForm onSubmit={onSubmit}/></div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);