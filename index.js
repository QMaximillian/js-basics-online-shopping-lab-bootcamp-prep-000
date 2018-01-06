var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100)


  cart.push({[item]:itemPrice});
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {

    if (cart.length === 0) {
      console.log(`Your shopping cart is empty. `)
  } else {
    var newString = "In you cart, you have "

    for (var i = 0, l = cart.length; i < l; i++){
      for (var list in cart[i]) {
        newString += `${list} at ${cart[i][list]}`
                       if(i!==cart.length-1){
                   newString+=", "
                }
                 else{
                   newString+="."

      }




  }

}
} console.log(newString)
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
