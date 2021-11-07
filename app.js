const express = require("express");
const path = require("path");
const fs = require('fs')
const pug = require('pug')
const app = express();
const port = 8000;

// For serving static files
app.use('/static', express.static('static'))
app.use(express.urlencoded())


// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))
 
// Our pug demo endpoint 
app.get("/home", (req, res)=>{ 
    res.status(200).render('home', { title: 'Hey Harry', message: 'Hello there and thanks for telling me how to use pubG!' })
});

app.get("/", (req, res)=>{ 
    const params = { }
    res.status(200).render('home.pug' , params)
});
app.get("/about", (req, res)=>{ 
    const params = { }
    res.status(200).render('about.pug' , params)
});


app.get("/contact", (req, res)=>{ 
    const params = { }
    res.status(200).render('contact.pug' , params)
});


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});