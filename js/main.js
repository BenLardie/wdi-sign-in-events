document.addEventListener('DOMContentLoaded', function() { 

let signIn = document.querySelector('.signin');
let modal = document.querySelector('body > div');
let close = document.querySelector('.close');

signIn.addEventListener('click', function() {
    modal.style.display = "inline-block";
});

close.addEventListener('click', function() {
    modal.style.display = 'none';
})

});