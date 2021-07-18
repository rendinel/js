// we can use let and const instead of var,let like var permit us to update the value of the data it store.
//let are not only scoped to the block where they were created but also anywhere else they are used
// if we change this  example to var instead of let we are going to have currentScore = 10 everywhere because it is initialized outside the function so it has global scope

// let currentScore = 0;

// if(currentScore < 5){
//     let currentScore = 10;
//     console.log(currentScore + ' inside');
// }

// console.log(currentScore + ' outside');

//we set the start score at 0,the playing status to false,we initialize the 2 shape without assign them and we incapsulate the matchbtn inside a const
let currentScore = 0;
let playing = false;
let shape1;
let shape2;
const matchBtn = document.getElementById('match');

//const means constant and the cannot be updated if we try to update it will cause an error
// const number = 10;
// number++;
// console.log(number);


//this is the object of the shape we are goinmg to match
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

//function that generate a random shapes from the shapes object,we generate a random number and assign it to the index
const selectRandomShape = () => {
    const randomNum = Math.floor(Math.random()*shapes.length);
    const randomSelection = shapes[randomNum];
    return randomSelection;
}

// x = selectRandomShape();
// console.log(x);

//template literal
// var name = 'chris';
// console.log(`Hello ${name}`);
// allow us to create multiline string with `` instead of ''
// var name2 = `chrisaslidasoidhasoidhaosihdoaishd
// aoidhjaosijdoasijd`;
// console.log(`Hello ${name2}`);

//this function with setInterval activate every second , it permit us to play the matchbtn everytime we start a game
//it assign the 2 random shape generate above to the 2 let shape1 and shape2
//with a template literal and .cssText pass css from the object corrisponding to the random shape selected to the 2 div insdide html

const repeatRandomShape = () => {
    setInterval(() => {
        matchBtn.disabled = false;
        shape1 = selectRandomShape();
        shape2 = selectRandomShape();

        const shape1Styles = `width:${shape1.width+'px'};
                              background:${shape1.color};
                              height:${shape1.height+'px'}`;
        //with cssText we can pass some css to an alement from js
        document.getElementById('shape1').style.cssText = shape1Styles;
        const shape2Styles = `width:${shape2.width+'px'};
        background:${shape2.color};
        height:${shape2.height+'px'}`;

        document.getElementById('shape2').style.cssText = shape2Styles;
    }, 1000);
}

//start game,set the playing to true,disabled the btn play every time we start  a game and launch the repeat random shape function
document.getElementById('play').onclick = () => {
    playing = true;
    document.getElementById('play').disabled = true;
    repeatRandomShape();
}

//disable the matchbtn so we can press only one time for every shape, with Object.is we can compare 2 different property from the same object and return tue if they match
// if the 2 object are = we add 1 to the score and print inside the right element otherwise we subtract and print it 
document.getElementById('match').onclick = () => {
    matchBtn.disabled = true;
    if(playing){
        if(Object.is(shape1, shape2)){
            currentScore++;
            document.getElementById('score').innerHTML = currentScore;
        } else {
            currentScore--;
            document.getElementById('score').innerHTML = currentScore;
        }
    }
}

