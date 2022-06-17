function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

Pizza.prototype.pizzaPrice = function(){
  switch(this.size){
    case(10):
      this.price += 12;
      break;
    case(12):
      this.price += 14;
      break;
    case(16):
      this.price += 18;
      break;
    case(18):
      this.price += 20;
      break;
    case(48):
      this.price += 60;
      break;
  };
};

const pizza1 = new Pizza(["pepperoni", "sausage"], 10);
const pizza2 = new Pizza(["pepperoni", "sausage"], 16);
pizza1.pizzaPrice();
pizza2.pizzaPrice();

$(document).ready(function(){


});