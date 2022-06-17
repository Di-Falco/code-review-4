

Describe Pizza()

Test: "should return a pizza object with toppings and size"
Code: const pizza = new Pizza(["pepperoni", "sausage"], 16);
Expected Output: Pizza { toppings: ["pepperoni", "sausage"], size: 16 }

Describe Pizza.prototype.pizzaPrice()

Test: "should calculate custome price based on pizza size"
Code: 
const pizza1 = new Pizza(["pepperoni", "sausage"], 10);
const pizza2 = new Pizza(["pepperoni", "sausage"], 16);
pizza1.pizzaPrice();
pizza2.pizzaPrice();
Expected Output:
Pizza { toppings: ["pepperoni", "sausage"], size: 10, price: 12 }
Pizza { toppings: ["pepperoni", "sausage"], size: 16, price: 18 }


