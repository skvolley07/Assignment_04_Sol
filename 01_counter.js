function counter(num){
    let val = num
    function increment(){
        return ++val
    }
    return increment
}

const buttonClicked = counter(0)

console.log(buttonClicked())
console.log(buttonClicked())
console.log(buttonClicked())