var express = require('express');
var cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "nDXuLl0TlpIG3o1JkXGSoNcQos7pVh7k"


var host = 'localhost';

if(process.env.NODE_ENV === 'production') {
    host = 'db'
}



const pool = mysql.createPool({
                                host: host, 
                                user: 'root', 
                                password: '', 
                                port: 3306,
                                database: 'numer'
                              })
 var app = express();



app.use(cors());
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: true })


function verifyToken(req, res, next) {
    const token = req.headers.authorization
    console.log(token)
    if (!token) {
        return res.status(401).send('Access Denied')
    }
    else{
        try{
            let verify = jwt.verify(token,SECRET_KEY)
            console.log(verify)
            next()
        }    
        catch(err){
            res.status(400).send('Invalid Token')
        }
    }

    
}
    





app.get('/test', function (req, res, next) {
    res.json({msg: 'test'});
})


app.get('/login',urlencodedParser,function(req,res,next) {
  const token = jwt.sign({user:"phoo"},secret_key)
  res.send(token)
})


app.get('/bisection',verifyToken ,function (req, res, next) {
    pool.query("SELECT * FROM `root_of_equation` WHERE name = 'Bisection'", function (err, rows, fields) {
        let random = Math.floor(Math.random() * rows.length);
        console.log(rows[random])
        res.json(rows[random]);
    })
})


app.get('/falseposition', verifyToken, function (req, res, next) {
    pool.query("SELECT * FROM `root_of_equation` WHERE name = 'FalsePosition'", function (err, rows, fields) {
        let random = Math.floor(Math.random() * rows.length);
        console.log(rows[random])
        res.json(rows[random]);
    })
})



app.get('/newtonraphson', function (req,res,next){
    pool.query("SELECT * FROM `root_of_equation` WHERE name = 'NewtonRaphson'", function (err, rows, fields) {
        let random = Math.floor(Math.random() * rows.length);
        console.log(rows[random])
        res.json(rows[random]);
    }
    )
})

app.post("/createToken/",urlencodedParser,(req, res) => {
    let user = req.body.admin
    let password = req.body.password
    let token = jwt.sign({user, password}, SECRET_KEY)
    res.send(token)
    })



app.post("/checktoken",urlencodedParser,(req, res) => {
    let token = req.body.token
    try{
    let verify = jwt.verify(token, SECRET_KEY,)
    if(!verify){
        res.send(false)
    }
    else{
        //console.log(verify)
        res.json("true")
    }
    }
    catch(err){
        console.log(err)
        res.json(err.message)
    }
})



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(2000, function () {
    console.log('web server listening on port 2000')
})

module.exports = app; 
