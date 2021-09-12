const express = require('express');
var cors = require('cors')
const axios = require('axios');

const app = express();

app.use(express.json())

app.use(cors())

app.post('/lattlong', (req, res) => {
  // console.log(req.body)
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
        'error': "metaweather api error lattlong"
    })
  })

  });

  app.post('/query', (req, res) => {
    console.log(req.body)
    axios.get(`http://www.metaweather.com/api/location/search?query=${req.body.query}`)
    .then(function (response) {
      console.log("response.data", response.data);
      // handle success
      res.json(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      res.status(500)
      res.json({
          'error': "metaweather api error query"
      })
    })
  
    });

    app.post('/woeid', (req, res) => {
      console.log(req.body)
      axios.get(`http://www.metaweather.com/api/location/${req.body.woed}/`)
      .then(function (response) {
        // handle success
        console.log("response.data", response.data);
        res.json(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        res.status(500)
        res.json({
            'error': "metaweather api error woeid"
        })
      })
    
      });
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => console.log('Listening on port 8080.'));