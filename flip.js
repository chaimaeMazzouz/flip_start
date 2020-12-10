var go = document.getElementById("switch-page");
go.onclick = function () {
  myFlip();
};
function myFlip() {
  go.style.transform = "rotateY(180deg)";
}
