//Write a function to calculate employees's PAYE in Uganda.

/*URA Tax conditions;
Rate of NSSF ContributionThe employer must deduct 5% from the employees total gross monthly wage 
and add 10% of the total gross monthly wage making a total contribution of 15% for each employee.

Rate of Income Tax: 
Not exceeding Ushs235,000 = Nil
Exceeding Ushs235,000 not exceeding Ushs335,000 = 10% of the amount by which chargeable income exceeds Ushs. 235,000
Exceeding Ushs.335,000 but not exceeding shs. 410,000Ushs = 10,000 plus 20% of the Amount by which chargeable 
income exceeds Ushs. 335,000.
Exceeding Ushs.410,000;
(a) Ushs 25,000plus 30% of the amount by which chargeable income exceeds Ushs. 410,000 and 
(b) where the chargeable income of an individual exceeds shs.10,000,000 an additional 10% charged 
on the amount by which chargeable income exceeds shs. 10,000,000.
*/

//Do this and post assignment to the repo
//PAYE AND NSSF calculator


function netPayCalculator(gross){
        var NSSF = gross*(0.05);
        var chargeableIncome = (gross - NSSF);
     if (gross <= 235000){
        console.log("This income is not taxable by Law");
     }
    else if (235000<gross<=335000){
        let incomeTax = .1*(chargeableIncome-235000);
        let  tax = incomeTax+NSSF;
        let netPay = gross - tax;
        console.log(netPay);
    }
else if (gross > 335000 && gross <= 410000){
        let incomeTax =  (25000 + (0.2*(chargeableIncome-335000)));
        let  tax = (incomeTax + NSSF);
        let netPay = (gross - tax);
        console.log(netPay);
        }
  else if (gross > 410000){
        let incomeTax =  (45500 + (0.3*(chargeableIncome-410000)));
        let tax = (incomeTax + NSSF);
        let netPay = (gross - tax);
        console.log(netPay);
    }

    else if (chargeableIncome > 10000000){
        let incomeTax = (45500 +  0.3*(chargeableIncome-410000) + 0.1*(chargeableIncome-10000000));
        let tax = (incomeTax + NSSF);
        let netPay = (gross - tax);
        console.log(netPay);
    }

    else {
       console.log('please enter a valid amount');
    }
    
}


netPayCalculator(1300000);
netPayCalculator(10000);
netPayCalculator(25000000);


