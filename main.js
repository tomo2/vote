'use strict';

{
    // ４つのボタンを取得
    const strawberry = document.getElementById('strawberry');
    const orange = document.getElementById('orange');
    const apple = document.getElementById('apple');
    const grape = document.getElementById('grape');

    // ボタンを押すと数字が一つ増える
    strawberry.addEventListener('click', () => {
        let count1 = document.getElementById('count1');
        count1.textContent = strawberry.value++;
    });
    orange.addEventListener('click', () => {
        let count2 = document.getElementById('count2');
        count2.textContent = orange.value++;
    });
    apple.addEventListener('click', () => {
        let count3 = document.getElementById('count3');
        count3.textContent = apple.value++;
    });
    grape.addEventListener('click', () => {
        let count4 = document.getElementById('count4');
        count4.textContent = grape.value++;
    });

}