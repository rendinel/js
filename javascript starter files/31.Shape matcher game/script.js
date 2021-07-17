// we can use let and const instead of var,let like var permit us to update the value of the data it store.
//let are not only scoped to the block where they were created but also anywhere else they are used
// if we change this  example to var instead of let we are going to have currentScore = 10 everywhere because it is initialized outside the function so it has global scope

// let currentScore = 0;

// if(currentScore < 5){
//     let currentScore = 10;
//     console.log(currentScore + ' inside');
// }

// console.log(currentScore + ' outside');

let currentScore = 0;
let playing = false;
let shape1;
let shape2;

//const means constant and the cannot be updated if we try to update it will cause an error
// const number = 10;
// number++;
// console.log(number);

const shapes = [
    {color:'#FF595E',width:250, height:160},
    {color:'#FF595E',width:270, height:160},
    {color:'#FFCA3A',width:320, height:170},
    {color:'#FFCA3A',width:310, height:180},
    {color:'#8AC926',width:190, height:160},
    {color:'#8AC926',width:200, height:190},
    {color:'#1982C4',width:230, height:170},
    {color:'#1982C4',width:130, height:200},
    {color:'#6A4C93',width:300, height:190},
    {color:'#6A4C93',width:430, height:180}
];

console.log(shapes[3]);