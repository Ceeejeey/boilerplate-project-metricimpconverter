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
     let unit = convertHandler.spellOutUnit(initUnit);
     let returnNum = convertHandler.convert(initNum,initUnit);
     let string = convertHandler.getString(initNum,initUnit,returnNum,unit);

     const result = {

      "initNum": initNum,
      "initUnit": initUnit,
      "returnNum": returnNum,
      "returnUnit": returnUnit,
      "string": string

     }

     res.json(result);
  })

};
