//  +, - , / , **, *,%
// Unary Operator
// let x = 2
// console.log(`x = ${x}`)
// //  increment / decrement
// // Postfix Increment
// console.log('PostFix Increment');
// console.log(`now x = ${x++} \nx = ${x}`)
// // Post decrement
// console.log('PostFix Decrement')
// console.log(`now x = ${x--} \nx = ${x}`)

// let y = 2
// console.log(`y = ${y}`)
// //  increment / decrement
// // Postfiy Increment
// console.log('PreFix Increment');
// console.log(`now y = ${++y} \ny = ${y}`)
// // Post decrement
// console.log('PreFix Decrement')
// console.log(`now y = ${--y} \ny = ${x}`)


// Arithmetic Assignment Operator
// = , +,-,*,/,%,**
// Binary operator
// console.log(`Binary Operator`);
// console.log(`Arithmetic Assignment Operator`);
// let x = 1
// let y = 2
// console.log(`x = ${x}`);
// console.log(`y = ${y}`);
// // x = x + y
// x += y
// console.log(`x = ${x}`);
// console.log(x);
// x = x ** y
// console.log(x);
// Comparison Operator
// let x = 1
// let y = 1
// let res = x >= y
// console.log(res);
// let x = '5'
// let y =  '5'
// console.log(y <= x);

// let a = 4
// let b = 3
// let c = 5
// let d = 5
// let res = a != b
// // console.log(`${a} is not equal to ${b} ${res} `);
// console.log((a > b) || (c > d));
// let name = "Ahsan"

// let age = parseInt(prompt('please Enter Your Age'))
// age = Math.abs(age);
// if(age >=18)
// {
//     console.log('You Are Eligible For Vote!');
// }
// else 
// {
//     console.log(`You Are Not Eligible For Vote! ${age}`);

// }
// Ternary Operator
// let match = 18
// let age = 15
// let res = age >= match ? 'Pass' :  'Fail';
// console.log(res)
// let percentage = 20
// if ((percentage>=90) &&(percentage<=100))
// {
//     console.log('A+ Grade');
// }
// else if((percentage>=80) &&(percentage<90))
// {
    
//     console.log('A Grade');
// }
// else if((percentage>=70) &&(percentage<80))
// {
    
//     console.log('B Grade');
// }
// else if((percentage>=60) &&(percentage<70))
// {
    
//     console.log('C Grade');
// }
// else if((percentage>=50) &&(percentage<60))
// {
    
//     console.log('Pass');
// }
// else if((percentage>=0) &&(percentage<50))
// {
    
//     console.log('fail');
// }

// else {
//     console.log('Invalid');
// } 

let x1 = 5
let x2 = 5
let x3 = 9
let x4 = 30

if (x1 > x2) 
{
    if (x1 > x3) 
    {
        if (x1 > x4)
        {
            console.log('X1 is greater than All');
        } 
        else 
        {
            console.log('X1 is greater than X2 And X3 but Not than X4');
        }
    } 
    else 
    {
        console.log('X1 is greater than X2  but Not than X3 and X4');
        
    }
} 
else 
{
    console.log('X1 is not Greater than any value');
}