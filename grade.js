// Challenge 1:
// Student Grade Generator (Toy Problem)
// Write a function that prompts the user to input student marks. 
// The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 
// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

// function to check if score is between the minimum and maximum score for a specific grade
function marksChecker(x, min, max) {
    return x >= min && x <= max;
  }
  
  
  // function that iterates through each grade checking if the score falls is the grades condition
  function marksGenerator(marks) {
  
    if (marksChecker(marks, 0, 100)) {
        if (marks > 79) {
            console.log("Your grade is : A");
        } else if (marksChecker(marks, 60, 79)) {
            console.log("Your grade is : B");
        } else if (marksChecker(marks, 50, 59)) {
            console.log("Your grade is : C");
        } else if (marksChecker(marks, 40, 49)) {
            console.log("Your grade is : D");
        } else {
            console.log("Your grade is : E");
        }
    }
    return marks;
  }
  
  //  Random grade between 1 and 100 to test grade results
  var randomgrade = Math.floor(Math.random() * 100) + 1 ;
  
  
  // return result
  let result = marksGenerator(randomgrade);
  console.log(result);