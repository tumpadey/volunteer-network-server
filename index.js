const express = require('express')

const bodyParser = require('body-parser');
const cors = require('cors');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://volunteer:volunteer123@cluster0.izwsv.mongodb.net/volunteerNetworkdb?retryWrites=true&w=majority";

const port = 5000

const app = express()
app.use(bodyParser.json());
app.use(cors());

const pass ="volunteer123";


const ObjectId = require('mongodb').ObjectId;
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true });
client.connect(err => {
  const eventCollection = client.db("volunteerNetworkdb").collection("events");
 console.log("db connected successfully")
  
  app.post('/registrationEvent', (req, res) =>{
    const selectedEvent = req.body;
    console.log(selectedEvent);
  })


  / app.post("/addEvents", (req, res) => {
        const event = req.body;
        eventCollection.insertOne(event[0])
            .then(result => {
                console.log(result.insertedCount);
                res.send(result.insertedCount)
            })

            app.get("/events", (req, res) => {
              eventCollection.find({})
                  .toArray((err, documents) => {
                      res.send(documents)
                  })
          })
            app.get("/events/:_id", (req, res) => {
              eventCollection.find({ _id: ObjectId(req.params._id) })
                  .toArray((err, documents) => {
                      res.send(documents[0])
                  })
          })
      

          
          
    })

});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port)
