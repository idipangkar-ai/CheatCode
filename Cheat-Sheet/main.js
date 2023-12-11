What is JavaScript?
JavaScript is a lightweight, open and cross-platform programming language. It is omnipresent in modern development and is used by programmers across the world to create dynamic and interactive web content like applications and browsers. It is one of the core technologies of the World Wide Web, alongside HTML and CSS, and the powerhouse behind the rapidly evolving internet by helping create beautiful and crazy-fast websites.

JavaScript Chear Sheet
JavaScript Chear Sheet

What is JavaScript Cheat Sheet?
We have come up with a cheat sheet to help our readers learn JavaScript in the easiest way possible. It is a documentation of the basics and concepts of JavaScript, quick, correct, and ready-to-use code snippets for common circumstances in JavaScript on one page. It is helpful to both beginner and professional coders of JavaScript.

Table of Content
Fundamentals
Variables
Datatypes
Operators
Scope and Scope chain
Functions
Arrays
Loops
If-else
Strings
Regular Expressions
Data Transformation
Date objects
DOM
Numbers and maths
Events
Errors
Window Properties
Fundamentals: To use JavaScript on website we need to attach the JavaScript file to the HTML file. To do a better code, we should also do the commenting during the code. There are two types of commenting single-line and multiline.

For a browser to know the code is written in JavaScript and execute it we must enclose the code within the <script> tag to include it on the HTML page.
<script type="text/javascript"> 
  // Your js code goes here 
</script>
An external JavaScript file can also be written separately and included within our HTML file using the script tag as:
<script src="filename.js"></script>.
JavaScript comments can be extremely useful to explain JavaScript code and help understand what’s going on in your code and make it more readable.
Single-line comments: Start a single-line comment with “//”.
Multi-line comments: Wrap the comment in /* and*/ if it spans multiple lines.
Variables: Variables in JavaScript are containers for storing data. JavaScript allows the usage of variables in the following three ways:


Variable	Description	Example
var	Used to initialize to value, redeclared and its value can be reassigned.	var x= value;
let	Similar to var but is block scoped	let y= value;
const	Used to declare a fixed value that cannot be changed.	const z= value;
JavaScript

console.log("Using var Keyword"); 
var x = 1; 
if (x === 1) { 
    var x = 2; 
    console.log(x); // Output: 2 
} 
console.log(x); // Output: 2 
  
  
// Using let keyword 
console.log("Using let Keyword"); 
let x1 = 1; 
if (x1 === 1) { 
    let x1 = 2; 
    console.log(x1); // Output: 2 
} 
console.log(x1); // Output: 1 
  
  
// Using const keyword 
console.log("Using const Keyword"); 
const number = 48; 
  
// Changing const value will display TypeError 
try { 
    const number = 42; 
} catch (err) { 
    console.log(err); 
} 
console.log(number); // Output: 48 
Datatypes: There are different types of values and data that can be stored in JavaScript variables. For the machine to be able to operate on variables, and correctly evaluate the expressions it is important to know about the type of variables involved. There are following primitive and non-primitive datatypes in JavaScript:

Datatype	Description	Example
Number	Numeric values can be real number or integers.	var x= number;
String	Series of multiple characters written in quotes.	var x= “characters”;
Boolean	Has only two values true or false.	var x= true/false;
Null	Special value that represents that the variable is empty.	var x= null;
Undefined	Represents a variable which is declared but not assigned any value.	let x; / let x= undefined;
Object	Complex data type that allows us to store a collection of data.	var x= {
    key: “value”;
    key: “value”;
}
Array	Stores multiple values of same type in a single variable.	
var x =[‘y1’, ‘y2′,’y3′,’y4’];

y: any datatype

Function	Functions are objects that can be called to execute a block of code.	
function x(arguments){

    block of code

}

JavaScript

// String 
let str = "hello geeks"; 
console.log(str); 
  
// Number 
const num = 10; 
console.log(num); 
  
// Boolean 
const x = "true"; 
console.log(x); 
  
// Undefined 
let name; 
console.log(name ); 
  
// Null 
const number = null; 
console.log(number); 
  
