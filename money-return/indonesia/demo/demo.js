/**
 * moneyReturn is function for return money after we are paying price , 
 * example price 1000 and pay with 12000, and will be show optimum opportunities, 
 * will be return 10000 1 and 1000 1, total return is 11000
 * i'm using indonesian format price.
 * 
 * @author M Sofiyan
 * @email msofyancs@gmail.com
 * @skypeid viyancs
 * @important
 * if you want to using part of full this code, please don't remove this comment
 */ 
 
var info = 'success';
var money = [];
money[0] = 50;
money[1] = 100;
money[2] = 200;
money[3] = 500;
money[4] = 1000;
money[5] = 2000;
money[6] = 5000;
money[7] = 10000;
money[8] = 20000;
money[9] = 50000;
money[10] = 100000;


function moneyReturn(price,pay) {
    
    var returnMoney = new Array();
    var counter = 0;
    
    //checking if type is not number
    if(typeof price != 'number' || typeof pay != 'number') {
        return 'Invalid Input, Input must be as Number'; 
    }            
    
    //checking if pay same with price
    if(price === pay ) {
        returnMoney[pay] = ++counter;    
        counter = 0;
        return returnMoney;        
    }
    
    //checking if price more big than pay ,is not relevan data.
    else if(price > pay) {
       return 'your money is not enough';
    }

    //price is possible < pay is relevan data, so process now
    var fixReturn = pay - price;
    //reverse array for counting from bigger number to lower, this case for optimal result.
    money = money.reverse(); 
    
    for(i=0; i< money.length;i++) {
        
        if(money[i] > fixReturn) {
            continue;
        }
                    
        var opportunities = fixReturn / money[i]; //generate opportunities 

        if(opportunities % 1 === 0) {
            fixReturn = fixReturn - money[i] * opportunities;
            returnMoney[money[i]] = opportunities;
        } 
            
        else {
                
            fixReturn = fixReturn - money[i] * Math.floor(opportunities);
            returnMoney[money[i]] = Math.floor(opportunities);

        }
                        
       if(fixReturn < money[10] && fixReturn != 0) info = "we don't have money for pay " + fixReturn; 
    }
    
    return returnMoney;
}
    
var mr = moneyReturn(1000,100000);
console.log(mr);
console.log('info = ' +info);

​