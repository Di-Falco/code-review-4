function Order () {
  this.items = {};
  this.currentId = 0;
  this.price = 0;
}

Order.prototype.addItem = function(item) {
  item.id = this.assignId();
  this.items[item.id] = item;
  this.price += item.price;
};
Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};
Order.prototype.deleteItem = function(id) {
  this.price -= items[id].price;
  delete this.items[id];
};

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

Pizza.prototype.display = function() {
  $("#order-menu").append("<strong>Item #" + this.id + ":<strong>");
  $("#order-menu").append("Toppings:&ensp;");
  for (let i = 0; i < this.toppings.length; i++){
    $("#order-menu").append(this.toppings[i] + "&ensp;");
  }
  $("#order-menu").append("<br>Size:&ensp;" + this.size + "\"");
  $("#order-menu").append("<br>Cost:&ensp;$" + this.price.toFixed(2));
  $("#order-menu").append("<br>");
};

$(document).ready(function(){
  let order = new Order;
  $("form#custom-pizza").submit(function(event) {
    event.preventDefault();
    const toppings = [];
      $("input:checkbox[name=toppings]:checked").each(function(index) {
        toppings[index] = $(this).val();
      });
    const size = parseInt($("input:radio[name=size]:checked").val());

    let pizza = new Pizza(toppings, size);
    pizza.pizzaPrice();
    order.addItem(pizza);
    pizza.display();
    console.log(pizza);
    console.log(order);
  });

});