const express = require('express');
const app = express();
const Datastore = require('nedb');

app.listen(5500, () =>  console.log("Server is up on 5500"));
app.use(express.json({limit: '1mb'}));

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api', (request, response) => {
  console.log('I got a request!');
  console.log(request.body);
  const data = request.body;
  database.insert(data);
  console.log(databsae);
  response.json({
    status: 'success'
  })

});
