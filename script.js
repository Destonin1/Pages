const form = document.getElementById('form-block');
const modal = document.getElementsByClassName('modal')[0];
const modalWrap = document.getElementsByClassName('modal__wrap')[0];

form.addEventListener('submit', event => {
  event.preventDefault();
  callModal("Confirm","Thank you for choosing us!");
})

const closeBtns = document.getElementsByClassName('modal-close');
for (let i = 0; i < closeBtns.length;i++) {
  closeBtns[i].addEventListener('click', event => {
    modalWrap.classList.remove('modal__wrap-active');
    setTimeout(transForm,300);
  })
}

const orderBtns = document.getElementsByClassName('order-btn');
for (let i = 0; i < orderBtns.length;i++) {
    orderBtns[i].addEventListener('click', event => {
        console.log(1);
        callModal("Confirm","Sorry but this is just a demo.");
      })
}

function callModal(titleText, contentText) {
  const title = document.getElementsByClassName('modal__title')[0];
  const content = document.getElementsByClassName('modal__content')[0];
  title.textContent = titleText;
  content.textContent = contentText;
  modal.style.transform = 'scale(1)';
  modalWrap.classList.add('modal__wrap-active');
}

function transForm() {
  modal.style.transform = 'scale(0)';
}

function toggleMenu() {
  if (window.innerWidth < 851) {
    menuLinks.classList.toggle('menu-phone');
    menuBurger.classList.toggle('menu-close');
    document.body.classList.toggle('stop-scrolling');
  }
}

const menuLinks = document.getElementsByClassName('menu__links')[0];
const menuBurger = document.getElementsByClassName('menu-burger')[0];
menuBurger.addEventListener('click' , toggleMenu)


menuLinks.addEventListener('click' , toggleMenu)