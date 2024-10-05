export const totalItem = (cart) => {
    return cart.reduce((sum, product) => sum + product.quantity , 0)
}

export const totalPrice = (cart) => {
    return cart.reduce((total, product) => total + product.quantity * product.itemPrice , 0)
}


const CartReducer = (state, action) => {
    switch(action.type) {
        case "Add":
            return [...state, action.product]

        case "Remove":
            return state.filter( p => p.itemCode !== action.itemCode)

        case "Increase":
            const IndexI = state.findIndex( p => p.itemCode === action.itemCode)
            state[IndexI].quantity += 1 
            return [...state]

        case "Decrease":
            const IndexD = state.findIndex( p => p.itemCode === action.itemCode)
            state[IndexD].quantity -= 1 
            return [...state]

        default: 
            state;
    }
}

export default CartReducer