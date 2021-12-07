//Report Card Simulation
/*Program should:
  -use functions
  -ask user what four classes they take
  -ask users what they got on four tests in each subject
  -calculates their test average
  -calculates their letter grade in each class
  -calculates their overall GPA
  -prints all information like a report card
*/

//I recommend using 3 or 4 functions

//Call functions below here
var class1 = prompt("First subject");
document.write("<p> First subject is " + class1 + "</p>");

var testAvg1 = getTest();
var gradeLetter1 = letterGrade(testAvg1);
document.write("<li>Your grade in " + class1 + " is: " + gradeLetter1 + "</li>");
var class1GPA = GPA(testAvg1);


var class2 = prompt("Second subject");
document.write("<p> Second subject is " + class2 + "</p>");

var testAvg2 = getTest();
var gradeLetter2 = letterGrade(testAvg2);
document.write("<li>Your grade in " + class2 + " is: " + gradeLetter2 + "</li>");
var class2GPA = GPA(testAvg2);

var class3 = prompt("Third subject");
document.write(" <p>Third subject is " + class2 + "</P>");

var testAvg3 = getTest();
var gradeLetter3 = letterGrade(testAvg3);
document.write("<li>Your grade in " + class3 + " is: " + gradeLetter3 + "</li>");
var class3GPA = GPA(testAvg3);

var class4 = prompt("Fourth subject");
document.write("<p> Fourth subject is " + class4 + "</p>");

var testAvg4 = getTest();
var gradeLetter4 = letterGrade(testAvg4);
document.write("<li>Your grade in " + class4 + " is: " + gradeLetter4 + "</li>");
var class4GPA = GPA(testAvg4);

var lastGPA = overallGPA(class1GPA, class2GPA, class3GPA, class4GPA);
document.write("<li>Overall GPA is:" + lastGPA + "</li>");

function overallGPA (class1GPA, class2GPA, class3GPA, class4GPA){
  var finalGPA = (class1GPA + class2GPA + class3GPA + class4GPA)/4;
  return finalGPA;

}

function getTest(){
  
 var test1 = Number(prompt("1st test grade"));
 var test2 = Number(prompt("2nd test grade"));
 var test3 = Number(prompt("3rd test grade"));
 var test4 = Number(prompt("4rd test grade"));
  
  var testAvg = (test1 + test2 + test3 + test4)/4;
  return testAvg;
}

function letterGrade(test1){
 if (test1 >= 93){
  return "A";
  }
 else if(test1 >= 85){
  return "B";     
  }
 else if(test1 >= 73){
  return "C";
  }
 else if(test1 >= 67){
  return "D";
  }
 else{
  return "F";
  }
}

function GPA(grade){
 if (grade >= 93){
  return 4;
  }
 else if(grade >= 85){
  return 3;     
  }
 else if(grade >= 73){
  return 2;
  }
 else if(grade >= 67){
  return 1;
  }
 else{
  return 0;
  }
}




//Define functions below here