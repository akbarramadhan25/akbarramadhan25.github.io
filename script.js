const hamburger = document.getElementById('hamburger')
const navbar = document.getElementById('nav-menu')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active')
    navbar.classList.toggle('hidden')
})



window.onscroll = function () {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop

    if ( window.pageYOffset > fixedNav ) {
        header.classList.add('navbar-fixed')
    }else {
        header.classList.remove( 'navbar-fixed' )
    }
}


const button = document.getElementById('button')


button.addEventListener('click', function() {
    Swal.fire({
        title: 'Yeay!',
        text: 'Your massage has been sent to akbar',
        icon: 'succes',
        confirmButtonText: 'OK'
    })
})



