class Slider {
  constructor(images, currentIndex = 0) {
    this._images = images;
    this._currentIndex = currentIndex;
  }

  get images() {
    return this._images;
  }

  get currentIndex() {
    return this._currentIndex;
  }

  set currentIndex(v) {
    if (Number.isInteger(v) && v >= 0) {
      this._currentIndex = v;
    } else {
      throw new Error('Error');
    }
  }

  get currentSlide() {
    return this._images[this._currentIndex];
  }

  next() {
    return (this._currentIndex + 1) % this._images.length;
  }

  prev() {
    return (this._currentIndex - 1 + this._images.length) % this._images.length;
  }
}