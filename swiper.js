class Swiper {
  constructor() {
    this.initialY = null;
    this.initialY = null;

    document.addEventListener("touchstart", () => this.startTouch);
    document.addEventListener("touchmove", () => this.moveTouch);

    this.events = {
      swipeUp: new Event("swipeUp"),
      swipeDown: new Event("swipeDown"),
      swipeLeft: new Event("swipeLeft"),
      swipeRight: new Event("swipeRight"),
    };
  }

  startTouch(event) {
    event.preventDefault();

    this.initialY = event.touches[0].clientX;
    this.initialX = event.touches[0].clientY;
  }

  moveTouch() {
    if (!this.initialX || !this.initialY) return;

    const currentX = event.touches[0].clientX;
    const currentY = event.touches[0].clientY;

    const diffX = this.initialX - currentX;
    const diffY = this.initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      //os X
      if (diffX > 0) {
        //w lewo
        document.dispatchEvent(this.events.swipeLeft);
      } else {
        //w prawo
        document.dispatchEvent(this.events.swipeRight);
      }
    } else {
      //os Y
      if (diffY > 0) {
        //do góry
        document.dispatchEvent(this.events.swipeUp);
      } else {
        //do dołu
        document.dispatchEvent(this.events.swipeDown);
      }
    }
  }
}

new Swiper();
