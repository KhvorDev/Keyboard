

// Task 11 ============================================
/*  Проект. 
1. Изучите верстку клавиатуры.
2. При вводе символа в i-11 ( латиница, нижний регистр) - клавише с таким символом присвойте класс .active. Это окрасит клавишу оранжевым фоном. Перед поиском и присвоением active, с помощью цикла удалите класс active у всех клавиш с классом keyboard.
3. Если все сделано верно, то при вводе следующего символа, предыдущая клавиша потеряет оранжевый фон, а новая введенная окрасится. 
4. Самостоятельно добавьте все цифры и второй ряд клавиш от a до l
5. Самостоятельно добавьте клавишу alt, enter.
*/

function t11(event) {
    console.log(event);
    let buttons = document.querySelectorAll('.keyboard');
    let i11 = document.querySelector('.i-11');
    console.log(buttons);

    for (let item of buttons) {
        item.classList.remove('active');
    }
    for (let item of buttons) {
        if (event.key == item.getAttribute('data') || event.code.toLowerCase() == item.getAttribute('data')) {
            item.classList.add('active');
        }
        else if (event.key.toLowerCase() == item.getAttribute('data')) {
            item.classList.add('active');
        }
    }
}
document.querySelector('.i-11').onkeydown = t11;

