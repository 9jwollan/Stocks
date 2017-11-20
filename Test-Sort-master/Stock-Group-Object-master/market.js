//imports your code to be tested
const Stock = require("./stock.js");
const Portfolio = require("./portfolio.js");

//Imports my code to run your examples against the economic forcast
//const Forecast = require("./forcast");

function main(){

    //create all of your stocks
    let stk1 = new Stock("Yum Foods","yum","NYSE",80.3,12);
    let stk2 = new Stock("sears canada","sear","OTC",.0123,3658536);
    let stk3 = new Stock("Byline","BY","NYSE",19.20,209);
    let stk4 = new Stock("MCdonalds","MCD","NYSE",18.42,1);

    //build your Portfolio
    let myport = new Portfolio();
    myport.add(stk1);
    myport.add(stk2);
    myport.add(stk3);
    myport.add(stk4);








    console.log(myport.totalValue());
    console.log("______________________")
    console.log(myport);
    //generate a test forcast


    //build prediction
}

main();
