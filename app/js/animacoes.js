export default function animacoes() {
  const animaItem = document.querySelectorAll("[data-animar]");

  animaItem.forEach(item => {
    if (item.getBoundingClientRect().top < window.innerHeight)
      return item.classList.add("anime");

    window.addEventListener("scroll", e => {
      const distTop = window.innerHeight * 0.85;

      if (item.getBoundingClientRect().top < distTop)
        item.classList.add("anime");
    });
  });

  const animarComTempo = document.querySelectorAll("[data-anima-tempo]");

  window.setTimeout(() => {
    animarComTempo.forEach(item => {
      item.classList.add("anime");
    });
  }, 500);
}
