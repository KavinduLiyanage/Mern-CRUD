import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.productName}
                </td>
                <td>
                    {this.props.obj.productDes}
                </td>
                <td>
                    {this.props.obj.productPrice}
                </td>
                <td>
                    <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <Link to={"/delete/" + this.props.obj._id} className="btn btn-danger">Delete</Link>
                </td>
            </tr>
        );
    }
}

export default TableRow;
