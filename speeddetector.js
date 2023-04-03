// Challenge 2:
// Speed Detector (Toy Problem)
// Write a program that takes the speed of a car as input e.g 80. 
// If the speed is less than 70, it should print “Ok”. 
// Otherwise, for every 5 km/s above the speed limit (70), 
// it should give the driver one demerit point and print the total number of demerit points.



let totalPoints = 0;
let randomspeed = Math.floor(Math.random() * 200) + 1 ;


//this checks the speed
function CheckSpeed (speed){
    if (speed <= 70 )
    return "OK"
    else if(speed>=70) {
        let totalPoints = Math.floor((speed - 70) / 5);
        if(totalPoints >= 12)
    return "License suspended";
     else {
        return `You  have  ${totalPoints} demerit points.`;
     }
    }
}

let result = CheckSpeed(randomspeed);
console.log(result);