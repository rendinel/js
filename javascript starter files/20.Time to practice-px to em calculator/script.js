// em = required / parent 

var calculate = () => {
    var parentVal = document.getElementById('parent').value;
    var requireVal = document.getElementById('required').value;
    var result = document.getElementById('result');
    // check to see if input are empty
    if(!parentVal | !requireVal){
        alert('Please fill in all fields')
    } else {
        result.innerHTML = requireVal / parentVal;
    }
}

var btn = document.querySelector('button');
btn.addEventListener('click', calculate);