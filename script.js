const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navbar.classList.toggle("hidden");
});

// menutup sidebar nav diluar kotak
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.add("hidden");
    hamburger.classList.remove("hamburger-active");
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
