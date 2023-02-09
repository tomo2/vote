'use strict';

{

    const strawberry = document.getElementById('strawberry');
    const orange = document.getElementById('orange');
    const apple = document.getElementById('apple');
    const grape = document.getElementById('grape');


    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        let count = document.getElementById('count1');
        count.textContent = button;
    });
}