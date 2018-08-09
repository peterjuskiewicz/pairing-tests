const results = "Cardiff West, 11014, C, 17803, L, 4923, UKIPs, 2069, LD\n" +
  "Islington South & Finsbury, 22547, L, 9389, C, 4829, LD, 3375, UKIP, 3371, G, 309, Ind";

// This program will read the text and create array of Constituency objects to modify
// data and return it in standard format. It has simple validation to check for party names

class Constituency{
  constructor(name){
    this.constituencyName = name;
    this.conservative = 0;
    this.labour = 0;
    this.ukip = 0;
    this.libdem = 0;
    this.green = 0;
    this.independent = 0;
    this.snp = 0;
  }
  get total(){
    let sum = this.conservative + this.labour + this.ukip + this.libdem + this.green + this.independent + this.snp;
    return sum;
  }

  get conservativePercentage(){
    return Number.parseFloat(this.conservative * 100 / this.total).toFixed(2)
  }
  get labourPercentage(){
    return Number.parseFloat(this.labour * 100 / this.total).toFixed(2)
  }
  get ukipPercentage(){
    return Number.parseFloat(this.ukip * 100 / this.total).toFixed(2)
  }
  get libdemPercentage(){
    return Number.parseFloat(this.libdem * 100 / this.total).toFixed(2)
  }
  get greenPercentage(){
    return Number.parseFloat(this.green * 100 / this.total).toFixed(2)
  }
  get independentPercentage(){
    return Number.parseFloat(this.independent * 100 / this.total).toFixed(2)
  }
  get snpPercentage(){
    return Number.parseFloat(this.snp * 100 / this.total).toFixed(2)
  }
}


// function to be used with map to return array of objects

const createConstituency = (string) => {

  // Regular expression to match string for correctness
  // Check RegExp - to implement more advanced validation
  // const re = new RegExp('^[A-Z][^,]*(,\\s\\d*,\\s(LD|C|L|UKIP|G|Ind|SNP))*', 'g');

    let arr;

    if(typeof(string) === 'string'){
      arr = string.split(',');
    }
    else{
      console.log('invalid data type');
    }

    let area = new Constituency(arr[0]);

    for(let i = 2; i < arr.length; i = i + 2){
      if(arr[i].trim() === 'C'){
        area.conservative = parseInt(arr[i - 1].trim(), 10);
      }else if(arr[i].trim() === 'L'){
        area.labour = parseInt(arr[i - 1].trim(), 10);
      }else if(arr[i].trim() === 'UKIP'){
        area.ukip = parseInt(arr[i - 1].trim(), 10);
      }else if(arr[i].trim() === 'LD'){
        area.libdem = parseInt(arr[i - 1].trim(), 10);
      }else if(arr[i].trim() === 'G'){
        area.green = parseInt(arr[i - 1].trim(), 10);
      }else if(arr[i].trim() === 'Ind'){
        area.independent = parseInt(arr[i - 1].trim(), 10);
      }else if(arr[i].trim() === 'SNP'){
        area.snp = parseInt(arr[i - 1].trim(), 10);
      }
      else{
        addErrorToLog(string);
        return null;
      }
    }
    return area;
};

// print results in a standard format

const printResults = (obj) => {

  if(obj === null){
    return;
  }

  let result = `
  Constituency: ${obj.constituencyName},
  Conservative Party: ${obj.conservativePercentage}%,
  Labour Party: ${obj.labourPercentage}%,
  UKIP: ${obj.ukipPercentage}%,
  Liberal Democrats: ${obj.libdemPercentage}%,
  Green Party: ${obj.greenPercentage}%,
  Independent: ${obj.independentPercentage}%,
  SNP: ${obj.snpPercentage}%`;

  return result;
};

// print error log with easy to understand description

let hasErrors = false;
let errorCount = 0;

let errorText = `
Invalid format. Please ensure that text follows the standard:
 
Constituency, result1, party1, result2, party2, result3, party3, result4, party4

For example:
 
"Islington South & Finsbury, 22547, L, 9389, C, 4829, LD, 3375, UKIP, 3371, G, 309, Ind"
 
Where: 
 
  C - Conservative Party
  L - Labour Party
  UKIP - UKIP
  LD - Liberal Democrats
  G - Green Party
  Ind - Independent
  SNP - SNP
  
Following lines contain error:
 
`;

const addErrorToLog = (string) => {
  hasErrors = true;
  errorCount++;
  errorText = `${errorText}${errorCount} ${string}
    `
};

// Predict election results


// to be implemented


const splitResults = results.split('\n');

const finalResult =  splitResults.map((string) => createConstituency(string));

console.log(finalResult.map((obj) => printResults(obj)));

if(hasErrors){
  console.log(errorText)
}


