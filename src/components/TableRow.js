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
                    <button className="btn btn-danger" >Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;
