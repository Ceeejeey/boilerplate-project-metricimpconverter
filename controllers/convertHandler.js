function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    
    const numberMatch = input.match(/^\d*\.?\d*\/?\d*\.?\d*/)[0];
    result = numberMatch ? eval(numberMatch) : 1; // Evaluate fractions, e.g., "3/2"

    return result;

    
  };
  
  this.getUnit = function(input) {
    let result;

    const letters = input.match(/[a-zA-Z]/g) || [];
    const lettersString = letters.join('');
    if(lettersString != "L"){
      result = lettersString.toLowerCase();
    }
    

    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    if(initUnit == "gal" || initUnit == "L"){
      if(initUnit == "gal"){
        result = "L";
      }
      else{
        result = "gal"
      }
    }
    if(initUnit == "mi" || initUnit == "km"){
      if(initUnit == "mi"){
        result = "km";
      }
      else{
        result = "mi"
      }
    }
    if(initUnit == "lbs" || initUnit == "kg"){
      if(initUnit == "lbs"){
        result = "kg";
      }
      else{
        result = "lbs"
      }
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch (unit) {
      case "mi":
        result = "miles"
        break;
      case "km":
        result = "kilometers"
        break;
      case "kg":
        result = "kilograms"
        break;
      case "lbs":
        result = "pounds"
        break;
      case "L":
        result = "leters"
        break;
      case "gal":
        result = "gallons"
        break;
    
      default:
        break;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    if (initUnit == "gal" || initUnit == "L") {

      if (initUnit == "gal") {
        result = initNum * galToL;
      }
      else{
        result = initNum / galToL;
      }
    }
    if (initUnit == "lbs" || initUnit == "kg") {

      if (initUnit == "lbs") {
        result = initNum * lbsToKg;
      }
      else{
        result = initNum / lbsToKg;
      }
    }
    if (initUnit == "mi" || initUnit == "km") {

      if (initUnit == "mi") {
        result = initNum * miToKm;
      }
      else{
        result = initNum / miToKm;
      }
      
    }
    
    return Math.round(result * 100000) / 100000;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
      result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`
    return result;
  };
  
}

module.exports = ConvertHandler;
