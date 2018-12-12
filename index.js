function produceDrivingRange(range) {
  return function(startPoint, endPoint) {
    let start = parseInt(startPoint);
    let end = parseInt(endPoint);
    let distance = Math.abs(end - start);
    let difference = range - distance;
    
    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(tipMultiplier) {
    return tip * tipMultiplier;
  };
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}

