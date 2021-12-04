let header = document.getElementById('header');

let loader = document.getElementById('loader');

let body = document.getElementById('body');
let title = document.getElementById('title');

let logoButton = document.getElementById('logo_button');
logoButton.addEventListener('click', changeBckg);
 


function changeBckg() {
    // header.style.opacity = .3;
    body.style.backgroundColor = '#000';
    title.style.color = '#d1e2c0'
    console.log('hello! Queen');
}

