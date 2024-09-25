//Write another function convertGBPtoUSD that takes in a specified amount in £, and converts it to $ using a given exchange rate. 
// It should behave in a very similar way to the previous function.

function convertGBPtoUSD(amount) {
    let oneUsd = 1.28;
    return amount * oneUsd;
  }
  
  console.log(convertGBPtoUSD(2));