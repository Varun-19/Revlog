import React from 'react';
import { connect } from 'react-redux';


import * as action from '../../Store/Actions/Login';
import * as styles from './Login.module.css';
import logo from '../../assets/logo/Logo.svg'
import Input from '../../Components/Input/Input'
import { Redirect } from 'react-router-dom';

class Login extends React.Component {  
    formHandler = (e) => {
        e.preventDefault();
        e.persist();
        // this.props.onAuth( this.props.login.formElements.userName.value, this.props.login.formElements.password.value);
        const {history} = this.props;
        history.push('/products');
    }  

    render() {
        let formObjectArray = [];
        for(let key in this.props.login.formElements) {
            formObjectArray.push({
                id : key,
                config : this.props.login.formElements[key]
            })
        }

        return(
            <React.Fragment>
            <Redirect to={this.props.login.auth.authRedirectPath} />
            <div className={styles.loginContainer}> 
                <div className={styles.header}>
                    <img src={logo} alt='Logo'/>
                    <h1>RevLog</h1>    
                </div>
                               
                <form  className={styles.form} onSubmit={this.formHandler}>
                    {formObjectArray.map(formElements =>              
                        <Input  key={formElements.id}
                                elementType={formElements.config.type}
                                elementConfig={formElements.config.config}
                                value={formElements.config.value}
                                invalid={!formElements.config.valid}
                                shouldValidate={formElements.config.validation}
                                changed={(event) => {
                                    event.persist();
                                    this.props.onChange(event,formElements.id)}} />
                    )}
                    <button>Login</button>
                </form>  
            </div>
            </React.Fragment>
        )
    } 
}

const mapStateToProps = state => {
    return {
        login : state.login
    }
}

const mapDispatcherToProps = dispatch => {
    return {
        onChange : (event,id) => dispatch(action.onChange(event,id)),
        onAuth: ( email, password ) => dispatch( action.auth( email, password))
    }
}



export default connect(mapStateToProps,mapDispatcherToProps)(Login);