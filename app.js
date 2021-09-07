const express = require('express');
var cors = require('cors')
const axios = require('axios');

const app = express();

app.use(express.json())

app.use(cors())

app.post('/data', (req, res) => {
  console.log(req.body)
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
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => console.log('Listening on port 8080.'));