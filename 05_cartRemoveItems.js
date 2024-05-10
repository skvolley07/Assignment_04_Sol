const shoppingCart = ()=>{
    const cart1 = []
    function addItem(item){

        if(cart1.includes(item)){
            let index = cart1.indexOf(item)
            let val = cart1[index].quantity
            cart1[index].quantity = ++val
        }
        else{
            cart1.push(item)
        }
    }
    function removeItem(num){
        let val
        cart1.forEach((ele,index)=>{
            if(ele.id === num){
                val = index
            }
        })
        if(cart1[val].quantity === 1){
            cart1.splice(val,1)
        }
        else{
            let value = cart1[val].quantity
            cart1[val].quantity = --value
        }

    }
    function getCartItems(){
        return cart1.slice()
    }
    return {addItem,removeItem,getCartItems}
}
const cart = shoppingCart()
console.log('Cart Items:',cart.getCartItems())

const product1 = {
    id:1,
    name: "Product-1",
    price: 20,
    quantity: 1
}
const product2 = {
    id:2,
    name: "Product-2",
    peice: 10,
    quantity: 1
}
cart.addItem(product1)
cart.addItem(product2)
cart.addItem(product1)
console.log('Cart Items:',cart.getCartItems())
cart.removeItem(2)
console.log('Cart Items:',cart.getCartItems())