// Symbol 
const value1 = Symbol("hello"); 
const value2 = Symbol("hello"); 
console.log(value1); 
console.log(value2); 
  
// Here both values are different  
// as they are symbol type which  
// is immutable object 
const object = { 
    firstName: "geek", 
    lastName: null, 
    batch: 2, 
}; 
console.log(object); 
Operators: JavaScript operators are symbols used to performvarious operations on variables (operands). Following are the different types of operators:

Operators	Description	Symbols
Arithmetic	Used to perform basic arithmetic operations on variables(operands).	+,-,*,/,%,++,–
Comparison	Comparison operator is used to compare two operands.	==, ===,!=,>,<,>=,<=
Bitwise	Used to perform bitwise operations.	&, | , ^,~,<<, >>, >>>
Logical	
There are three logical operators in javascript.

logical AND: When all the operands are true.
logical OR: When one or more than one operands are true.
logical NOT: Converts true to false.
exp1&&exp2,exp1 ||exp2, !exp
Assignment	Assignment operators assign values to JavaScript variables.	=, +=,-=,*=,/=,%=
JavaScript

let x = 5; 
let y = 3; 
  
// Addition 
console.log("x + y = ", x); // 8 
  
// Subtraction 
console.log("x - y = ", x - y); // 2 
  
// Multiplication 
console.log("x * y = ", x * y); // 15 
  
// Division 
console.log("x / y = ", x / y); 
  
// Remainder 
console.log("x % y = ", (x % y)); // 2 
  
// Increment 
console.log("++x = ", ++x); // x is now 6 
console.log("x++ = ", x++); 
console.log("x = ", x); // 7 
  
// Decrement 
console.log("--x = ", --x); // x is now 6 
console.log("x-- = ", x--); 
console.log("x = ", x); // 5 
  
// Exponentiation 
console.log("x ** y =", x ** y); 
  
// Comparison 
console.log(x > y); // true 
  
// Equal operator 
console.log((2 == 2)); // true 
  
// Not equal operator 
console.log((3 != 2)); // true 
  
// Strict equal operator 
console.log((2 === 2)); // true 
  
// Strict not equal operator 
console.log((2 !== 2)); // true 
  
// Logical Operator 
  
// Logical AND 
console.log((x < 6 && y < 5)); // true 
  
// Logical OR 
console.log((x < 6 || y > 6)); // true 
  
// Logical NOT 
console.log(!(x < 6)); // false 
JS scope and scope chain:

Scope: Scope defines the accessibility or visibility of variables in JavaScript. That is, which sections of the program can access a given variable and where the variable can be seen.There are usually three types of scopes:
Scope chain: The scope chain is used to resolve the value of variable names in JavaScript. Without a scope chain, the JavaScript engine wouldn’t know which value to pick for a certain variable name if there are multiply defined at different scopes. If the JavaScript engine could not find the variable in the current scope, it will look into the outer scope and will continue to do so until it finds the variable or reaches the global scope. If it still could not find the variable, it will either implicitly declare the variable in the global scope (if not in strict mode) or return an error.
scope	Description
function	Variables declared inside a function is inside the function scope also known as local scope.
global	The variables in global scope can be accessed from anywhere in the program.
block	Block scope restricts the access of a variable outside its scope
JavaScript

let z = 3; 
  
function foo() { 
    if (true) { 
        var x = '1';   // Exist in function scope 
        const y = '2'; // Exist in block scope  
    } 
    console.log(x); 
    console.log(y); 
    console.log(z);    // Exist in global scope 
} 
  
foo(); 
Functions: A JavaScript function is a block of code designed to perform a particular task. It is executed when invoked or called. Instead of writing the same piece of code again and again you can put it in a function and invoke the function when required. JavaScript function can be created using the functions keyword. Some of the functions in JavaScript are:

Function	Description
parseInt()	Parses an argument passed to it and returns an integral number.
parseFloat()	Parses the argument and returns a floating-point number.
isNaN()	Determines if a given value is Not a Number.
Number()	Returns an argument after converting it to number.
eval()	Used for evaluating JavaScript programs presented as strings.
prompt()	Creates a dialogue box for taking input from the user.
encodeURI()	Encodes a URI into a UTF-8 encoding scheme.
match()	Used to search a string for a match against regular expression.
JavaScript

