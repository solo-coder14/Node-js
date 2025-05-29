const EventEmitter = require('events')

class School extends EventEmitter{
    startedPeriod(){
        console.log("class started");

        setTimeout(()=>{
            this.emit('bell Ring',{
                name: "Woafi",
                role: "Programmer",
            }, 2000);
        })
    }
}

module.exports = School;