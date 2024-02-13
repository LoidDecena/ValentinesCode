document.addEventListener('DOMContentLoaded', function () {
    var title = document.querySelector('.title');
    var container = document.querySelector('.container');
    var close = document.querySelector('.close');

    title.addEventListener('click', function () {
        container.classList.add('open');
    });

    close.addEventListener('click', function () {
        container.classList.remove('open');
    });
});