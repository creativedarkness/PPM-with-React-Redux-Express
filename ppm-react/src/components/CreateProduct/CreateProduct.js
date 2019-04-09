//this component will be used to add a new product to the list
//once created, will redirect back to ProductList component
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import {createNew} from '../../redux';
import './CreateProduct.css'

class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            price: 0,
            description: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewProductToSever(this.state)
        this.props.history.push('/products')
    }

    render() {
        // console.log(this.state)

        const isValidData = this.state.title.length >= 4 && this.state.price > 0;
        return (
            <div className="productBox">
                <h1 className="componenetTitle">Create a New Product</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                    <br />
                    <label>Price</label>
                    <input type="number" name="price" onChange={this.handleChange} value={this.state.price} />
                    <br />
                    <label>Description</label>
                    <input type="text" name="description" onChange={this.handleChange} value={this.state.description} />
                    <br />
                    <input type="submit"  disabled={!isValidData} value="CREATE" className="createButton" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    // addNewProduct: (product) => dispatch(createNew(product)),
    addNewProductToSever: (product) => {
        console.log("being passed to addNewProdcutToServer:", product);
        axios
            .post(`http://localhost:1337/api/v1/products`, product)
            .then((response) => {
                console.log("getList response:", response);
                this.props.updateList(response.data)
            })
            .catch(error => {
                console.log("getList Error", error);
            })
    }
})

export default connect(
    null,
    mapDispatchToProps
) (CreateProduct)