import React, {Component} from 'react';
import axios from 'axios';
import TableRowComponent from './tableRow.component';

class ListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product : []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/products')
            .then(response => {
                this.setState({
                    product : response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/products')
            .then(response => {
                this.setState({
                    product : response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    productList() {
        return this.state.product.map( function (object, i) {
            return <TableRowComponent obj={object} key={i}/>;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Products List</h3>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.productList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListComponent;
