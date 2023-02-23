                                                        // Arrays Chapter:14 to 16
// Question:01

// var stdNames = [ ]

// Question:02

// var studentName = {"student" : [] } ;

// Question:03

// var cityNames= ["karachi", "islamabad", "Lahore"];
// console.log(cityNames[0])

// Question:04

// var rollNum= [1, 2, 3, 4, 5]
// console.log(rollNum[1])

// Question:05

// var condition= [true, false]
// console.log(condition[1])

// Question:06

// var mixed= [3, "is", true, " "]
// console.log(mixed[1])

// Question:07

// var edu= ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
// document.write("<b>" + "Qualifications" + "</b>" + "<br />")
// document.write("1) " + edu[0] + "<br />")
// document.write("2) " + edu[1] + "<br />")
// document.write("3) " + edu[2] + "<br />")
// document.write("4) " + edu[3] + "<br />")
// document.write("5) " + edu[4] + "<br />")
// document.write("6) " + edu[5] + "<br />")
// document.write("7) " + edu[6] + "<br />")
// document.write("8) " + edu[7] + "<br />")

// QUestion:08

// var Names= ["Hamza", "Ubaid", "Owais"];
// var score= [320, 230, 480]
// var per1= (score[0]/ 500)*100
// var per2= (score[1]/ 500)*100
// var per3= (score[2]/ 500)*100

// document.write("score of " + Names[0] + " is " + score[0] + ".Percentage: " + per1 + "%" + "<br />" )
// document.write("score of " + Names[1] + " is " + score[1] + ".Percentage: " + per2 + "%" + "<br />" )
// document.write("score of " + Names[2] + " is " + score[2] + ".Percentage: " + per3 + "%" + "<br />" )

// Question:09

// var colors= ["Red", "Green", "Blue"]
// document.write (colors)

// a)

// var colors= ["red", "orange", "yellow", "green", "blue", "indigo", "violet" ]
// var userColor= prompt("what color you wants to add to the beginning")
// colors.unshift(userColor)

// document.write("After adding a beginning color. Colors are now " + " " +colors.join(", ") )
  
// b)

// var colors= ["red", "orange", "yellow", "green", "blue", "indigo", "violet" ]
// var userColor= prompt("what color you wants to add to the end")
// colors.push(userColor)

// document.write("After adding a ending color. Colors are now " + " " +colors.join(", ") )

// c)

// var colors= ["red", "orange", "yellow", "green", "blue", "indigo", "violet" ]
// colors.unshift("cyan", "pink")

// document.write("After adding two colors in the beginning. Colors are now " + " " +colors.join(", ") )

// d)

// var colors= ["red", "orange", "yellow", "green", "blue", "indigo", "violet" ]
// colors.shift()

// document.write("After deleting the first color in the array. Colors are now " + " " +colors.join(", ") )

// e)

// var colors= ["red", "orange", "yellow", "green", "blue", "indigo", "violet" ]
// colors.pop()

// document.write("After deleting the last color in the array. Colors are now " + " " +colors.join(", ") )

// f)

// var colors= ["red", "orange", "yellow", "green", "blue", "indigo", "violet" ]
// var index= prompt("Which index you wants to add a color")
// var newColor= prompt("Enter a color to add to the array")
// colors.splice(index, 0, newColor)

// document.write("Colors are now " + " " +colors.join(", ") )

// g)

// var colors= ["red", "orange", "yellow", "green", "blue", "indigo", "violet" ]
// var index= prompt("Which index you wants to delete a color")
// var delColor= prompt("How many colors you wants to delete")
// colors.splice(index, delColor)

// document.write("Colors are now " + " " +colors.join(", ") )

// Question:10

// var scores= [320, 230, 480, 120]

// document.write("Scores of Students : " + scores + "<br />")

// scores.sort(function(a,b){
//     return a-b;
// })
// document.write("Orderd scores of Students : " + scores)

// Question:11

// var cities= ["karachi", "Lahore", "islamabad", "quetta", "peshawar"]
// var selected= [cities[0], cities[1], cities[2]]

// document.write("Cities List: " + "<br />" + cities + "<br />")
// document.write("Selected cities list:" + "<br />" + selected)

// Question:12

// var arr = ["This", "is", "my", "cat"];
// var line= arr.join(" ")

// document.write("Array: " + arr + "<br />")
// document.write("String: " + line)

// Question:13

// Pending

// Question:14

// Pending

// Question:15

// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");
// for (var i = 0; i < phoneManufacturers.length; i++) {
//    document.write("<option>" + phoneManufacturers[i] + "</option>");
// }
// document.write("</select>");


                                                        // Arrays & Loop Chapter:17 to 20
// Question:01

// var multiarray= [[ ]]
// console.log(multiarray)

// Question:02

// var matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// document.write(matrix[0] + "<br />")
// document.write(matrix[1] + "<br />")
// document.write(matrix[2] + "<br />")

// Question:03

// for(var i= 1; i <=10 ; i++){
//     document.write(i + "<br />")
// }

// Quesion:04

// var num=  parseInt(prompt("Enter the number you want to print the multiplication table for:"));
// var length= parseInt(prompt("Enter the length of the multiplication table:"));

// document.write("<b>" + "Multiplication Table of " + num + "</b>")
// document.write(<br />)
// document.write(<br />)
// for (let i = 1; i <= length; i++) {
//   document.write(`${num} x ${i} = ${num*i}<br>`);
// }


// let num = parseInt(prompt("Enter the number you want to print the multiplication table for:"));
// let length = parseInt(prompt("Enter the length of the multiplication table:"));

// document.write(`<h2>Multiplication table of ${num} with length ${length}</h2>`);
// for (let i = 1; i <= length; i++) {
//   document.write(`${num} x ${i} = ${num*i}<br>`);
// }

// Question:05

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//   document.write(fruits[i] + "<br>");
// }

// Question:06

// a)

// document.write("Counting: ");
// for (var i = 1; i <= 15; i++) {
//   document.write(i + ", ");
// }

// b)

// document.write("Reverse counting: ");
// for (var i = 10; i >= 1; i--) {
//   document.write(i + ", ");
// }

// c)

// document.write("Even: ");
// for (var i = 0; i <= 20; i += 2) {
//   document.write(i + ", ");
// }

// d)

// document.write("Odd: ");
// for (var i = 1; i <= 20; i += 2) {
//   document.write(i + ", ");
// }

// e)

// document.write("Series: ");
// for (var i = 1; i <= 10; i++) {
//   document.write(2 * i + "k ");
// }

// Question:07

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var input = prompt("Welcome to our bakery! What would you like to order?");

// var found = false;

// for (var i = 0; i < A.length; i++) {
//   if (input === A[i]) {
//     found = true;
//     break; 
//   }
// }

// if (found) {
//   document.write(input + " is available at our bakery.");
// } else {
//   document.write("Sorry, " + input + " is not available at our bakery.");
// }

// Question:08

// let A = [24, 53, 78, 91, 12];
// let largest = A[0];

// for (let i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i];
//   }
// }

// console.log("The largest number in the array is: " + largest);

// Question:09

// let arr = [24, 53, 78, 91, 12];
// let smallest = arr[0];

// for(let i=1; i<arr.length; i++){
//   if(arr[i] < smallest){
//     smallest = arr[i];
//   }
// }

// console.log("The smallest number in the array is: " + smallest);

// Question:10

// for (var i = 1; i <= 20; i++) {
//     document.write(i * 5 + "<br>");
//   }

                                                // Completed
  

