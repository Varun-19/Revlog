import React from 'react';
import { connect } from 'react-redux';

import * as action from '../../Store/Actions/Import';
import * as styles from './Modal.module.css';
import Backdrop from '../BackDrop/BackDrop';
import Uploader from '../Uploader/Uploader';

class modal extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Backdrop show={this.props.import.show} clicked={this.props.modalClosed} />
                <div
                    className={styles.Modal}
                    style={{
                        transform: this.props.import.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.import.show ? '1' : '0'
                    }}>
                    <Uploader />
                </div>
            </React.Fragment>
        )
    }    
};

const mapStateToProps = state => {
    return {
        import : state.importReducer
    }
}

const mapDispatcherToProps = dispatch => {
    return {
        modalClosed : () => dispatch(action.modalClosed())
    }
}

export default connect(mapStateToProps,mapDispatcherToProps)(modal);