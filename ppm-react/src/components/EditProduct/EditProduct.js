//this component will be used to edit a product and be autofilled with the product information
// compoenent will have a update button to send the updated informaiotn to the state and redirect to ProductList
//compeonent will have a delete button that will remove the product from the list and redirect back to ProductList
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProductRecord, updateProductInfo } from '../../redux';



class EditProdcut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: '',
            price: 0,
            description: '',
        }
    }

    componentDidMount = () => {
        this.setState({
            id: this.props.editProductRecord.id,
            title: this.props.editProductRecord.title,
            price: this.props.editProductRecord.price,
            description: this.props.editProductRecord.description,
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleDelete = (event) => {
        // console.log("Delete this ID:",this.props.editProductRecord.id);
        event.preventDefault();
        this.props.deleteProduct(this.props.editProductRecord.id);
        this.props.history.push('/products');
    }

    handleUpdate = (event) => {
        event.preventDefault();
        this.props.updateProduct(this.state, this.props.editProductRecord.id);
        this.props.history.push('/products');
    }



    render() {
        // console.log("EidtProps", this.props.editProductRecord);
        console.log(this.state);

        const isValidData = this.state.title.length <= 4 && this.state.price !== null;

        return (
            <div className="productBox">
                <h1 className="componenetTitle">Edit Product</h1>
                <form>
                    <label>Title</label>
                    <input type="text" name="title" onChange={this.handleChange} value={this.state.title} className="formData" />
                    <br />
                    <label>Price</label>
                    <input type="number" name="price" onChange={this.handleChange} value={this.state.price} className="formData" />
                    <br />
                    <label>Description</label>
                    <input type="text" name="description" onChange={this.handleChange} value={this.state.description} className="formData" />
                    <br />
                    <input type="button" value="Delete" className="deleteButton" onClick={this.handleDelete}/>
                    <input type="button" disabled={!isValidData} value="UPDATE" className="updateButton" onClick={this.handleUpdate}/>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    editProductRecord: state.editProductRecord,

})
const mapDispatchToProps = (dispatch) => ({
    deleteProduct: (id) => dispatch(deleteProductRecord(id)),
    updateProduct: (product, id) => dispatch(updateProductInfo(product, id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProdcut)