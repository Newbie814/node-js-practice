const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const url = process.env.MONGO_URI;

const client = new MongoClient(url, { useNewUrlParser: true });

const router = express.Router();

const locationStorage = {
  locations: [],
};

router.post('add-location', (req, res, next) => {
  // const id = Math.random();
  client.connect(function (err, client) {
    const db = client.db('locations');

    // Insert a single document
    db.collection('user-locations').insertOne(
      {
        address: req.body.address,
        coords: { lat: req.body.lat, lng: req.body.lng },
      },
      function (err, r) {
        // if (err) {}
        console.log(r);
        res.json({ message: 'Stored location!', locId: r.insertedId });
      }
    );
  });
  // locationStorage.locations.push({
  //   id: id,
  //   addresss: req.body.address,
  //   coords: { lat: req.body.lat, lng: req.body.lng },
  // });
  // res.json({ message: 'Stored Location', locId: id });
});

router.get('/location/:lid', (req, res, next) => {
  const locationId = req.params.lid;

  client.connect(function (err, client) {
    const db = client.db('locations');

    // Insert a single document
    db.collection('user-locations').findOne(
      {
        _id: new mongodb.ObjectId(locationId),
      },
      function (err, doc) {
        // if (err) {}
        if (!doc) {
          return res.status(404).json({ message: 'Not found!' });
        }
        res.json({ address: doc.address, coordinates: doc.coords });
      }
    );
  });
});

console.log('hello');
module.exports = router;
