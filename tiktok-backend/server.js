import express from "express"; 
import mongoose from "mongoose"; 
import Data from './data.js';  // test data

/* App config */
const app = express(); // create instance of application
const port = 9000; // port for app to run 

/* middlewares */

/* DB config */
const connection_url = "mongodb+srv://admin:Fal2MzvgArefOpOc@cluster0.apdzq.mongodb.net/tiktok?retryWrites=true&w=majority"
mongoose.connect(connection_url), {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
}; 

/* API endpoints */
// test API, just to check that our connections work
// when using a GET request on root directory, run callback function
app.get('/', (request, response) => 
    response.status(200).send("App successfully run")
);  

app.get('/v1/posts', (request, response) => 
    response.status(200).send(Data)
)

// listener
app.listen(port, ()=> console.log(`listening on localhost:${port}`)); 




