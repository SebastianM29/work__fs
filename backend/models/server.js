
const express = require('express');



class Server  {
    constructor(){
        this.app = express()
        this.port=process.env.PORT
        
        
        
        this.middlewares();
        
        this.routes();
        
    }
    //sirviendo contenido estatico
    middlewares(){
       this.app.use( express.static('public'));
    }


   
    //rutas del desarrollo
    routes(){
        this.app.use('/',require('../routes/routes'))

    }
   
 
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server is online running in port ${this.port}`)
           
        })

    }
}


module.exports = Server;