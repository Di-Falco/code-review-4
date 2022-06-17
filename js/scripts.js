
// Business Logic for Order —————————

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

// Business Logic for Pizza ————————

function Pizza (toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}

Pizza.prototype.pizzaPrice = function(){
  switch(this.size){
    case(10):
      this.price = 12;
      break;
    case(12):
      this.price = 14;
      break;
    case(16):
      this.price = 18;
      break;
    case(18):
      this.price = 20;
      break;
    case(48):
      this.price = 60;
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
  if (this.toppings.length === 0) {
    this.toppings.push("Cheese");
  }
  $("#order-menu").append("<strong>Item #" + this.id + ":<strong>&ensp;");
  $("#order-menu").append("<br>Toppings:&ensp;");
  for (let i = 0; i < this.toppings.length; i++){
    $("#order-menu").append(this.toppings[i] + "&ensp;");
  }
  $("#order-menu").append("<br>Size:&ensp;" + this.size + "\"");
  $("#order-menu").append("<br>Cost:&ensp;$" + this.price.toFixed(2));
  $("#order-menu").append("<br>");
};

// Business Logic for Side —————————

function Side(sideItem, price){
  this.sideItem = sideItem;
  this.price = price;
  this.quantity = 0;
  this.id = 0;
}

Side.prototype.display = function() {
  this.quantity++;
  $("#order-menu").append("<br><strong>Item #" + this.id + ":<strong>&ensp;");
  $("#order-menu").append("<br>Side:&ensp;" + this.sideItem);
  $("#order-menu").append("<br>Cost:&ensp;$" + this.price.toFixed(2));
  $("#order-menu").append("<br>Quantity:&ensp;" + this.quantity);
};

// UI Logic —————————

$(document).ready(function(){
  let order = new Order;
  const corleone = new Pizza(["Pepperoni", "Anchovies", "Pepperoncinis"], 16, 24);
  const soprano = new Pizza(["Mortadell", "Muzzarell", "Gabagool"], 16, 24);
  const goodfella = new Pizza(["Chicken", "Bell Peppers", "Olives", "Basil"], 16, 26);
  const paradiso = new Pizza(["Garlic", "Tomatoes", "Basil", "Mozzarella"], 16, 26);
  const pies = [corleone, soprano, goodfella, paradiso];

  const breadsticks = new Side("Breadsticks", 7.50);
  const salad = new Side("Caesar Salad", 6);
  const wings = new Side("6 Wings", 10);
  const soda = new Side("1 Liter Soda", 4.50);
  const beer = new Side("6 Pack Beer", 11.50);
  const wine = new Side("Bottle Wine", 14.50);

  $("form#custom-pizza").submit(function(event) {
    event.preventDefault();
    let toppings = [];
      $("input:checkbox[name=toppings]:checked").each(function(index) {
        toppings[index] = $(this).val();
      });
    const size = parseInt($("input:radio[name=size]:checked").val());

    let pizza = new Pizza(toppings, size);
    pizza.pizzaPrice();
    order.addItem(pizza);
    pizza.display();
    $("#order-total").html("<strong>Order Total:&ensp;$" + order.price.toFixed(2) + "</strong>");
  });

  $("form#specialty-pies").submit(function(event){
    event.preventDefault();
    const pie = parseInt($("input:radio[name=pies]:checked").val());
    order.addItem(pies[pie]);
    pies[pie].display();
    $("#order-total").html("<strong>Order Total:&ensp;$" + order.price.toFixed(2) + "</strong>");
  });

  $("form#sides").submit(function(event) {
    event.preventDefault();
    const sideMenu = [breadsticks, salad, wings, soda, beer, wine];
    let sideOrder = [0,0,0,0,0,0];
      $("input:checkbox[name=sides]").each(function(index) {
        if($(this).is(":checked")) {
          sideOrder[index] = parseInt($(this).val());
        }
      });

    for(let i = 0; i < sideMenu.length; i++){
      if (sideOrder[i] !== 0){
        order.addItem(sideMenu[i]);
        sideMenu[i].display();
      }
    }
  });

  $("#order-total").html("<strong>Order Total:&ensp;$" + order.price.toFixed(2) + "</strong>");

});