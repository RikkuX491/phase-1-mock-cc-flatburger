const name = document.getElementById('name')
const image = document.getElementById('image')
const description = document.getElementById('burger-info')
const burgerNumElement = document.getElementById('burger-num')
let numOfBurgers
const restaurantMenu = document.getElementById('restaurant-menu')

// Deliverable # 1
fetch('http://localhost:3000/burgers/1')
.then(response => response.json())
.then(burger => {
    name.textContent = burger.name
    image.src = burger.image
    description.textContent = burger.description
    numOfBurgers = burger.maximum_number_of_burgers - burger.burgers_sold
    burgerNumElement.textContent = numOfBurgers
})

// Deliverable # 2
fetch('http://localhost:3000/burgers')
.then(response => response.json())
.then(burgers => {
    burgers.forEach(burger => {
        const newImage = document.createElement('img')
        newImage.src = burger.image
        restaurantMenu.append(newImage)
    })
})

// Deliverable # 3
const buyBurgerButton = document.getElementById('buy-burger')
buyBurgerButton.addEventListener('click', () => {
    if(numOfBurgers > 0){
        numOfBurgers--
        burgerNumElement.textContent = numOfBurgers
    }
})