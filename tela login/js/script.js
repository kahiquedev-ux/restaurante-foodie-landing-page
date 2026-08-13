const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const signUpForm = document.querySelector('.form-box.register form');

registerLink.onclick = (e) => {
  e.preventDefault();
  wrapper.classList.add('active');
};

loginLink.onclick = (e) => {
  e.preventDefault();
  wrapper.classList.remove('active');
};

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(signUpForm);
  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');

  alert('Cadastro Realizado Com Sucesso!');
  signUpForm.reset();
});
