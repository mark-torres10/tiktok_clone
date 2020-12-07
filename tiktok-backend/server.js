import express from 'express'; 
import mongoose from 'mongoose'; 

// create instance of application
const app = express(); 

// port for app to run 
const port = 9000; 

// test API, just to check that our connections work
// when using a GET request on root directory, run callback function
app.get('/', (request, response) => 
    response.status(200).send("App successfully run")
); 

// tell what port to listen for
app.listen(port, ()=> console.log(`listening on localhost:${port}`)); 




