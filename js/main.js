document.addEventListener('DOMContentLoaded', function() { 

let signIn = document.querySelector('.signin');
let modal = document.querySelector('body > div');
let close = document.querySelector('.close');
let submit = document.querySelector('.submit');
let inputs = document.querySelectorAll('input');

signIn.addEventListener('click', function() {
    modal.style.display = "inline-block";
});

close.addEventListener('click', function() {
    modal.style.display = 'none';
});

submit.addEventListener('click', function() {
    inputs.forEach(function(input) {
        input.classList.add('error');
        input.addEventListener('click', function() {
            input.classList.remove('error');
        });
    
})});


});