const config = require('./config.cjs')
const express = require('express')
const app = express()
const mysql = require('mysql');
const connections = config.addresses();

class signup{
    
    signup(){
        connections.getConnection((err,connections) => {
            if(err) throw err
        })
    }


}