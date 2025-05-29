const express = require('express')

const router = express.Router();

// const loggerWrapper = (options) =>
//     function (req, res, next){
//         if (options.log){
//             console.log("router middleWare for error handliong is working correctly");
//             next()
//         } else {
//             throw new Error("faild to log");
//         }
//     }

// router.use(loggerWrapper({log: true}));

router.get('/',(req, res)=>{
    res.send('Birds home page')
})
router.get('/about',(req, res)=>{
    res.send('About blog')
})
router.get('/blogpost/:varible',(req, res)=>{
    res.send(`Fetch the blogpost for ${req.params.varible}`)
})

// const errorMiddleware = (err, req, res, next) => {
//     console.log(err.message);
//     res.status(500).send('There was a server side error');
// }

// router.use(errorMiddleware);


module.exports = router