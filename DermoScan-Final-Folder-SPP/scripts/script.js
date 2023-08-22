require(['jquery', 'slick'], function ($) {
  $(document).ready(function () {
    $('.es-slick-carousel').slick({
      dots: true,
      infinite: true,
      prevArrow: '.slick-button-prev',
      nextArrow: '.slick-button-next',
      appendDots: '.slick-pagination',
      adaptiveHeight: true,
    });
  });

  $(document).ready(function () {
    $('.es-slick-carousel-2').slick({
      dots: true,
      infinite: true,
      prevArrow: '.slick-button-2-prev',
      nextArrow: '.slick-button-2-next',
      appendDots: '.slick-pagination-2',
      adaptiveHeight: true,
    });
  });
});

const accTab = document.querySelectorAll('.acc-tab');

for (let i = 0; i < accTab.length; i++) {
  accTab[i].addEventListener('click', function () {
    this.classList.add('active');
    let accTabContent = this.nextElementSibling;
    const hideContent = () => {
      accTabContent.style.maxHeight = null;
      this.classList.remove('active');
    };
    const showContent = () => {
      accTabContent.style.maxHeight = accTabContent.scrollHeight + 'px';
      this.classList.add('active');
    };
    if (accTabContent.style.maxHeight) {
      hideContent();
    } else {
      showContent();
    }
  });
}
