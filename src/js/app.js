import LazyLoad from 'vanilla-lazyload';
//import Swiper from 'swiper/bundle';
import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';
import { Fancybox } from "@fancyapps/ui";
//import "@fancyapps/ui/dist/fancybox/fancybox.css";
//import 'swiper/swiper-bundle.min.css';
//import 'swiper/swiper.min.css'
//import 'swiper/modules/pagination.min.css'
//import 'swiper/css';
//import 'swiper/swiper.scss';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
//import 'swiper/swiper-bundle.css';
import { isBrowserSupportWebp } from './modules/support-webp.js';
import { handleAttachFiles } from './modules/step-attaching-images-page.js';
import { Select } from './modules/step-client-page.js';
import { handleInputCodeSms, countDown } from './modules/window-agreement-page.js';
import { toggleModalWindow } from './modules/toggle-modal-window.js';
import { animCircleText } from './modules/animate-circle.js';
import { validInputs } from './modules/valid-inputs.js';
import { formHandle } from './modules/form-handle.js';
import { validateForm } from './modules/validate.js'
import { handleMobileMenu } from './modules/mobile-menu.js';


const swiper1 = new Swiper(".type-massage__swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    modules: [Navigation, Pagination],
    slidesPerView: 1.1,
    spaceBetween: 16,
    breakpoints: {
        576: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 2.5,
            spaceBetween: 30
        }
    }
});

const swiper2 = new Swiper(".team__swiper", {
    loop: true,
    pagination: {
        el: ".team__swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".team__swiper-button-next",
        prevEl: ".team__swiper-button-prev",
    },
    modules: [Navigation, Pagination],
    slidesPerView: 1.1,
    spaceBetween: 8,
    breakpoints: {
        576: {
            slidesPerView: 1.5,
            spaceBetween: 16
        },
        // 768: {
        //     slidesPerView: 2.06,
        //     spaceBetween: 16
        // },
        992: {
            slidesPerView: 2.5,
            spaceBetween: 16
        },
        1200: {
            slidesPerView: 3.2,
            spaceBetween: 16
        },
        1440: {
            slidesPerView: 4.08,
            spaceBetween: 16
        }
    }
});


const swiper3 = new Swiper(".blog__swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
        nextEl: ".blog__swiper-button-next",
        prevEl: ".blog__swiper-button-prev",
    },
    modules: [Navigation, Pagination],
    slidesPerView: 1.1,
    spaceBetween: 16,
    breakpoints: {
        576: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 2.5,
            spaceBetween: 30
        }
    }
});

Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options
  });

  Fancybox.bind('[data-fancybox="gallery-b"]', {
    // Custom options for the second gallery
  });



isBrowserSupportWebp();
handleAttachFiles();
handleInputCodeSms();
countDown();
toggleModalWindow();

animCircleText();
validInputs();
formHandle();
validateForm();
handleMobileMenu();

let myLazyLoad = new LazyLoad();
myLazyLoad.update();

const dataInSelect = [
    {
        id: 0,
        value: 'Мужской'
    },
    {
        id: 1,
        value: 'Женский'
    }
]

const select = new Select('#select', {
    title: 'Пол',
    placeholder: 'Выберите пол',
    data: dataInSelect,
});



