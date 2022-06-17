# Pepperoni Tony's

#### By Anthony DiFalco

#### Webpage for food orders from a sketchy Italian restaraunt

## Technologies Used

* Javascript
* JQuery
* HTML
* CSS
* Bootstrap

## Description

This project is only one html file. On the webpage, there are three forms:
1. Ordering pre-made pizzas
2. Custom ordering pizzas
3. Including sides and beverages

The first form gives 4 options for specialty pizzas, which are described in the menu at the top of the page. Each of these has preset values and you can only select one at a time, since the form uses radio buttons.

The second form allows you to select any numnber of seven different toppings, and one of five sizes. the toppings are priced by quantity and the first two are free. each size has a basic cost to it.

The third form has checkboxes for three sides and three beverage options. any number of these can be selected but to order multiple items you have to submit the form more than once.

Every time a form is submitted, the order field at the bottom of the page updates with item names, prices, and quantity. It tallies the order total at the bottom. Currently the "complete order" button does nothing, but seeing as this is a mock website, all it could really do is steal your credit card information.

## Setup/Installation Requirements

* Clone this repository from Github:
```git clone https://github.com/Di-Falco/code-review-4```
* Open index.html in your web browser (chrome recommended)
* Alternatively you can visit the Github pages at this link: https://di-falco.github.io/code-review-4/

## Known Bugs

* Complete Order button doesn't have a purpose yet.

## Tests

<strong>Describe Pizza()</strong><br>

>Test: "should return a pizza object with toppings and size"<br>
>Code: <br>
```const pizza = new Pizza(["pepperoni", "sausage"], 16);```<br>
>Expected Output: Pizza { toppings: ["pepperoni", "sausage"], size: 16 }<br>

<strong>Describe Pizza.prototype.pizzaPrice()<strong><br>

>Test: "should calculate custome price based on pizza size"<br>
>Code: <br>
>```const pizza1 = new Pizza(["pepperoni", "sausage"], 10);```<br>
>```const pizza2 = new Pizza(["pepperoni", "sausage"], 16);```<br>
>```pizza1.pizzaPrice();```<br>
>```pizza2.pizzaPrice();```<br>
>Expected Output:<br>
>Pizza { toppings: ["pepperoni", "sausage"], size: 10, price: 12 }<br>
>Pizza { toppings: ["pepperoni", "sausage"], size: 16, price: 18 }<br>

>Test: "should increase price by 1.50 for each extra topping beyond the first two"<br>
>Code:<br>
>```const pizza1 = new Pizza(["pepperoni", "sausage"], 10);```<br>
>```const pizza2 = new Pizza(["pepperoni", "sausage", "mushrooms", "olives"], 10);```<br>
>```pizza1.pizzaPrice();```<br>
>```pizza2.pizzaPrice();```<br>
>Expected Output: <br>
>Pizza { toppings: ["pepperoni", "sausage"], size: 10, price: 12 }<br>
>Pizza { toppings: ["pepperoni", "sausage", "mushrooms", "olives"], size: 10, price: 15 }<br>

<strong>Describe Order()</strong><br>

>Test: "should store each pizza entered through the form and keep track of total price"<br>
>Code:<br>
>```let order = new Order;```<br>
>```const pizza1 = new Pizza(["pepperoni", "sausage"], 16, 18);```<br>
>```order.addItem(pizza1);```<br>
>```const pizza2 = new Pizza(["pepperoni", "sausage", "mushrooms", "olives"], 10, 15);```<br>
>```order.addItem(pizza2);```<br>
>Expected Output: Order { items: {1: Pizza, 2: Pizza} currentId: 2, price: 33}<br>

<strong>Describe Pizza.prototype.display()</strong><br>

>Test: "should output information for each pizza ordered"<br>
>Code:<br>
>```const pizza1 = new Pizza(["pepperoni", "sausage", "olives"], 16, 18);```<br>
>```pizza1.display();```<br>
>Expected Output:<br>
>Toppings:  Pepperoni  Sausage  Olives<br>
>Size: 16"<br>
>Cost: $18.50<br>

>Test: "should display "Cheese" if no toppings are selected"<br>
>Code:<br>
>```const pizza1 = new Pizza([], 12, 14);```<br>
>```pizza1.display();```<br>
>Expected Output:<br>
>Toppings: Cheese<br>
>Size: 12"<br>
>Price: $14.00<br>

<strong>Describe Side()</strong><br>

>Test: "should store name and price values for each side menu option"<br>
>Code:<br>
>```const breadsticks = new Side("Breadsticks", 7.50);```<br>
>```console.log(breadsticks);```<br>
>Expected Output:<br>
>Side { sideItem: "Breadsticks", price: 7.50 }<br>

<strong>Describe Side.prototype.display()</strong><br>

>Test: "should display item number, name, cost and quantity in the order menu"<br>
>Code:<br>
>```const breadsticks = new Side("Breadsticks", 7.50);```<br>
>```breadsticks.display();```<br>
>Expected Output:<br>
>Item #1:<br>
>Side: Breadsticks<br>
>Cost: $7.50<br>
>Quantity: 1<br>

>Test: "should update item quantities if the same item is selected a second time"<br>
>Code:<br>
>```const breadsticks = new Side("Breadsticks", 7.50);```<br>
>```breadsticks.display();```<br>
>```breadsticks.display();```<br>
>Expected Output:<br>
>Item #1:<br>
>Side: Breadsticks<br>
>Cost: $7.50<br>
>Quantity: 2<br>

## License

I can be reached at aodifalco@gmail.com

Copyright (c) June 17, 2022 – Anthony DiFalco

