// this component will hold the navigavtion to the ProductList and CraeteProduct components
// this componet will be the homepage, and will redirect user from '/' to '/home'
import React from 'react';

const ProductHome = (props) => {
    return (
        <div>
            <div className="productBox">
                <h1 className="componenetTitle">Home Page</h1>
                <p>
                    Welcome to the Project Product Mangement. Here we can manage a cset of products. You are able to create new products, remove old prodcuts, and edit products.
            </p>
            </div>
        </div>
    )
}
export default ProductHome