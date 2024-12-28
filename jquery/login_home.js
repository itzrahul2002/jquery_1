const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login_link');
const registerLink = document.querySelector('.register_link');

const btnPopup = document.querySelector('.btnlogin_popup');
const inconClose =document.querySelector('.icon_close');


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});
 
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

inconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup')
});
 