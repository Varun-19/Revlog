import React from 'react';
import { connect } from 'react-redux';

import styles from './AddReturns.module.css';
import Modal from '../../Components/Modal/Modal';
import NavBar from '../../Components/Navbar/Navbar';
import Input from '../../Components/Input/Input';
import * as action from '../../Store/Actions/Login';

class AddReturns extends React.Component {

    renderProductsList(id) {
        let productsArray = [];
        
    }

    render() {
        let formObjectArray = [];
        for(let key in this.props.addReturns.returnElements) {
            formObjectArray.push({
                id : key,
                config : this.props.addReturns.returnElements[key]
            })
        }
        let invoiceObjectArray = [];
        for( let invoice in this.props.addReturns) {
            if(invoice.indexOf('invoice') !== -1) {
                invoiceObjectArray.push({
                    id : invoice,
                    config : this.props.addReturns[invoice]
                })
            }
        }
        return(
            <div className={styles.addReturnsContainer}>
                <div className={styles.addReturns}>
                    <header>
                        <h3>1. Add Invoice info:</h3>
                        <div>
                            <button className={styles.buttonClose}> X Close</button>
                            <button className={styles.buttonNext}>Next ></button>
                        </div>
                    </header>
                    <div className={styles.dealers}>
                        {formObjectArray.map(formElements => 
                            <Input  key={formElements.id}
                                    elementType={formElements.config.type}
                                    elementConfig={formElements.config.config}
                                    changed={(event) => {
                                        event.persist();
                                        }} />
                        )}
                    </div>
                    {invoiceObjectArray.map(formElements => 
                        <div className={styles.invoiceContainer} key={formElements.id}>
                            <button>+</button>
                            <Input  elementType={formElements.config.type}
                                    elementConfig={formElements.config.config}
                                    changed={(event) => {
                                        event.persist();
                                        }} />
                            <div>
                                {this.renderProductsList(formElements.id)}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        addReturns : state.addReturns 
    }
}

const mapDispatcherToProps = dispatch => {
    return {
        onChange : (event,id) => dispatch(action.onChange(event,id))
    }
}

export default connect(mapStateToProps,mapDispatcherToProps)(AddReturns);