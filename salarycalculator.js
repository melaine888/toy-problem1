//Write a program whose major task is to calculate an individual’s Net Salary 
//by getting the inputs of basic salary and benefits. 
//Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 


// create function that culculate net salary
function calculateNetSalary(basicSalary){

    
    let payAsYouEarn = ""
    let nhifDeductions = ""

       // culculate PAYE
    
    if (basicSalary < 24000){

        return payAsYouEarn = (basicSalary * 10/100)
    }
    else if (basicSalary > 24000 && basicSalary < 32333){

        return payAsYouEarn = (basicSalary* 25/100)
    }
  else if (basicSalary > 32333){
     return payAsYouEarn = (basicSalary * 30/100)
    }

    // culculate NHIF deductions
    
    if (basicSalary < 5999){
        
        return nhifDeductions = 150

    }
    else if ( basicSalary > 6000 && basicSalary < 7999){

        return nhifDeductions = 300

    }
    else if(basicSalary > 8000 && basicSalary < 11999){

       return  nhifDeductions = 400   

    }
    else if( basicSalary > 12000 && basicSalary < 14999 ){

        return nhifDeductions = 500
    }

    else if (basicSalary > 15000 && basicSalary < 19999) {

           return nhifDeductions = 600
    }
    else if (basicSalary > 20000 && basicSalary < 24999){
        return nhifDeductions = 750
    }
    else if (basicSalary > 25000 && basicSalary < 29999){

        return nhifDeductions = 850
    }
    else if (basicSalary > 30000 && basicSalary < 34999){

        return nhifDeductions = 900
    }
    else if (basicSalary > 35000 && basicSalary < 39999){
        return nhifDeductions = 950
    }
    else if (basicSalary > 40000 && basicSalary < 44999){
        return nhifDeductions = 1000
    }
    else if (basicSalary > 45000  && basicSalary < 49999){
        return nhifDeductions =  1100
    }
    else if (basicSalary > 50000 && basicSalary < 59999){
        return nhifDeductions = 1200
    }
    else if (basicSalary > 60000 && basicSalary < 69999){
        return nhifDeductions = 1300
    }
    else if (basicSalary > 70000 && basicSalary < 79999){
        return nhifDeductions = 1400
    }
    else if (basicSalary > 80000 && basicSalary < 89999){
        return nhifDeductions = 1300
    }
    else if (basicSalary > 90000 && basicSalary < 99999){
        return nhifDeductions = 1300
    }
    else if (basicSalary > 100000){
        return nhifDeductions = 1700
    }
    // culculate NSSF deduction




    
}

//  Random grade between 1 and 100 to test grade results
var randomsalary = Math.floor(Math.random() * 100000) + 1 ;

let result = calculateNetSalary(randomgrade);
console.log(result);
calculateNetSalary()
console.log(calculateNetSalary(100000))
