const swiperOne = new Swiper('.swiper-one', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    spaceBetween: 100,
    slidesPerView: "auto",
    centeredSlides: true,
    initialSlide: 2,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// swiperOne.slideTo(3, 100, false);

const swiperTwo = new Swiper('.swiper-two', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    slidesPerView: "auto",
    effect: "coverflow",
    grabCursor: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    centeredSlides: true,
    initialSlide: 2,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// swiperTwo.slideTo(3, 100, false);