function ConvertHandler() {

  this.getNum = function (input) {
    let result;

    const numberMatch = input.match(/^\d*\.?\d*(\/\d*\.?\d*)?/)[0];

    if (numberMatch) {
      // Check if the input contains a fraction (e.g., "3/2")
      if (numberMatch.includes('/')) {
        const numbers = numberMatch.split('/');
        result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
      } else {
        result = parseFloat(numberMatch);
        console.log(result)
      }
    } else {
      result = 1; // Default to 1 if no number is found
    }

    return isNaN(result) || result === 0 || result === Infinity ? null : result;
  };

  this.getUnit = function (input) {
    let result;

    const letters = input.match(/[a-zA-Z]+/) || [];
    const lettersString = letters.join('');

    if (lettersString !== "L" && lettersString !== "l") {
      if (["km", "mi", "gal", "lbs", "kg"].includes(lettersString.toLowerCase())) {
        result = lettersString.toLowerCase();
      } else {
        result = null;
      }
    } else {
      result = "L";  // Ensure "L" is returned in uppercase
    }

    return result;
  };

  this.getReturnUnit = function (initUnit) {
    if (initUnit === null) return null;

    let lowerUnit = initUnit.toLowerCase();
    let result;

    switch (lowerUnit) {
      case "gal":
        result = "L";
        break;
      case "l":
        result = "gal";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      default:
        result = null;
    }
    return result;
  };

  this.spellOutUnit = function (unit) {
    if (unit === null) return null;

    let result;
    switch (unit) {
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "L":
        result = "liters";  
        break;
      case "gal":
        result = "gallons";
        break;
      default:
        result = null;
    }
    return result;
  };

  this.convert = function (initNum, initUnit) {
    if (initNum === null || initUnit === null) return null;

    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let lowerUnit = initUnit.toLowerCase();
    let result;

    switch (lowerUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        result = null;
    }

    return result !== null ? Math.round(result * 100000) / 100000 : null;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    if (initNum !== null && initUnit !== null) {
      
      result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
    } else if (initNum === null && initUnit === null) {
      result = "invalid number and unit";
    } else if (initNum === null) {
      result = "invalid number";
    } else if (initUnit === null) {
      result = "invalid unit";
    }

    return result;
  };
}

module.exports = ConvertHandler;
