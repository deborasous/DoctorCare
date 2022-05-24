function onScroll() {
    //let navMenu = document.querySelector('navigation')
    //if o scroll da tela for maior que 0 => colocar cor do backgound
    //else remove a cor do backgroud
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function openMenu() {
    document.body.classList.add('menuExpanded')
}

function closeMenu() {
    document.body.classList.remove('menuExpanded')
}


//o ScrollReveal vai jogar o menu para baixo do reveal('#') que está sendo chamado. Usar o Z-Index para puxar o menu para cima
ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 500,
}).reveal(`
#home h4, 
#home h1, 
#home p, 
#home .button,
#home img, 
#home #stats, 
#home stat h5, 
#home stat p, 
#service, 
#service header, 
#service .cards, 
#about h4, 
#about h2, 
#about p, 
#about img, 
#testimonial, 
#testimonial .testimonyCard, 
#contact`);

//SWIPER///
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        786: {
            slidesPerView: 2,
            setWrapperSize: true
        },
        1024: {
            slidesPerView: 3,
            setWrapperSize: true
        },
        1280: {
            slidesPerView: 4,
            setWrapperSize: true
        },
        1536: {
            slidesPerView: 5,
            setWrapperSize: true
        },
    },
    autoplay: {
        delay: 5000,
    },
});

