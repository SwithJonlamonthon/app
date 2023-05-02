const express = require('express')
const app = express()
const mysql = require('mysql');
const sql = require('./config/connect.cjs') //Some action 
const db = require('./config/config.cjs') //Some settings DB
const ejs = require('ejs')
const bodyParser = require('body-parser');
require('dotenv').config();
app.use('/assets', express.static('assets')) // for set middleware
app.use(bodyParser.urlencoded({extended: false})); // create application/x-www-form-urlencoded parser
app.use(bodyParser.json());
var income;
var getId;


app.set('view engine', 'ejs')

//http://localhost:8080/
app.get('/', (req, res) => {
    res.render("index")
  
})
//http://localhost:8080/login
app.get('/login', (req, res) => {
    res.render("login")

})
app.get('/signup', (req, res) => {
    res.render("signup")

})

app.get('/dashbroad/:id', (req, res) => {
    console.log(req.params.id)
    sql.summary.summa(req.params.id,res)
    //console.log(sql.summary.getincome());

    
    
    //res.render("dashbroad", {name:`${req.params.id}`})
   
    

})

app.get('/dashbroad/:id/inout', (req, res) => {
    
    getId =req.params.id
    res.render("inout", {name1:getId});
   

})

app.post('/dashbroad/:id/inout', (req, res) => {
    /*
    console.log(req.body.inout)
    console.log(req.body.type)
    console.log(req.body.thb)
    */
   console.log(getId)
    let ob2 = new sql.payactionB
    ob2.inout(req.body.inout,req.body.type,req.body.thb,res,getId);
    

})







app.post('/login', (req, res) => {
    sql.connect.login(req.body.email,req.body.password,res);
  
   
    
});


app.listen(db.port, 'localhost', (req, res) => {
    console.log("listening on port " + db.port);
})
