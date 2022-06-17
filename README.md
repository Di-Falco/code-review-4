

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

Test: "should increase price by 1.50 for each extra topping beyond the first two"
Code:
const pizza1 = new Pizza(["pepperoni", "sausage"], 10);
const pizza2 = new Pizza(["pepperoni", "sausage", "mushrooms", "olives"], 10);
pizza1.pizzaPrice();
pizza2.pizzaPrice();
Expected Output: 
Pizza { toppings: ["pepperoni", "sausage"], size: 10, price: 12 }
Pizza { toppings: ["pepperoni", "sausage", "mushrooms", "olives"], size: 10, price: 15 }