// JS parseInt function 
const num1 = parseInt("3.14"); 
console.log('Using parseInt("3.14") = ' + num1); 
  
// JS parsefloat function 
// It returns floating point Number until  
// it encounters Not a Number character 
const num2 = parseFloat("2018.12@geeksforgeeks"); 
console.log('parseFloat("2018@geeksforgeeks") = ' + num2); 
  
// JS isNAN function 
console.log(isNaN(12)); 
  
// JS number() function 
const num3 = Number(true); 
console.log("Value of 'true': " + num3); 
  
// JS eval() function 
function evalfn() { 
    const a = 4; 
    const b = 4; 
    const value = eval(new String(a * b)); 
    console.log(value); 
} 
evalfn(); 
  
// JS encode URI function 
const url = "https://www.google.com/search?q=geeks for geeks"; 
const encodedURL = encodeURI(url); 
console.log(encodedURL); 
Arrays: In JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable. Arrays use numbers as index to access its “elements”.
Declaration of an Array: There are basically two ways to declare an array.

Example: var House = [ ]; // Method 1
var House = new Array(); // Method 2
There are various operations that can be performed on arrays using JavaScript methods. Some of these methods are:

Method	Description
push()	Adds a new element at the very end of an array.
pop()	Removes the last element of an array.
concat()	Joins various arrays into a single array.
shift()	Removes the first element of an array
unShift()	Adds new elements at the beginning of the array
reverse()	Reverses the order of the elements in an array.
slice()	Pulls a copy of a part of an array into a new array.
splice()	Adds elements in a particular way and position.
toString()	Converts the array elements into strings.
valueOf()	Returns the primitive value of the given object.
indexOf()	Returns the first index at which a given element is found.
lastIndexOf()	Returns the final index at which a given element appears.
join()	Combines elements of an array into one single string and then returns it
sort()	Sorts the array elements based on some condition.
JavaScript

// Declaring and initializing arrays 
  
// Number Array 
let arr = [10, 20, 30, 40, 50]; 
let arr1 = [110, 120, 130, 140]; 
  
// String array 
let string_arr = ["Alex", "peter", "chloe"]; 
  
// push: Adding elements at the end of the array 
arr.push(60); 
console.log("After push op " + arr); 
  
// unshift() Adding elements at the start of the array 
arr.unshift(0, 10); 
console.log("After unshift op " + arr ); 
  
// pop: removing elements from the end of the array 
arr.pop(); 
console.log("After pop op" + arr); 
  
// shift(): Removing elements from the start of the array 
arr.shift(); 
console.log("After shift op " + arr); 
  
// splice(x,y): removes x number of elements 
// starting from index y 
arr.splice(2, 1); 
console.log("After splice op" + arr); 
  
// reverse(): reverses the order of elements in array 
arr.reverse(); 
console.log("After reverse op" + arr); 
  
// concat(): merges two or more array 
console.log("After concat op" + arr.concat(arr1)); 
Loops: Loops are a useful feature in most programming languages. With loops you can evaluate a set of instructions/functions repeatedly until certain condition is reached. They let you run code blocks as many times as you like with different values while some condition is true. Loops can be created in the following ways in JavaScript:

Loop	Description	Syntax
for	Loops over a block of with conditions specified in the beginning.	for (initialization condition; testing condition;increment/decrement)
{
    statement(s)
}
while	Entry control loop which executes after checking the condition.	while (boolean condition)
{
    loop statements…
}
do-while	Exit Control Loop which executes once before checking the condition.	
do
{
    statements..
}

while (condition);

for-in	Another version of for loop to provide a simpler way to iterate.	for (variableName in Object)
{
    statement(s)
}
JavaScript

// Illustration of for loop 
let x; 
  
// for loop begins when x=2 
// and runs till x <=4 
for (x = 2; x <= 4; x++) { 
    console.log("Value of x:" + x); 
} 
  
// Illustration of for..in loop 
// creating an Object 
let languages = { 
    first: "C", 
    second: "Java", 
    third: "Python", 
    fourth: "PHP", 
    fifth: "JavaScript", 
}; 
  
