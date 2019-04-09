//This componet will show all the products
// each product will have it's onw box
// each box will have a title, proce, and description 
// each box will have am edit and delete button
import React from 'react';
import { connect } from 'react-redux';
import { deleteProductRecord, editProduct} from '../../redux';
import './ProductList.css';

const ProdcutList = (props) => {
    console.log("productList props", props)

    const handleEditClicked = (product, id) => {
        // console.log("editClick param",product);
        props.editProduct(product, id);
        props.history.push(`/products/edit/${product.id}`)
    }

    return (
        <div className="productBox">
            <h1 className="componenetTitle">Product List</h1>
            {props.products.map((product, index) => {
                // console.log("product", product);
                // console.log("product.id", product.id);
                return (
                    <div className="productItemBox" key={index}>
                        <h3>{product.title}</h3>
                        <h4>${product.price}</h4>
                        <p>{product.description}</p>
                        <button className="editButton" namne={product.id} onClick={(event) => {handleEditClicked(product, product.id)}}>Eidt</button>
                        <br />
                        <button className="deleteButton" namne={product.id} onClick={() => props.deleteProduct(product.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}
const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch) => ({
    deleteProduct: (id) => dispatch(deleteProductRecord(id)),
    editProduct: (id) => dispatch( editProduct(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProdcutList)