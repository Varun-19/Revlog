import React from 'react';
import { connect } from 'react-redux';

import * as styles from './Header.module.css';
import * as action from '../../Store/Actions/Login';
import Selector from '../Selector/Selector';

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
                <div className={styles.title}>
                    <h3>{this.props.title}</h3>
                </div>
                <div className={styles.headerselector}>
                    {headerObjectArray.map( el => {
                        return(
                            <Selector key={el.id} id={el.id} options={el.config.options}/>
                        )
                    })}
                </div>
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