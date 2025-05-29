// const addF = require("./add.js")

// console.log(addF(1, 2));





// const superHero = require("./add")
// console.log(superHero.getName())
// superHero.setName("Superman")
// console.log(superHero.getName())





const math = require("./add")


// console.log(math.add(5, 2));
// console.log(math.subtract(5, 2));


const {add, subtract} = math;
console.log(add(5, 2));
console.log(subtract(5, 2));

