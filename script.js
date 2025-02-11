const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const rePassword = document.getElementById('rePassword');

function error(input , message){
 input.className = 'form-control is-invalid';
 const div = input.nextElementSibling;
 div.innerText = message;
 div.className = 'invalid-feedback';
}

function success(input){
 input.className = 'form-control is-valid';
}


function validateEmail(input) {
 const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
 if (emailRegex.test(input.value.trim())) {
     success(input);
     return true;
 } else {
     error(input, 'Geçerli bir email adresi giriniz');
     return false;
 }
}

if(email.value === ''){
 error(email, 'Email boş bırakılamaz.');
} else {
 validateEmail(email);
}

form.addEventListener('submit', (e) => {
 e.preventDefault(); // Formun default submit işlemlerini engeller.

 if(username.value === ''){
  error(username, 'Kullanıcı adı boş bırakılamaz.');
 }else{
  success(username);
 }

 if(email.value === ''){
  error(email, 'Email boş bırakılamaz.');
 }else if (!validateEmail(email)){
  error(email, 'Geçerli bir email adresi giriniz.');
 }

 else{
  success(email);
 }

 if(password.value === ''){
  error(password ,'Şifre boş bırakılamaz.');
 }else{ 
  success(password);
 }

 if(rePassword.value === ''){
  error(rePassword ,'Şifre tekrarı boş bırakılamaz.'); 
 } else {
  success(rePassword);
 }
 
});