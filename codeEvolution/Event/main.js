// const EventEmitter = require("events")

// const emitter = new EventEmitter()

// emitter.on("order-pizza", (size, topping)=>{
//     console.log(`Order received! Baking a ${size} pizza with ${topping}`)
// })

// emitter.on("order-pizza", (size)=>{
//     if(size == "large"){
//         console.log("Serving complimentary drink")
//     }
// })

// console.log("Do work before event occours in the system")
// emitter.emit("order-pizza", "large", "mushroom")







const pizzaShop = require("./pizzaShop")
const drinkMachine = require("./drinkMachine")

const pizzaShop1 = new pizzaShop();
const drinkMachine1 = new drinkMachine();

pizzaShop1.on("order", (size, topping) => {
    console.log(`Order received! Baking a ${size} pizza with ${topping}`)
    drinkMachine1.serveDrink(size)
})

pizzaShop1.order("large", "mushroom");
pizzaShop1.displayOrderNumber();