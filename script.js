const wrapper=document.querySelector('.wrapper');
const registerLink =document.querySelector('.register-link');
const LoginLink =document.querySelector('.Login-link');

registerLink.onclick =() => {
    wrapper.classList.add('active');
}

LoginLink.onclick =() => {
    wrapper.classList.remove('active');
}