const express = require("express");
const app = express();
const { engine } = require("express-handlebars");

const data = [
    {
        page: "Portfolio Page",


    },
    {
        disc: "This is a dynamic page only dynamic thing is my name",


    },
    {
        name: "Created by : Irf@n",


    }
]

app.engine('handlebars', engine());

app.set('view engine', 'handlebars');

app.set('views', './views');






app.get("/portfoliopage", (req, res) => {
   
    res.render('portfoliopage', { data: data })
})

const name = (req, res) => {
    console.log(req.query);
    res.send("IRFAN")
    
   }
app.get("/about",name) 




app.listen(9800, () => {
    console.log("Server Running At Port " + process.env.PORT);
});