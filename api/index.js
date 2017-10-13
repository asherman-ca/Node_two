// import data from '../src/components/core/testData';
import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
  // raises error if needed 
  assert.equal(null, err);
  mdb = db;
});

const router = express.Router();

export default router;
