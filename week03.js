const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.6ac4l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    if (err){
        console.log(err.message)
        return
      }
      console.log("Connected to mongodb");
      
      client.db('MyDatabase').collection('people').insertOne({
        name: 'Estrella Wolff',
        city: '苏口市',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/535.jpg',
        pass: '$2a$10$f9dpCqean4wk31u.yGuMhuEO9WlrvUG1lV027okqCh5zM2lvKrHmC',
      }).then(result => {
        console.log(result);
     // const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //client.close();
//client.db('sample_training').collection('inspections').findOne().then(result => {
//console.log(result);
 // })
});
});