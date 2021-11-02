'use strict';

const imagesDB = [
  'https://previews.123rf.com/images/boligolovag/boligolovag2002/boligolovag200200560/140502050-aerial-wide-angle-panorama-of-zell-am-see-and-kaprun-tourist-resort-with-sunny-alp-mountain-summits-.jpg',
  'https://images.vivino.com/thumbs/87V1aok6Scu9tnTHm7_OuA_pb_x600.png',
  'https://img.cliparto.com/pic/xl/170570/3005382-square-seamless-blue-texture.jpg',
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