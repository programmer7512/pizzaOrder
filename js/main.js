// $(document).ready(function(){
// $("#yesButton").click(function(){
// del=prompt("Enter your location" );
// alert("Delivery cost is Ksh 500");
// alert("Your order will be delivered to +('del')");
// });
// $("#noButton").click(function(){
// alert("Remember to try our delivery services next time")
// });
//
// $("#ok").click(function(){
// });
// }
class Pizza {
  constructor(size, toppings, crust, price) {
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
    this.price = price;
  }
}

class Order {
  constructor(orderNumber) {
    this.orderNumber = orderNumber;
    this.pizzasOrdered = [];
    this.costOfOrder = 0;
  }

  makePizza(size, toppings, crust, price) {
    let pizza = new Pizza(size, toppings, crust, price);

    return pizza;
  }

  addPizza(pizza) {
    this.pizzasOrdered.push(pizza);
  }

  calculateCost() {
    let pizzas = this.pizzasOrdered;

    this.costOfOrder = pizzas.reduce(function (total, pizza) {
      return pizza.price + total;
    }, 0);
  }
}

$(document).ready(function () {
  $("#pizzaForm").submit(function(e){
    e.preventDefault();

    let sizeVal = $(".size").val();
    let crustVal = $(".crust").val();
    let toppings = $(".toppings").val();
    let toppingsVal = toppings.reduce(function(total, topping){
      return total + topping;
    }, 0);

    let priceOfPizza = parseInt(sizeVal) + parseInt(crustVal) + parseInt(toppingsVal);

    let order = new Order(1);
    order
      .addPizza(order
        .makePizza(sizeVal, toppingsVal, crustVal, priceOfPizza));
    order.calculateCost();

    console.log(order.costOfOrder);

  })


})
