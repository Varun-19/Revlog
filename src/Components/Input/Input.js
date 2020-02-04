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
        // case ( 'select' ):
        //     inputElement = (
        //         <select
        //             className={inputClasses.join(' ')}
        //             value={props.value}
        //             onChange={props.changed}>
        //             {props.elementConfig.options.map(option => (
        //                 <option key={option.value} value={option.value}>
        //                     {option.displayValue}
        //                 </option>
        //             ))}
        //         </select>
        //     );
        //     break;
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