// Iterate through every property of  
// the object languages and print all 
// of them using for..in loops 
for (itr in languages) { 
    console.log(languages[itr]); 
} 
  
// Illustration of while loop 
let y = 1; 
  
// Exit when x becomes greater than 4 
while (y <= 4) { 
    console.log("Value of y:" + y); 
  
    // Increment the value of y for 
    // next iteration 
    x++; 
} 
  
// Illustration of do-while loop 
let z = 21; 
  
do { 
  
    // The line while be printer even if  
    // the condition is false 
    console.log("Value of z:" + z); 
  
    z++; 
} while (z < 20); 
If-else: If-else is used in JavaScript to execute a block of codes conditionally. These are used to set conditions for your code block to run. If certain condition is satisfied certain code block is executed otherwise else code block is executed. JavaScript allows us to nest if statements within if statements as well. i.e, we can place an if statement inside another if statement.

if ( condition ) {
   // Executes this block if
   // condition is true
}
else {
   // Executes this block if
   // condition is false
}
JavaScript

// JavaScript program to illustrate if-else statement 
const i = 10; 
  
if (i < 15) 
    console.log("Value of i is less than 10"); 
else
    console.log("Value of i is greater than 10"); 
Strings: Strings in JavaScript are primitive and immutable data types used for storing and manipulating text data which can be zero or more characters consisting of letters, numbers or symbols. JavaScript provides a lot of methods to manipulate strings. Some most used ones are:

Methods	Description
concat()	Used for concatenating multiple strings into a single string.
match()	Used for finding matche of a string against a provided pattern.
replace()	Used for finding and replacing a given text in string.
substr()	Used to extract length characters from a given string.
slice()	Used for extracting an area of the string and returs it
lastIndexOf()	Used to return the index (position) of the last occurrence of a specified value.
charAt()	Used for returning the character at a particular index of a string
valueOf()	Used for returning the primitive value of a string object.
split()	Used for splitting a string object into an array of strings.
toUpperCase()	Used for converting strings to upper case.
toLoweCase()	Used for converting strings to lower case.
JavaScript

let gfg = 'GFG '; 
let geeks = 'stands-for-GeeksforGeeks'; 
  
// Print the string as it is 
console.log(gfg); 
console.log(geeks); 
  
// concat() method 
console.log(gfg.concat(geeks)); 
  
// match() method 
console.log(geeks.match(/eek/)); 
  
// charAt() method 
console.log(geeks.charAt(5)); 
  
// valueOf() method 
console.log(geeks.valueOf()); 
  
// lastIndexOf() method 
console.log(geeks.lastIndexOf('for')); 
  
// substr() method 
console.log(geeks.substr(6)); 
  
// indexOf() method 
console.log(gfg.indexOf('G')); 
  
// replace() method 
console.log(gfg.replace('FG', 'fg')); 
  
// slice() method 
console.log(geeks.slice(2, 8)); 
  
// split() method 
console.log(geeks.split('-')); 
  
// toUpperCase method 
console.log(geeks.toUpperCase(geeks)); 
  
// toLowerCase method 
console.log(geeks.toLowerCase(geeks)); 
Regular Expressions: A regular expression is a sequence of characters that forms a search pattern. The search pattern can be used for text search and text to replace operations. A regular expression can be a single character or a more complicated pattern.

Syntax:

/pattern/modifiers;
You can also use regEx() to create regular expression in javascript:

const regex1 = /^ab/;
const regex2 = new Regexp('/^ab/');
Let us look at how JavaScript allows Regular Expressions:

Regular Expression Modifiers : Modifiers can be used to perform multiline searches. Some of the pattern modifiers that are allowed in JavaScript:

Modifiers	Description
[abc]	Find any of the character inside the brackets
[0-9]	Find any of the digits between the brackets 0 to 9
(x/y)	Find any of the alternatives between x or y separated with |
Regular Expression Patterns :Metacharacters are characters with a special meaning. Some of the metacharacters that are allowed in JavaScript:

