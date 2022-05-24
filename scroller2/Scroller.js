class Scroller {
  constructor() {
    this.main = document.querySelector("#root");
    this.sections = document.querySelectorAll("section");
    this.nav = document.querySelectorAll("a");
    this.addListeners();

    this.currentSectionIndex = 0;

    this.checkcurrentSectionIndex();

    this.throttled = false;
    // this.navSectionIndex = 0;
    // this.navMoveToSection();
  }

  addListeners() {
    let navSectionIndex = 0;

    this.nav.forEach((a) => {
      const i = navSectionIndex;

      a.addEventListener("click", (event) => {
        event.preventDefault();

        console.log(i);
        this.moveToSection(i);

        this.toggleClass(i);
      });

      navSectionIndex++;
    });
  }

  scrollDirection(e) {
    const direction = e.wheelDelta < 0 ? 1 : -1;

    if (!this.throttled) {
      this.throttled = true;

      this.currentSectionIndex += direction;

      this.checkNumSection();
      this.moveToSection(this.currentSectionIndex);
      setTimeout(() => (this.throttled = false), 700);
    }
  }

  checkNumSection() {
    this.currentSectionIndex =
      this.currentSectionIndex < 0
        ? (this.currentSectionIndex = 0)
        : this.currentSectionIndex > 3
        ? (this.currentSectionIndex = 3)
        : (this.currentSectionIndex = this.currentSectionIndex);
  }

  checkcurrentSectionIndex() {
    this.sections.forEach((element) => {
      const top = Math.floor(element.getBoundingClientRect().top);
      const bottom = Math.floor(element.getBoundingClientRect().bottom);

      if (top === 0 && bottom === bottom - top) {
        this.currentSectionIndex = [...this.sections].indexOf(element);
      }
      console.log("current section num: " + this.currentSectionIndex);
    });
  }

  // navMoveToSection() {}

  moveToSection(num) {
    this.sections[num].scrollIntoView();
  }

  toggleClass(indexOfA) {
    console.log("dziala");
    this.nav.forEach((a) => a.classList.remove("active"));

    this.nav[indexOfA].classList.add("active");
  }
}
