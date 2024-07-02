const menuToggle = document.querySelector(".menu-toggle");
const list = document.querySelector(".list-items");

menuToggle.addEventListener("click", function () {
  this.classList.toggle("hamburger-active");
  list.classList.toggle("top-16");
});

document.addEventListener("click", function (e) {
  if (!menuToggle.contains(e.target) && !list.contains(e.target)) {
    list.classList.remove("top-16");
    menuToggle.classList.remove("hamburger-active");
  }
});

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

const button = document.getElementById("button");

// button.addEventListener('click', function() {
// Swal.fire({
//     title: 'Yeay!',
//     text: 'Pesanmu sudaa terkirim ke akbar',
//     icon: 'succes',
//     showConfirmButton : true,
//     confirmButtonText: 'OK'
// })
// })

document.addEventListener("DOMContentLoaded", function () {
  // Temukan formulir dan tombol
  const form = document.querySelector("form");
  const submitButton = document.querySelector('button[type="submit"]');

  // Tambahkan event listener untuk meng-handle submit form
  form.addEventListener("submit", function () {
    // Cek apakah input dan textarea diisi
    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email").value;
    const messageInput = document.getElementById("message").value.trim();

    if (!nameInput || !emailInput || !messageInput) {
      // Jika salah satu input atau textarea kosong, munculkan alert
      Swal.fire({
        title: "Oops!",
        text: "kolomnya diisi semua dong",
        icon: "error",
        showConfirmButton: true,
        confirmButtonText: "OK",
      });
    } else {
      // Jika semuanya terisi, tambahkan logika pengiriman formulir di sini (jika diperlukan)
      // Contoh: form.submit();
      Swal.fire({
        title: "Yeay!",
        text: "Pesanmu sudaa terkirim ke akbar",
        icon: "success",
        showConfirmButton: true,
        confirmButtonText: "OK",
      });
    }
  });
});

const input = document.getElementById("myinput");
input.addEventListener("click", () => {
  if (input.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});

const myText = ['Frontend Engineer', 'UI/UX Designer']
let text = 0
let indexCharacterText = 0
let letter = ''
let currentText = ''

function type() {
  if (text == myText.length) {
    text = 0
  }

  currentText = myText[text]

  letter = currentText.slice(0, ++indexCharacterText)

  document.getElementById('title').textContent = letter

  if(letter.length == currentText.length) {
    text++
    indexCharacterText = 0
    setTimeout(type, 2000)
  }else {
    setTimeout(type, 200)
  }
  
}
type()