Metacharacters	Description
.	Used for finding a single character, except newline or line terminator
\d	Used to find a digit.
\s	Used to find a whitespace character
\uxxxx	Used to find the Unicode character specified by the hexadecimal number
Quantifiers define quantities. They provide the minimum number of instances of a character, group, or character class in the input required to find a match. Some of the quantifiers allowed in JavaScript are:

Quantifiers	Description
n+	Used to match any string that contains at least one n
n*	Used to match any string that contains zero or more occurrences of n
n?	Used to matches any string that contains zero or one occurrences of n
n{x}	Matches strings that contain a sequence of X n’s
^n	Matches strings with n in the first place
Here is an example to help you understand regular expression better.

JavaScript

// Program to validate the email address 
function validateEmail(email) { 
  
    // Regex pattern for email 
    const re = /\S+@\S+\.\S+/g; 
  
    // Check if the email is valid 
    let result = re.test(email); 
  
    if (result) { 
        console.log("The email is valid."); 
    } else { 
        console.log("The email is not valid."); 
    } 
} 
  
// Input Email Id 
let email = "abc@gmail.com"
validateEmail(email); 
  
email = "abc#$#@45com"
validateEmail(email); 
Data Transformation: Data transformation is converts data from one format to another. It can be done with the usage of higher-order functions which can accept one or more functions as inputs and return a function as the result. All higher-order functions that take a function as input are map(), filter(), and reduce().

Method	Description	Syntax
map()	Iterates over an array and calls function on every element of array.	array.map(function(currentValue, index, arr), thisValue)
filter()	Create a new array from a given array after applying a condition.	array.filter(callback(element, index, arr), 
thisValue)
reduce()	Reduces the array to single value using a function	array.reduce( function(total, currentValue, currentIndex, arr),
initialValue )
JavaScript

const num = [16, 25]; 
  
/* Using JS map() Method */
console.log(num.map(Math.sqrt)); 
  
const ages = [19, 37, 16, 42]; 
  
/* Using JS filter() Method */
console.log(ages.filter(checkAdult)); 
  
function checkAdult(age) { 
    return age >= 18; 
} 
  
/* Using JS reduce() Method */
const numbers = [165, 84, 35]; 
console.log(numbers.reduce(myFunc)); 
  
function myFunc(total, num) { 
    return total - num; 
} 
Date objects: The Date object is an inbuilt datatype of JavaScript language. It is used to deal with and change dates and times. There are four different way to declare a date, the basic things is that the date objects are created by the new Date() operator.
Syntax:

new Date()
new Date(milliseconds)
new Date(dataString)
new Date(year, month, date, hour, minute, second, millisecond)
There are various methods in JavaScript used to get date and time values or create custom date objects. Some of these methods are:

Method	Description
getDate()	Used to return the month’s day as a number (1-31)
getTime()	Used to get the milliseconds since January 1, 1970
getMinutes()	Returns the current minute (0-59)
getFullYear()	Returns the current year as a four-digit value (yyyy)
getDay()	Returns a number representing the weekday (0-6) to
parse()	Returns the number of milliseconds since January 1, 1970
setDate()	Returns the current date as a number (1-31)
setTime()	Sets the time (milliseconds since January 1, 1970)
JavaScript

// Here a date has been assigned by creating a date obj 
let DateObj = new Date("October 13, 1996 05:35:32"); 
  
// getDate() 
let A = DateObj.getDate(); 
  
// Printing date of the month 
console.log(A); 
  
// getTime() 
let B = DateObj.getTime(); 
  
// Printing time in milliseconds. 
console.log(B); 
  
// getMinutes() 
let minutes = DateObj.getMinutes(); 
  
// Printing minute. 
console.log(minutes); 
  
// getFullYear() 
let C = DateObj.getFullYear(); 
  
// Printing year 
console.log(C); 
  
// getDay() 
let Day = DateObj.getDay(); 
  
// Printing day of the week 
console.log("Number of Day: " + Day); 
  
// setDate 
DateObj.setDate(15); 
  
let D = DateObj.getDate(); 
  
// Printing new date of the month 
console.log(D); 
  
// parse(), taking wrong date string as input. 
let date = "February 48, 2018 12:30 PM"; 
  
