export const toggleModalWindow = () => {
    const btnOpenModal = document.querySelectorAll('.modal-window__btn-open');
    const htmlWindow = document.querySelector('html');
    
    const modal = document.querySelector('.modal-window');

    const btnCloseModal = document.querySelectorAll('.modal-window__btn-close');

    const btnSuccessOrderCloseModal = document.querySelectorAll('.form__btn-action-success');

    let timeoutEvent;



    const openModalWindow = (modal) => {
        htmlWindow.classList.add('active');
        modal.classList.add('active');
        const modalWindowContent = modal.querySelector('.modal-window__content-order');
        modalWindowContent.classList.add('active');
    }

    const closeModalWindow = (modal) => {
        htmlWindow.classList.remove('active');
        modal.classList.remove('active'); 
        let orderWindow = modal.querySelector('.modal-window__content-order');
        let successWindow = modal.querySelector('.modal-window__content-success');
        timeoutEvent = setTimeout(() => {
            orderWindow.classList.add('active');
            successWindow.classList.remove('active');
        },1000)
    }

    const toggleModal = () => {
        clearTimeout(timeoutEvent);
        modal.classList.contains('active')
            ? closeModalWindow(modal)
            : openModalWindow(modal);
    }

    if (btnOpenModal) {
        btnOpenModal.forEach(item => item.addEventListener('click', toggleModal));
    }

    if (btnCloseModal) {
        btnCloseModal.forEach(item => item.addEventListener('click', toggleModal));
    }

    if (btnSuccessOrderCloseModal) {
        btnSuccessOrderCloseModal.forEach(item => item.addEventListener('click', () => {
            closeModalWindow(modal);
            
            
        }));
    }
}