const shoppingCart = ()=>{
    let cart = []
    return {
        getCartItems: ()=>{
            return cart.splice()
        }
    }
}
const cart = shoppingCart()
console.log('Cart Items:',cart.getCartItems())