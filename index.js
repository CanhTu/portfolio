/*---------CODE MINH-------------*/
// var closeBtn = document.querySelector('.close');
// var openBtn = document.querySelector('.open');
// var navBar = document.querySelector('.nav-list');

// openBtn.addEventListener('click', () => {
//     navBar.classList.add('active');
// });
// closeBtn.addEventListener('click', () => {
//     navBar.classList.remove('active');
// });

/*---------CODE NGTA-------------*/

const selectElement = (s) => document.querySelector(s);
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});