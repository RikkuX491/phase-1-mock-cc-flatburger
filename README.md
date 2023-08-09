# Phase 1 Mock Code Challenge: Flatburger

Flatiron's Burger Restaurant is open for business! You will be using a local API and building out the frontend for our app, Flatburger.

> To view in VSCode, right click on the README.md file and select "Open Preview".

## Setup

Run this command to get the backend started:

```sh
json-server --watch db.json
```

Test your server by visiting this route in the browser:

[http://localhost:3000/burgers](http://localhost:3000/burgers)

Then, open the `index.html` file on your browser to run the application.

Write your code in the `src/index.js` file. The base URL for your API will be
[http://localhost:3000](http://localhost:3000).

## Deliverables

As a user, I can:

1. See all of the burger names in a `div` with the id of `restaurant-menu`. Create a `span` tag with the name of the burger and add it to the `div#restaurant-menu` once you have retrieved the burger data from the server. You
   will need to make a GET request to the following endpoint to retrieve the
   burger data:

   ```txt
   GET /burgers

   Example response:
   [
      {
        "id": 1,
        "name": "Flatburger",
        "image": "./assets/food/flatburger.jpeg",
        "number_in_cart": 0
      },
      {
        "id": 2,
        "name": "Maple Bacon Burger",
        "image": "./assets/food/maple-bacon-burger.jpeg",
        "number_in_cart": 0
      }
   ]
   ```

2. When the burger in the `div#restaurant-menu` is clicked, display the burger's details in the `div#food-detail`.

3. See the first burger's details in the `div#food-detail`, including its **name, image,
   and number_in_cart** when the page loads. You can either use the burger information from your first request, or make a new request to this endpoint to get the burger's details:

   ```txt
   GET /burgers/1

   Example Response:
   {
     "id": 1,
     "name": "Flatburger",
     "image": "./assets/food/flatburger.jpeg",
     "number_in_cart": 0
   }
   ```

4. When the `form#add-to-cart-form` is submitted, add the value from the input field to the burger displayed in the `div#food-detail`. **No persistence is needed**. The number in cart should be _cumulative_. For example, if a burger currently has 7 for the number in cart, and a user add another 7 to the number in cart via the form, the number in cart displayed for the burger should increase to 14.