// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// //event listener
// emitter.on('bellRing', function(data){
//     console.log("we need to run!", data);
// } );


// //raise an event
// emitter.emit('bellRing', "value");


const School = require('./school');

const obj = new School();

obj.on("bell Ring", ({name, role})=>{
    console.log("we need to know ", name,"is a", role);
})

obj.startedPeriod();                                                  