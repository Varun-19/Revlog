import React from 'react';

import * as styles from './Input.module.css';

const input = ( props ) => {
    let inputElement = null;

    switch ( props.elementType ) {
        case ( 'text' ):
            inputElement = <input
                className={styles.input}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'password' ):
            inputElement = <input
                className={styles.input}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <div className={styles.selectWrapper}>
                    <select className={styles.select}
                        value={props.value}
                        onChange={props.changed}>
                        {props.elementConfig.options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.display}
                            </option>
                        ))}
                    </select>
                </div>
            );
            break;
        default:
            inputElement = <input
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div>
            {inputElement}
        </div>
    );

};

export default input;