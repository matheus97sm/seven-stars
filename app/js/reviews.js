export default function reviews() {
  const reviewWrapper = document.querySelector('.reviews-wrapper');
  const reviewCarousel = document.querySelector('.reviews-carousel');
  const reviewsArray = document.querySelectorAll('.review');
  const starsWrapper = document.querySelectorAll('.review-stars');
  const buttonLeft = document.querySelector('.reviews-left');
  const buttonRight = document.querySelector('.reviews-right');
  const carouselInfo = {
    reviewWrapperWidthSize: !!reviewWrapper && reviewWrapper.getBoundingClientRect().width,
    actualReview: 0,
    mouseHover: false
  };

  if (reviewsArray.length === 0 || !buttonLeft || !buttonRight) return null;

  reviewsArray[0].classList.add('active');

  reviewsArray.forEach((review, index) => {
    const stars = review.getAttribute('data-stars');
    const negativeStars = 5 - stars;

    for (let i = 0; i < stars; i++) {
      const filledStar = document.createElement('img');
      filledStar.setAttribute('src', `${template_URL}/img/src/star.svg`);

      starsWrapper[index].appendChild(filledStar);
    }

    for (let i = 0; i < negativeStars; i++) {
      const outlineStar = document.createElement('img');
      outlineStar.setAttribute('src', `${template_URL}/img/src/star_outline.svg`);

      starsWrapper[index].appendChild(outlineStar);
    }
    
    review.style.setProperty('width', `${carouselInfo.reviewWrapperWidthSize}px`);
  });

  reviewCarousel.style.setProperty(
    'width', 
    `${(carouselInfo.reviewWrapperWidthSize * reviewsArray.length) + (32 * (reviewsArray.length - 1))}px`
  );
  reviewWrapper.style.setProperty('height', `${reviewsArray[0].getBoundingClientRect().height}px`);

  buttonLeft.addEventListener('click', e => {
    const { actualReview, reviewWrapperWidthSize } = carouselInfo;

    carouselInfo.actualReview = actualReview === 0 ? reviewsArray.length - 1 : actualReview - 1;

    reviewCarousel.style.setProperty('transform', `translate3d(-${(reviewWrapperWidthSize + 32) * carouselInfo.actualReview}px, 0, 0)`);
    reviewWrapper.style.setProperty('height', `${reviewsArray[carouselInfo.actualReview].getBoundingClientRect().height}px`);
  });

  buttonRight.addEventListener('click', e => {
    const { actualReview, reviewWrapperWidthSize } = carouselInfo;

    carouselInfo.actualReview = actualReview === reviewsArray.length - 1 ? 0 : actualReview + 1;

    reviewCarousel.style.setProperty('transform', `translate3d(-${(reviewWrapperWidthSize + 32) * carouselInfo.actualReview}px, 0, 0)`);
    reviewWrapper.style.setProperty('height', `${reviewsArray[carouselInfo.actualReview].getBoundingClientRect().height}px`);
  });

  reviewWrapper.addEventListener('mouseenter', () => {
    carouselInfo.mouseHover = true;
  });

  reviewWrapper.addEventListener('mouseleave', () => {
    carouselInfo.mouseHover = false;
  });

  const carouselAutomatic = window.setInterval(() => {
    const { actualReview, reviewWrapperWidthSize, mouseHover } = carouselInfo;

    if (!mouseHover) {
      carouselInfo.actualReview = actualReview === reviewsArray.length - 1 ? 0 : actualReview + 1;

      reviewCarousel.style.setProperty('transform', `translate3d(-${(reviewWrapperWidthSize + 32) * carouselInfo.actualReview}px, 0, 0)`);
      reviewWrapper.style.setProperty('height', `${reviewsArray[carouselInfo.actualReview].getBoundingClientRect().height}px`);
    }
  }, 5000);

  window.addEventListener('resize', () => {
    carouselInfo.reviewWrapperWidthSize = reviewWrapper.getBoundingClientRect().width;

    reviewsArray.forEach(review => {
      review.style.setProperty('width', `${carouselInfo.reviewWrapperWidthSize}px`);
    });

    reviewCarousel.style.setProperty(
      'width', 
      `${(carouselInfo.reviewWrapperWidthSize * reviewsArray.length) + (32 * (reviewsArray.length - 1))}px`
    );
    reviewWrapper.style.setProperty('height', `${reviewsArray[carouselInfo.actualReview].getBoundingClientRect().height}px`);
  });
}

