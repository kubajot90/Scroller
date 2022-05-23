document.addEventListener("DOMContentLoaded", function () {
  const rootElement = document.querySelector("#root");
  const sections = document.querySelectorAll("section");

  document.addEventListener("mousewhell", function (event) {
    console.log(event.wheelDelta);
  });
});
