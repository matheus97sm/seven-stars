export default function openMenu() {
  const header = document.querySelector('.header');
  const menuHamb = document.querySelector('[data-menu="button"]');
  const closeButton = document.querySelector('[data-menu="close"]');
  const menu = document.querySelector('[data-menu="menu"]');

  if (!menuHamb || !menu) return null;

  menuHamb.addEventListener('click', e => {
    e.preventDefault();

    menu.classList.add('active');
    window.document.body.style.setProperty('overflow', 'hidden');
  });

  closeButton.addEventListener('click', e => {
    e.preventDefault();

    menu.classList.remove('active');
    window.document.body.style.setProperty('overflow', 'scroll');
  });

  window.addEventListener('scroll', e => {
    if (window.pageYOffset > 300)
      header.classList.add('active');
    else
      header.classList.remove('active');
  });
}
