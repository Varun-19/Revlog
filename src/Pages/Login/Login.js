import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


import * as action from '../../Store/Actions/Login';
import * as styles from './Login.module.css';
import logo from '../../assets/logo/Logo.svg'
import Input from '../../Components/Input/Input'

class Login extends React.Component {  
    formHandler = (e) => {
        e.preventDefault();
        const { history } = this.props;
        history.push('/revlog');
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
                                changed={(event) => {this.props.onChange(event,formElements.id)}} />
                    )}
                    <button>Login</button>
                </form>  
            </div>
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
    }
}



export default connect(mapStateToProps,mapDispatcherToProps)(Login);