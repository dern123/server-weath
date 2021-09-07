const express = require('express');
var cors = require('cors')
const axios = require('axios');

const app = express();

app.use(express.json())

app.use(cors())

app.post('/data', (req, res) => {
    axios.get(`http://www.metaweather.com/api/location/search?lattlong=${req.body.lattlong}`)
  .then(function (response) {
    // handle success
    res.json(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    res.status(500)
    res.json({
        'error': "metaweather api error"
    })
  })

  });
  app.listen(3000, () => console.log('Listening on port 3000.'));