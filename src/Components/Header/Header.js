import React from 'react';

import * as styles from './Header.module.css';
import * as action from '../../Store/Actions/Login';
import Input from '../Input/Input';
import { connect } from 'react-redux';

class Header extends React.Component {
    
    render() {

        let headerObjectArray = [];
        for(let key in this.props.header.headerElements) {
            headerObjectArray.push({
                id : key,
                config : this.props.header.headerElements[key]
            })
        }
        return(
            <div className={styles.headerTop}>
                <h3>{this.props.title}</h3>
                {headerObjectArray.map(headerElements =>              
                        <Input  key={headerElements.id}
                                elementType={headerElements.config.type}
                                elementConfig={headerElements.config.config}
                                value={headerElements.config.value}
                                changed={(event) => {this.props.onChange(event,headerElements.id)}} />
                    )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        header : state.header
    }
}

const mapDispatcherToProps = dispatch => {
    return {
        onChange : (event,id) => dispatch(action.onChange(event,id)),
    }
}

export default connect(mapStateToProps,mapDispatcherToProps)(Header);