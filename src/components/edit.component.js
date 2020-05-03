import React, {Component} from 'react';

import axios from 'axios';

class EditComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductDes = this.onChangeProductDes.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            productName: '',
            productDes: '',
            productPrice: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/product/edit' +this.props.match.params.id)
            .then(response => {
                this.setState({
                    productName : response.data.productName,
                    productDes : response.data.productDes,
                    productPrice : response.data.productPrice
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeProductName(e) {
        this.setState( {
            productName: e.target.value
        });
    }

    onChangeProductDes(e) {
        this.setState( {
            productDes: e.target.value
        });
    }

    onChangeProductPrice(e) {
        this.setState( {
            productPrice: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            productName: this.state.productName,
            productDes: this.state.productDes,
            productPrice: this.state.productPrice
        };
        axios.post('http://localhost:4000/product/update'+ this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/index');
    }

    render() {
        return (
            <div>
                <p>welcome to edit component</p>
            </div>
        );
    }
}

export default EditComponent;
