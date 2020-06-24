if (document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", ready())
} else {
  ready();
}

function ready() {
  // let overlays = Array.from(document.getElementsByClassName("overlay-test"));
  let cards = Array.from(document.getElementsByClassName("card"));

}