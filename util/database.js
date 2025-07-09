const e = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {

  MongoClient.connect('mongodb+srv://sahilmane:mh14jt4266@cluster0.16wovuc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(client => {
      console.log('Connected to MongoDB');
      callback(client);
    })

    .catch(err => {
      console.log('Database connection failed:', err);
    });
};

module.exports = mongoConnect;