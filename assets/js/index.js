'use strict';

const imagesDB = [
  'https://previews.123rf.com/images/boligolovag/boligolovag2002/boligolovag200200560/140502050-aerial-wide-angle-panorama-of-zell-am-see-and-kaprun-tourist-resort-with-sunny-alp-mountain-summits-.jpg',
  'https://image.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg',
  'https://posta-magazine.ru/wp-content/uploads/2020/09/main_sounds-of-the-forest_posta-magazine.jpg'
];

const slider = new Slider(imagesDB);
const img = document.querySelector('.slide>img');
const [prevButton, nextButton] = document.querySelectorAll(
  '.slider-container>button'
);

function updateView() {
  img.setAttribute('src', slider.currentSlide);
}
updateView();

nextButton.addEventListener('click', () => {
  slider.currentIndex = slider.next();
  updateView();
});

prevButton.addEventListener('click', () => {
  slider.currentIndex = slider.prev();
  updateView();
});