function updatePrice() {
  var size = document.querySelector(".product-size").value;
  var price = 0 ;

  if (size == "7.5"){
    price = 99.99;
  }else if (size == "8") {
    price = 109.99;
  }else if (size == "8.5") {
    price = 119.99;
  }else if (size == "9") {
    price = 129.99;
  }

  document.querySelector(".product-price").innerHTML = "Price : $" + price.toFixed(2);
}

updatePrice();