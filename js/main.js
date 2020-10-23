// создали переменную в которую положили кнопку меню
let menuToggle = document.querySelector('#menu-toggle'); /*находим кнопку с id menu-toggle */
// создали переменную в которую положили меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function(event) {
        // preventDefault-функция (отменяем стандартное поведение ссылки)
        // 
        event.preventDefault();
        /*Обращаемся к списку класса блока menu*/
        // вешаем класс на меню, когда кликнули по кнопке
        menu.classList.toggle('visible')
    })
    /* На menuToggle вешаем обработчик событий(слушаем событие -клик-),указываем что нужно выполнить когда нажимаем клик*/