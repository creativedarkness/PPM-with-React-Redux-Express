//this will hold the state for the app
// this will have all the CRUD functions

import { createStore } from 'redux';

export const createNew = (product) => ({
    type: 'CREATE_NEW',
    product
})
export const editProduct = (productRecord, editId) => ({
    type: 'EDIT_PRODCUT',
    productRecord,
    editId,
})
export const updateProductInfo = (updatedRecord, updateId) => ({
    type: 'UPDATE_PRODUCT_INFO',
    updatedRecord,
    updateId
})
export const deleteProductRecord = (deleteId) => ({
    type: 'DELETE_PRODUCT_RECORD',
    deleteId
})

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_NEW':
            return {
                ...state,
                products: [
                    ...state.products,
                    { id, title: action.product.title, price: action.product.price, description: action.product.description }
                ]
            }

        case 'EDIT_PRODCUT':
            if (state.products.id === action.editId) {
                // console.log("productRecord", action.productRecord);
                // console.log("editId", action.editId);
                return {
                    ...state,
                    editProductRecord: action.productRecord,
                }
            } else {
                return state
            }

        case 'UPDATE_PRODUCT_INFO':
            // let updatedInfo = action.updatedRecord;
            return {
                ...state,
                products: state.products.map(record => {
                    if (record.id === action.updateId) {
                        console.log("record", record);
                        return {
                            ...record,
                            title: action.updatedRecord.title,
                            price: action.updatedRecord.price,
                            description: action.updatedRecord.description,
                        }
                    }
                    return record;
                })
            }

        case 'DELETE_PRODUCT_RECORD':
            console.log("DELETE_PRODUCT_RECORD -", action.deleteId - 1);
            console.log("DELETE_PRODUCT_RECORD -", action.deleteId + 1);
            return {
                ...state,
                products: [
                    ...state.products.slice(0, action.deleteId - 1), ...state.products.slice(action.deleteId)
                ]
            }

        default:
            return state
    }
}

//set an Initial State
let id = 4;
const initialState = {
    products: [
        { id: 1, title: 'Thing 1', price: 3000, description: 'it really fancy and sh--', },
        { id: 2, title: 'Thing 2', price: 3000, description: 'it really fancy and sh--', },
        { id: 3, title: 'Thing 3', price: 3000, description: 'it really fancy and sh--', },
        { id: 4, title: 'Thing 4', price: 3000, description: 'it really fancy and sh--', },
    ],
    editProductRecord: null,
}
//create the store
export function configureStore(initialState = initialState) {
    const store = createStore(reducers, initialState);
    return store;
};
export const store = configureStore();
//end store

