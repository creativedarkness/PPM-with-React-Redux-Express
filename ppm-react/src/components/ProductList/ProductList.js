//This componet will show all the products
// each product will have it's onw box
// each box will have a title, proce, and description 
// each box will have am edit and delete button
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { deleteProductRecord, editProduct, updateProductList } from '../../redux';
import './ProductList.css';

class ProdcutList extends Component {

    handleEditClicked = (product, id) => {
        // console.log("editClick param",product);
        this.props.editProduct(product, id);
        this.props.history.push(`/products/edit/${product.id}`)
    }

    componentDidMount = () => {
        axios
            .get(`http://localhost:1337/api/v1/products`)
            .then((response) => {
                console.log("getList response:", response);
                this.props.updateList(response.data)
            })
            .catch(error => {
                console.log("getList Error", error);
            })
    }

    render() {
        console.log("productList props", this.props)
        return (
            <div className="productBox">
                <h1 className="componenetTitle">Product List</h1>
                {this.props.products.map((product, index) => {
                    // console.log("product", product);
                    // console.log("product.id", product.id);
                    return (
                        <div className="productItemBox" key={index}>
                            <h3>{product.title}</h3>
                            <h4>${product.price}</h4>
                            <p>{product.description}</p>
                            <button className="editButton" namne={product.id} onClick={(event) => { this.handleEditClicked(product, product.id) }}>Eidt</button>
                            <br />
                            <button className="deleteButton" namne={product.id} onClick={() => this.props.deleteProduct(product.id)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch) => ({
    deleteProduct: (id) => dispatch(deleteProductRecord(id)),
    editProduct: (id) => dispatch(editProduct(id)),
    updateList: (products) => dispatch(updateProductList(products))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProdcutList)