import React from 'react';
import Select from 'react-select';

import * as styles from './Selector.module.css';

class Selector extends React.Component {
    state = {
        selectedOption: null,
      };
      handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      };
    

    render() {
        const { selectedOption } = this.state;

        const customStyles = {
            option: (provided, state) => ({
              ...provided,
              fontSize : '1.4rem',
              color : state.isSelected ? '#FA6332' : '#272262',
              backgroundColor : state.isSelected ? '#272262' : 'white'
            }),
            dropdownIndicator : (styles, state) => ({
              ...styles,
              color : 'white',
              '&:hover' : {
                color : '#FA6332',
              },
              '&:active' : {
                color : '#FA6332'
              }
            }), 
            control: (styles, state) => ({
                ...styles,
                backgroundColor : '#272262',
                boxShadow: state.isFocused ? 0 : 0,
                border: state.isFocused ? "1px solid #FA6332" : "1px solid #FA6332",
                "&:hover": {
                  border: state.isFocused ? "1px solid #FA6332" : "1px solid #FA6332"
                }
            }),
            singleValue: (provided, state) => ({
              ...provided,
              color : 'white',
              fontSize : '1.2rem'
            }),
            multiValue: (styles,state) => ({
              ...styles,
              backgroundColor : '#FA6332',
              fontSize : '1.1rem',
              color: 'white'
            }),
            multiValueLabel : (styles,state) => ({
              ...styles,
              color : 'white'
            }),
            clearIndicator : (styles,state) => ({
              ...styles,
              color : 'white',
              '&:hover' :{
                color : '#FA6332',
              },
            }),
            placeholder : (styles,state) => ({
              ...styles,
              color: 'white',
              fontSize : '1.4rem',
            })
          }

        return(
          <div>
            <div className={styles.selectWrapper}>
                <Select 
                      styles={customStyles}
                      options={this.props.options}
                      placeholder = {this.props.id}
                      isMulti
                  />
            </div>
          </div>

        )
    }
}
export default Selector;


