//Arithmetic Operators

let a = 5;
let b = 2;


console.log( "a + b =", a + b); // 7
console.log( "a - b =", a - b); // 3
console.log( "a * b =", a * b); // 10
console.log( "a / b =", a / b); // 2.5
console.log( "a % b =", a % b); // 1
console.log( "a ** b =", a ** b); // 25





// Assignment Operators

let a1 = 5;
let b1 = 2;

a1 += 5;
a1 -= 3;
a1 *= 2;
a1 /= 2;
a1 **= 2;
a1 %= 2;
console.log( "a1 =", a1 );

b1 += 5;
b1 -= 1;
b1 *= 2;
b1 /= 2;
b1 **= 2;
b1 %= 2;
console.log( "b1 =", b1 ); 





// comparison Operators 


let a2 = 5; 
let b2 = 2; 

console.log( "5 == 2", a2 == b2); // false
console.log( " 5 != 2", a2 != b2); // true


let c = 5;
let d = "5";

console.log(" c == d =", c == d); // true
console.log( " c === d =", c === d); // false
console.log( " c != d =", c != d);  // false
console.log( " c !== d =", c !== d); // true

let e = 8;
let f = 5;

console.log( "e > f =", e > f); //true
console.log( "e < f =", e < f); // false */




// Logical Operators

let a3 = 8;
let b3 = 5;

let cond1 = a3 > b3; // as case mein 2no sahih howy to :true: warna :false: 
let cond2 = a3 === b3;  // ye condition galat he to output false aaie ga . Q k 8_k barabr nhi he __5

console.log( " cond1 && cond2 =", cond1 && cond2); // false


let c1 = 8;
let d1 = 5;

let cond3 = c1 || d1; // as case mein agar ek b sahih howa to output mein / true aai ga 
let cond4 = c1 === d1;

console.log( " cond3 || cond4 =", c1 < d1 || c1 === 8); // true


let e1 = 6; // as case mein agar true howa to false dy ga_____ agar false howa to true dy ga 
let f1 = 3; // as case mein meny true likha he .. ye false dy ga ___ meny pucha k kiya [ e = 6 ] k barabr nhi he

console.log( " ! ( e1 === 6 ) =", !(e1 === 6)); // false */





// Conditional Statements

let age = 25; // agar mein as ko .18. se kam kar do to jise k _16_? kar do to print ho k aai ga " you cannot vote " 

if( age > 18){
    console.log("You can vote !");
};
if(age < 18){
    console.log( " You cannot vote !");
};



let mode = "dark";
let color;
if(mode === "dark"){
    color = "black";

}else{
    color = "white";
    
};
console.log(color);



// variable ki extra space ko sahih karni k liye   trim()  method use hotta he 

let mode1 = " yellow ";
let color1;

if(mode1.trim() === "yellow"){
    color1 = "pink";
}else{
    color1 = "white";
}

console.log(color1);


// Odd  or  Even 


let num0 = 20;

if(num0 % 2 === 0){
    console.log("is even", num0);
}else{
    console.log("is odd", num0);
};



let num1 = 15;

if(num1 % 2 === 0){
    console.log("is even", num1);
}else{
    console.log("is odd", num1);
};


// else-if  method


let mode2 = "green";
let color2;

if(mode2 === "dark"){
    color2 = "black";
}else if( mode2 === "black"){
    color2 = "white";
}else if( mode2 === "blue"){
    color2 = "pink";
}else{
    color2 = "yellow";   // output \\ yellow
}

console.log(color);


// Ternary Operators 


let age1 = 16;

age1 >=18? "adult": "not adult";

console.log(age1);



// alart create karta he jise k pop pop uper se kuch asy tarah
let name = prompt("Hello !"); 

console.log(name);


// prompt k zariye user se koi output b ly sakty hen
let num = prompt( " Enter a Number !");

if(num % 5 === 0){
    console.log("is multiple is of 5",num);
}else{
    console.log("is not multiple of 5",num);
};



let score = prompt() = 100;  // agar as 100 ko hata k 90/70/60__ kar do ga to condition k hissab se output aai ga !
let grade;

if(score >= 90 && score <= 100){
    grade = "A";
}else if(score >= 70 && score <= 89){
    grade = "B";
}else if( score >= 50 && score <= 69){
    grade = "C";
}else if( score >= 30 && score <= 49){
    grade = "D"; 
}else{
    grade = "fail";
};

console.log(grade);
