'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', (req, res) => {
    const input = req.query.input;

    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let returnNum = convertHandler.convert(initNum, initUnit);
    let string = convertHandler.getString(initNum, convertHandler.spellOutUnit(initUnit), returnNum, convertHandler.spellOutUnit(returnUnit));

    if (initNum === null && initUnit === null) {
      res.json("invalid number and unit");
    } else if (initNum === null) {
      res.json("invalid number");
    } else if (initUnit === null) {
      res.json("invalid unit" );
    } else {
      const result = {
        "initNum": initNum,
        "initUnit": initUnit,
        "returnNum": returnNum,
        "returnUnit": returnUnit,
        "string": string
      };

      res.json(result);
    }
  });

};
