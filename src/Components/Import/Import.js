import React from 'react';
import { connect } from 'react-redux';
import * as action from '../../Store/Actions/Import';
import styles from './Import.module.css';

class ImportButton extends React.Component {

    render(){
        return(
            <div className={styles.importButtonContainer}>
                <button className={styles.importButton} onClick={this.props.click}>Import</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        
    }
}

const mapDispatcherToProps = dispatch => {
    return{
        click : () => dispatch(action.modalOpen())
    }
}

export default connect(mapStateToProps,mapDispatcherToProps)(ImportButton);