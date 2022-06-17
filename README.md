

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

Describe Order()

Test: "should store each pizza entered through the form and keep track of total price"
Code:
let order = new Order;
const pizza1 = new Pizza(["pepperoni", "sausage"], 16, 18);
order.addItem(pizza1);
const pizza2 = new Pizza(["pepperoni", "sausage", "mushrooms", "olives"], 10, 15);
order.addItem(pizza2);
Expected Output: Order { items: {1: Pizza, 2: Pizza} currentId: 2, price: 33}

Describe Pizza.prototype.display()

Test: "should output information for each pizza ordered"
Code:
const pizza1 = new Pizza(["pepperoni", "sausage", "olives"], 16, 18);
pizza1.display();
Expected Output:
Toppings:  Pepperoni  Sausage  Olives
Size: 16"
Cost: $18.50

Test: "should display "Cheese" if no toppings are selected"
Code:
const pizza1 = new Pizza([], 12, 14);
pizza1.display();
Expected Output:
Toppings: Cheese
Size: 12"
Price: $14.00

Describe Side()

Test: "should store name and price values for each side menu option"
Code:
const breadsticks = new Side("Breadsticks", 7.50);
console.log(breadsticks);
Expected Output:
Side { sideItem: "Breadsticks", price: 7.50 }

Describe Side.prototype.display()

Test: "should display item number, name, cost and quantity in the order menu"
Code:
const breadsticks = new Side("Breadsticks", 7.50);
breadsticks.display();
Expected Output:
Item #1:
Side: Breadsticks
Cost: $7.50
Quantity: 1

Test: "should update item quantities if the same item is selected a second time"
Code:
const breadsticks = new Side("Breadsticks", 7.50);
breadsticks.display();
breadsticks.display();
Expected Output:
Item #1:
Side: Breadsticks
Cost: $7.50
Quantity: 2