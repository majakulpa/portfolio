// get the element to animate

let myBars = [bar1, bar2, bar3, bar4, bar5, bar6, bar7, bar8];

for (i = 0; i < myBars.length; i++) {
  document.getElementById(myBars[i]);
}

let element = document.getElementById("skills");
let elementHeight = element.clientHeight;

// listen for scroll event and call animate function
document.addEventListener("scroll", animate);

// check if element is in view
function inView() {
  // get window height
  let windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  let scrollY = window.scrollY || window.pageYOffset;

  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  let scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  let elementPosition =
    element.getBoundingClientRect().top + scrollY + elementHeight;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

// animate element when it is in view
function animate() {
  // is element in view?
  if (inView()) {
    // element is in view, add class to element
    let bars = [bar1, bar2, bar3, bar4, bar5, bar6, bar7, bar8];

    for (i = 0; i < bars.length; i++) {
      bars[i].classList.add("animate");
    }
  }
}

animate();
