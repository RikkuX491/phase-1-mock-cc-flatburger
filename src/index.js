// Your code here

const restaurantMenu = document.getElementById('restaurant-menu')

function addBurgerNameToMenu(burger){
    // Deliverable # 1
    const spanTag = document.createElement('span')
    spanTag.textContent = burger.name
    restaurantMenu.appendChild(spanTag)

    // Deliverable # 2
    spanTag.addEventListener('click', () => {
        displayBurgerDetails(burger)
    })
}

function displayBurgerDetails(burger){
    const burgerName = document.getElementById('name')
    burgerName.textContent = burger.name
    const burgerImage = document.getElementById('image')
    burgerImage.src = burger.image
    const numberInCartCount = document.getElementById('number-in-cart-count')
    numberInCartCount.textContent = burger.number_in_cart
}

fetch('http://localhost:3000/burgers')
.then(response => response.json())
.then(burgers => {
    burgers.forEach(burger => {
        addBurgerNameToMenu(burger)
    })

    // Deliverable # 3
    // displayBurgerDetails(burgers[0])
})

fetch('http://localhost:3000/burgers/1')
.then(response => response.json())
.then(burger => {
    displayBurgerDetails(burger)
})

const addToCartForm = document.getElementById('add-to-cart-form')
addToCartForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const numberInCartCount = document.getElementById('number-in-cart-count')
    const numberToAdd = document.getElementById('number-to-add')
    numberInCartCount.textContent = Number(numberInCartCount.textContent) + Number(numberToAdd.value)
})