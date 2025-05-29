const express = require('express');
const app = express();
const hbs = require('hbs')


hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
hbs.registerHelper('getCurrentYear', () =>{
    return new Date().getFullYear()
})

// for uppercase the template engine
hbs.registerHelper('toUpper', (text) =>{
    return text.toUpperCase();
})

app.get('/', (req, res) => {
    res.render('home.hbs',{
        Page:"Home Page",
        currentYear: new Date().getFullYear()
    })
})

app.get('/about',(req, res)=>{
    res.render('about.hbs',{ 
        pageTitle: 'Template Engine',
    });
})

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});