// calling parse function. 
let msec = Date.parse(date); 
console.log(msec); 
DOM: DOM stands for Document Object Model. It defines the logical structure of documents and the way a document is accessed and manipulated. JavaScript can not understand the tags in HTML document but can understand objects in DOM.Below are some of the methods provided by JavaScript to manipulate these nodes and their attributes in the DOM:

Method	Description
appendChild()	Adds a new child node as the last child node.
cloneNode()	Duplicates an HTML element.
hasAttributes()	Returns true If an element has any attributes otherwise,returns false.
removeChild()	Removes a child node from an element using the Child() method.
getAttribute()	Returns the value of an element node’s provided attribute.
getElemetsByTagName()	Returns a list of all child elements.
isEqualNode()	Determines whether two elements are same.
JavaScript

        function geeks() { 
            var node = document.createElement("P"); 
            var t = document.createTextNode("GeeksforGeeks"); 
            node.appendChild(t); 
            document.getElementById("sudo").appendChild(node); 
        } 
        function nClone() { 
            // Accessing div attribute using a variable geek 
            var geek = document.getElementsByTagName("DIV")[0]; 
  
            // Cloning geek variable into a variable named clone 
            var clone = geek.cloneNode(true); 
  
            // Adding our clone variable to end of the document 
            document.body.appendChild(clone); 
        } 
        function hasAttr() { 
            var s = document.body.hasAttributes(); 
            document.getElementById("gfg").innerHTML = s; 
        } 
  
        function Geeks() { 
            var doc = document.getElementById("listitem"); 
            doc.removeChild(doc.childNodes[0]); 
        } 
  
        /* Using getElementById */
        function getAttr() { 
            var rk = document.getElementById("button").getAttribute("onClick"); 
            document.getElementById("gfg1").innerHTML = rk; 
        } 
  
        /* Using getElementsByTagName */
        function getElement() { 
            var doc = document.getElementsByTagName("p"); 
            doc[0].style.background = "green"; 
            doc[0].style.color = "white"; 
        } 
  
        /* Cheacking the equality */
        function isequal() { 
            var out = document.getElementById("result"); 
            var divele = document.getElementsByTagName("div"); 
            out.innerHTML += 
                "element 1 equals element 1: " + 
                divele[0].isEqualNode(divele[0]) + 
                "<br/>"; 
            out.innerHTML += 
                "element 1 equals element 2: " + 
                divele[0].isEqualNode(divele[1]) + 
                "<br/>"; 
            out.innerHTML += 
                "element 1 equals element 3: " + 
                divele[0].isEqualNode(divele[2]) + 
                "<br/>"; 
        } 
Numbers and Math: JavaScript provides various properties and methods to deal with Numbers and Maths.

Number Properties include MAX value, MIN value, NAN(not a number), negative infinity , positive infinity etc. Some of the methods in JavaScript to deal with numbers are:

Method	Description
valueOf()	Returns a number in its original form.
toString()	Returns string representation of an integer.
toFixed()	Returns a number’s string with a specified number of decimals.
toPricision()	Converts a number to a string of a specified length.
toExponential()	Returns a rounded number written in exponential notation.
JavaScript

    var num = 213; 
    var num1 = 213.3456711; 
  
    // JS valueof() Method 
    console.log("Output : " + num.valueOf()); 
  
    // JS tostring() Method 
    console.log("Output : " + num.toString(2)); 
  
    // JS tofixed() Method 
    console.log("Output : " + num1.toString(2)); 
  
    // JS topricision() Method 
    console.log("Output : " + num1.toPrecision(3)); 
  
    // JS toexponential() Method 
    console.log("Output : " + num1.toExponential(4)); 
Javascript provides math object which is used to perform mathematical operations on numbers. There are many math object properties which include euler’s number, PI, square root, logarithm. Some of the methods in JavaScript to deal with math properties are:

