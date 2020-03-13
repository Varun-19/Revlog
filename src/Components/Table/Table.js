import React from 'react';
import { Redirect } from "react-router-dom";
import history from '../History/History';
import Input from '../Input/Input';

import Modal from '../Modal/Modal';
import AddReturns from '../../Pages/AddReturns/AddReturns';
import styles from './Table.module.css';
import edit from '../../assets/icons/eye.svg';
import ReactPaginate from 'react-paginate';

class Tabledata extends React.Component {

    renderTableData = () => {
        let res = []
        for(let i = 0 ; i < 10; i++) {
                res.push(<tr key={i} id={i}>
                    <th scope="row">
                        <div>
                            <button className={styles.buttonIcon}><img src={edit} alt='edit'/></button>
                        </div>
                    </th>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    </tr>)
                 
        }

        return res;
    }

    addReturns = () => {
        history.push('/returns/addreturns');
    }

    render() {

        return(
            <div>
            <table>
                <thead>
                    <tr>
                    <th>Actions</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row"><button className={styles.button} onClick={this.addReturns}>+</button></th>
                    <td><Input className={styles.input}/></td>
                    <td><Input/></td>
                    <td><Input/></td>
                    <td><Input/></td>
                    <td><Input/></td>
                    <td><Input/></td>
                    <td><Input/></td>
                    <td><Input/></td>
                    <td><Input/></td>
                    <td><Input/></td>
                    <td><Input/></td>
                    <td><Input/></td>
                    </tr>
                    {this.renderTableData()}
                </tbody>
            </table>
            <ReactPaginate 
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={10}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={styles.pagination}
            subContainerClassName={'pages pagination'}
            activeClassName={styles.active}
            />
            </div>
        )
    }
}

export default Tabledata;