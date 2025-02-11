// Form ve input elementlerini seçiyoruz
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const rePassword = document.getElementById("rePassword");

// Hata durumunda çalışacak fonksiyon
// input: hatalı form elementi
// message: gösterilecek hata mesajı
function error(input, message) {
  input.className = "form-control is-invalid"; // Bootstrap hata class'ını ekliyoruz
  const div = input.nextElementSibling; // Input'tan sonraki elementi seçiyoruz
  div.innerText = message; // Hata mesajını yazıyoruz
  div.className = "invalid-feedback"; // Bootstrap hata mesajı class'ını ekliyoruz
}

// Başarılı durumda çalışacak fonksiyon
// input: geçerli form elementi
function success(input) {
  input.className = "form-control is-valid"; // Bootstrap başarılı class'ını ekliyoruz
}

// Email kontrolü yapan fonksiyon
// input: kontrol edilecek email input elementi
function chechEmail(input) {
  // Email formatını kontrol eden regex deseni
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Email regex kontrolü
  if (emailRegex.test(input.value.trim())) {
    success(input);
    return true;
  } else {
    error(input, "Geçerli bir email adresi giriniz");
    return false;
  }
}

// Boş alan kontrolü yapan fonksiyon
// input: kontrol edilecek input elementleri dizisi
chechRequired = (input) => {
  input.forEach(function(input) {
    // Her input için boş olup olmadığını kontrol ediyoruz
    if (input.value === "") {
      error(input, `${input.id} boş bırakılamaz.`);
    } else {
      success(input);
    }
  });
};

function chechLength(input,min,max){
  if(input.value.length < min){
    error(input, `${input.id} en az ${min} karakter olmalıdır.`);
  }else if(input.value.length > max){
    error(input, `${input.id} en fazla ${max} karakter olmalıdır.`);
  }else{
    success(input);
  }
}
function chechPasswords(input1,input2){
  if(input1.value !== input2.value){
    error(input2, "Parolalar eşleşmiyor.");
  }
}

function chechPhone(input){
  const phoneRegex = /^\d{10}$/;
  if(phoneRegex.test(input.value.trim())){
    success(input);
  }else{
    error(input, "Geçerli bir telefon numarası giriniz");
  }
}
// Form gönderildiğinde çalışacak event listener
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Formun varsayılan gönderim davranışını engelliyoruz

  // Tüm kontrolleri yapıyoruz
  chechRequired([username, email, password, rePassword]); // Boş alan kontrolü
  chechEmail(email); // Email format kontrolü
  chechLength(username,7,15);
  chechLength(password,6,12);
  chechPasswords(password,rePassword);
   chechPhone(phone);
});