Method	Description
max(x,y,z…n)	Returns the highest-valued number
min(x,y,z…n)	Returns the lowest-valued number
exp(x)	Returns x’s exponential value.
log(x)	Returns the natural logarithm (base E) of x.
sqrt(x)	Returns x’s square root value.
pow(x,y)	Returns the value of x to the power of y
round(x)	Rounds the value of x to the nearest integer
sin(x)	Finds the sine value of x(x is in radians).
tan(x)	Finds the angle’s(x) tangent value.
JavaScript

    document.getElementById("GFG").innerHTML = 
        "Math.LN10: " + Math.LN10 + "<br>" + 
        "Math.LOG2E: " + Math.LOG2E + "<br>" + 
        "Math.Log10E: " + Math.LOG10E + "<br>" + 
        "Math.SQRT2: " + Math.SQRT2 + "<br>" + 
        "Math.SQRT1_2: " + Math.SQRT1_2 + "<br>" + 
        "Math.LN2: " + Math.LN2 + "<br>" + 
        "Math.E: " + Math.E + "<br>" + 
        "Math.round: " + Math.round(5.8) + "<br>" + 
        "Math.PI: " + Math.PI + "<br>" + 
        " 
        < p > <b>Math.sin(90 * Math.PI / 180):</b> " + 
    Math.sin(90 * Math.PI / 180) + "</p> 
    " + 
    " 
        < p > <b>Math.tan(90 * Math.PI / 180):</b> " + 
    Math.tan(90 * Math.PI / 180) + "</p> 
    " + 
    " 
        < p > <b>Math.max(0, 150, 30, 20, -8, -200):</b> " + 
    Math.max(0, 150, 30, 20, -8, -200) + "</p> 
    " + 
    " 
        < p > <b>Math.min(0, 150, 30, 20, -8, -200):</b> " + 
    Math.min(0, 150, 30, 20, -8, -200) + "</p> 
    " + 
    " 
        < p > <b>Math.pow(3,4):</b> " + Math.pow(3, 4) + "</p > 
            "; 
Events: Javascript has events to provide a dynamic interface to a webpage. When a user or browser manipulates the page events occur. These events are hooked to elements in the Document Object Model(DOM). Some of the events supported by JavaScript:

Events	Description
onclick()	Triggers an event when an element is clicked.
onkeyup()	Executes instructions whenever a key is released after pressing.
onmouseover()	Triggers an event when mouse pointer is hovered over an element
onmouseout()	Triggers an event when mouse pointer is moved away from an element.
onchange()	Detects the change in value of any element listing to this event.
onload()	Evokes an event when an element is completely loaded.
onfocus()	Triggers when an aspect is brought into focus.
onblur()	Evoked an event when an element loses focus.
onsubmit()	Evokes an event when a form is submitted
ondrag()	Invokes an event when an element is dragged.
oninput()	Triggers when an input field gets any value.
JavaScript

        function hiThere() { 
            alert("Hi there!"); 
        } 
        function focused() { 
            var e = document.getElementById("inp"); 
            if (confirm("Got it?")) { 
                e.blur(); 
            } 
        } 
  
        /* Mouseover event */
        document.getElementById("hID").addEventListener("mouseover", over); 
  
        /* Mouseoout event */
        document.getElementById("hID").addEventListener("mouseout", out); 
  
        /* Over on green */
        function over() { 
            document.getElementById("hID").style.color = "green"; 
        } 
  
        /* Leaving Out Black */
        function out() { 
            document.getElementById("hID").style.color = "black"; 
        } 
  
        function Geeks() { 
            var x = document.getElementById("GFG").value; 
            document.getElementById("sudo").innerHTML = "Selected Subject: " + x; 
        } 
  
        /* Success alert */
        function Geek() { 
            alert("Form submitted successfully."); 
        } 
        function Function() { 
            document.getElementById("geeks").style.fontSize = "30px"; 
            document.getElementById("geeks").style.color = "green"; 
        } 
Error: When executing JavaScript code, errors will most definitely occur when the JavaScript engine encounters a syntactically invalid code. These errors can occur due to the fault from the programmer’s side or the input is wrong or even if there is a problem with the logic of the program. Javascript has a few statements to deal with these errors:

