import express from "express"; 
import mongoose from "mongoose"; 
import Data from './data.js';  // test data
import Videos from './dbModel.js'; 

/* App config */
const app = express(); // create instance of application
const port = 9000; // port for app to run 

/* middlewares */
app.use(express.json()); // passes response as a JSON object
app.use((request, response, next) => {
    response.setHeaders('Access-Control-Allow-Origin', '*'), // not to be used in production
    response.setHeaders('Access-Control-Allow-Headers', '*'),
    next()
}); 

/* DB config */
const connection_url = "mongodb+srv://admin:Fal2MzvgArefOpOc@cluster0.apdzq.mongodb.net/tiktok?retryWrites=true&w=majority"
mongoose.connect(connection_url, {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
}); 

/* API endpoints */

// test API, just to check that our connections work
app.get('/', (request, response) => 
    response.status(200).send("App successfully run")
);  

// get data in DB
app.get('/v1/posts', (request, response) => 
    response.status(200).send(Data)
);

// posting data to our DB
app.post('/v2/posts', (request, response) => {
    // store our request data in var
    const dbVideos = request.body
    // create db entry
    Videos.create(dbVideos, (err, data) => {
        if(err) {
            response.status(500).send(err)
        } else {
            response.status(201).send(data)
        }
    })
});

// get data from mongoDB
app.get('/v2/posts', (request, response) => {
    Videos.find((err, data) => {
        if(err) {
            response.status(500).send(err)
        } else {
            response.status(200).send(data)
        }
    });
});

// listener
app.listen(port, ()=> console.log(`listening on localhost:${port}`)); 




