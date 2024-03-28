 


const burger = document.querySelector('.burger');
const rightNav = document.querySelector('.rightnav ');

burger.addEventListener('click', () => {
  rightNav.classList.toggle('active');
});