function selector(s) {
  return document.querySelector(s);
}
selector("#hamburger").addEventListener("click", function () {
  this.classList.toggle("open");
  selector("header").classList.toggle("open");
  selector(".overlay").classList.toggle("open");
});

selector(".overlay").addEventListener("click", function () {
  if (this.classList.contains("open")) {
    selector(".hamburger").classList.remove(".open");
    selector("header").classList.remove("open");
    selector(".overlay").classList.remove("open");
  }
});
