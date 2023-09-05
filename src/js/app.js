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
import LazyLoad from "vanilla-lazyload";

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

