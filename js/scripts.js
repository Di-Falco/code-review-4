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
  
  if (this.size === 48) {
    for (let i = 0; i < this.toppings.length; i++) {
      this.price += 3;
    }
  } else {
    for (let i = 2; i < this.toppings.length; i++) {
      this.price += 1.5;
    }
  }
};

const pizza1 = new Pizza(["pepperoni", "sausage"], 10);
const pizza2 = new Pizza(["pepperoni", "sausage", "mushrooms", "olives"], 10);
pizza1.pizzaPrice();
pizza2.pizzaPrice();

$(document).ready(function(){


});