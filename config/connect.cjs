//For all function
const config = require('./config.cjs')
const express = require('express')
const app = express()
const mysql = require('mysql');
const moment = require('moment');  
const connections = config.addresses();
const client = config.addressesCilent();




class connect extends config{
  
    static login(email, password,response){
        
        
        let query = `SELECT * FROM user WHERE (email = '${email}') AND (password = '${password}');`
       
        connections.getConnection((err , connections) => {
            if(err) throw err
            connections.query(query, (err, result) => {
                connections.release()
                if(!err){
                    result = result[0]
                    //console.log('result:', result.name); //For check data in table result.name is a data name from DB
                    return response.redirect(`/dashbroad/${result.name}`);
                      
                    
                }
                else{
                    console.log(err)
                    
                }


                
               
            })
           
        })
       
        
    
    }

 

}



class payactionB{
 
    inout(inout,type,thb,response,id){
        let Inout = inout 
        console.log(Inout)
        let query =  `select user.name , wallet.idwallet , ${inout}.${inout}id from user,wallet ,${inout} where user.name = "${id}" and user.idUser = wallet.idwallet;`
        connections.getConnection((err , connections) => {
            if(err) throw err
            connections.query(query,(err ,result) =>{
                connections.release();
                if(!err){
                    result = result[0]
                    result = parseInt(result.idwallet)
                    console.log(result)
                    this.addthb(result,thb,inout,type)
                    return response.redirect(`/dashbroad/${id}`);
                    
                }
             
               
                
            }) 
        })
        
        
               
    }

    addthb(id,thb,inout,type){
        let date = moment();
        let query = `insert into ${inout}(${inout}id,${inout},date,type) values ("${id}","${thb}","${date.format('YYYY-MM-DD')}","${type}");`
        connections.getConnection((err , connections) => {
            if(err) throw err
            connections.query(query,(err ,result) =>{
                
                connections.release()
            })
        })
    }
}

class summary{
     static summa(id,response){
        let query = `SELECT SUM(income) as totalincome,SUM(outcome) as totaloutcome, user.name ,  wallet.idwallet   FROM income,outcome , user  ,wallet where user.name = "${id}" and user.idUser = wallet.idwallet;`
        connections.getConnection((err , connections) => {
            if(err) throw err
            connections.query(query,(err ,result) =>{
                console.log(result[0])
                let total = result[0].totalincome - result[0].totaloutcome
                response.render("dashbroad", {name:`${result[0].name}`,income:`${result[0].totalincome}`,outcome:`${result[0].totaloutcome}`,total:`${total}`})
                connections.release()
            })
        })
            
    
         
    }
    

 

}





module.exports = {
    connect : connect,
    payactionB : payactionB,
    summary : summary,
    
    
}

