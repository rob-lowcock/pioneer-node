var express = require('express');
const { Client } = require('pg');
var router = express.Router();
const socketapi = require("../socketapi");

const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };

/* GET users listing. */
router.get('/', asyncMiddleware(async function(req, res, next) {
  const client = new Client();
  await client.connect();

  const dbCall = await client.query('SELECT id, title, col as column FROM retrocards WHERE archived=FALSE');
  var output = dbCall.rows;
  await client.end();

  res.json(output);
}));

router.get('/:cardId', asyncMiddleware(async function(req, res, next) {
  const client = new Client();
  await client.connect();

  const dbCall = await client.query('SELECT id, title, col as column FROM retrocards WHERE id=$1', [req.params.cardId]);
  var output = dbCall.rows[0];
  await client.end();

  res.json(output);
}));

router.post('/', asyncMiddleware(async function(req, res, next) {
  const client = new Client();
  await client.connect();

  const dbCall = await client.query('INSERT INTO retrocards (title, col) VALUES ($1, $2) RETURNING (id)', [req.body.title, req.body.column]);
  var output = dbCall.rows;
  await client.end();

  outputObj = {
    id: output[0].id,
    title: req.body.title,
    column: parseInt(req.body.column, 10),
  }

  socketapi.io.emit("newCard", outputObj)

  res.json(outputObj);
}));

module.exports = router;
