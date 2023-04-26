# Flatburger

Flatiron's Burger Restaurant is open for business! You will be building out an application, Flatburger, that allows a user to purchase burgers from the restaurant.

## Setup

Run this command to get the backend started:

```console
$ json-server --watch db.json
```

Test your server by visiting this route in the browser:

[http://localhost:3000/burgers](http://localhost:3000/burgers)

Then, open the `index.html` file on your browser to run the application.

Write your code in the `src/index.js` file. The base URL for your API will be
[http://localhost:3000](http://localhost:3000).

## Core Deliverables

As a user, I can:

1. See the first burger's details, including its **name, image,
   description, and available burgers** when the page loads. The number of
   available burgers will need to be derived by subtracting the number of
   `burgers_sold` from the `maximum_number_of_burgers`. You will need to make a GET
   request to the following endpoint to retrieve the burger data:

   ```txt
   GET /burgers/1

   Example Response:
   {
     "id": 1,
     "name": "Flatburger",
     "image": "./assets/food/flatburger.jpeg",
     "description": "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!",
     "maximum_number_of_burgers": 50,
     "burgers_sold": 45
   }
   ```

2. See a menu of all burgers in the `div#restaurant-menu`
   element when the page loads. There is a
   placeholder `img` in the `div#restaurant-menu` element that is hardcoded in the HTML —
   feel free to remove that element by editing the HTML file directly, or use
   JavaScript to remove the placeholder element before populating the list. You
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
        "description": "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!",
        "maximum_number_of_burgers": 50,
        "burgers_sold": 45
      },
      {
        "id": 2,
        "name": "Maple Bacon Burger",
        "image": "./assets/food/maple-bacon-burger.jpeg",
        "description": "A great option for a breakfast burger or a great option for brunch if you're hungry enough to eat 2 of these burgers!",
        "maximum_number_of_burgers": 44,
        "burgers_sold": 12
      }
   ]
   ```

3. Buy a burger. After clicking the "Buy Burger" button, I should
   see the number of available burgers decreasing on the frontend. I should not
   be able to buy a burger if the burger is sold out (if there are 0 burgers
   available). **No persistence is needed for this feature**.