Statement	Description
try	Tests a block of code to check for errors.
catch	Handles the error if any are present.
throw	Allows construction of new errors.
finally	Executes code after try and catch.
JavaScript

        function myFunction() { 
            const message = document.getElementById("p01"); 
            message.innerHTML = ""; 
            let x = document.getElementById("demo").value; 
  
            /* Using try.. catch.. with conditions*/
            try { 
                if (x == "") throw "is empty"; 
                if (isNaN(x)) throw "is not a number"; 
                x = Number(x); 
                if (x > 20) throw "is too high"; 
                if (x <= 20) throw "is too low"; 
            } catch (err) { 
                message.innerHTML = "Input " + err; 
            } finally { 
                document.getElementById("demo").value = ""; 
            } 
        } 
Window Properties: The window object is the topmost object of DOM hierarchy. Whenever a window appears on the screen to display the contents of document, the window object is created. To access the properties of the window object, you will specify object name followed by a period symbol (.) and the property name.

Syntax:

window.property_name
The properties and methods of Window object that are commonly used are listed in the below tables:

Property	Description
window	Returns the current window or frame.
screen	Returns the window’s Screen object.
toolbar	Creates a toolbar object, whose visibility can be toggled in the window.
Navigator	Returns the window’s Navigator object.
frames[]	Returns all <iframe> elements in the current window.
document	Returns a reference to the document object.
closed	Boolean used to check whether the window is closed or not.
length	Represents the number of frames in the current window.
History	Provides the window’s History object.
JavaScript

        // JS location property 
        let origin = window.location.origin; 
        document.getElementById("demo").innerHTML = origin; 
  
        // JS screen property 
        function getResolution() { 
            alert("Your screen is: " + screen.width + "x" + screen.height); 
        } 
  
        // JS toolbar property 
        var visible = window.toolbar.visible; 
  
        // JS navigator property 
        function checkConnectionStatus() { 
            if (navigator.onLine) { 
                alert("Application is online."); 
            } else { 
                alert("Application is offline."); 
            } 
        } 
        // JS history property 
        function getViews() { 
            alert( 
                "You've accessed " + history.length + " web pages in this session."
            ); 
        } 
        // JS close property 
        let myWindow; 
        function closeWin() { 
            if (myWindow) { 
                myWindow.close(); 
            } 
        } 
Method	Description
alert()	Shows a message and an OK button in an alert box.
print()	Prints the current window’s content.
blur()	Removes the current window’s focus.
setTimeout()	Evaluates an expression after a specified time interval.
clearTimeout()	Removes the timer that was set with setTimeout()
setInterval()	Evaluates an expression at intervals defined by the user.
prompt()	Shows a conversation window asking for feedback from the visitor.
close()	Closes the currently open window.
focus()	Sets the current window’s focus.
resizeTo()	Resizes the window to the width and height supplied.
JavaScript

        var gfgWindow; 
  
        // Function that open the new Window 
        function windowOpen() { 
            gfgWindow = window.open( 
                "https://www.geeksforgeeks.org/", 
                "_blank", 
                "width=200, height=200"
            ); 
        } 
  
        // Function that Resize the open Window 
        function resizeWin() { 
            gfgWindow.resizeTo(400, 400); 
            gfgWindow.focus(); 
        } 
  
        // Function that Closes the open Window 
        function windowClose() { 
            gfgWindow.close(); 
        } 
  
        // Function that blur the open Window 
        function windowBlur() { 
            gfgWindow.blur(); 
        } 
  
        // Function that focus on open Window 
        function windowFocus() { 
            gfgWindow.focus(); 
        } 
  
        // Alert function 
        function wlcm() { 
            alert("Welcome to GeeksforGeeks"); 
        } 
  
        // Prompt function 
        function geek() { 
            var doc = prompt("Please enter some text", "GeeksforGeeks"); 
            if (doc != null) { 
                document.getElementById("g").innerHTML = "Welcome to " + doc; 
            } 
        } 
  
        // Function setTimeout and clearTimeout 
        var t; 
        function color() { 
            if (document.getElementById("btn").style.color == "blue") { 
                document.getElementById("btn").style.color = "green"; 
            } else { 
                document.getElementById("btn").style.color = "blue"; 
            } 
        } 
        function fun() { 
            t = setTimeout(color, 3000); 
        } 
        function stop() { 
            clearTimeout(t); 
        } 
