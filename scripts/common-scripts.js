
// GESTIONE BANNER GDPR
// setTimeout(function () {
//   document.getElementById("banner-privacy").classList.add("show");
// }, 1000);

// ANIMATIONS
document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".animate-element");

  const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add("visible");
      } else {
        box.classList.remove("visible");
      }
    });
  };

  window.addEventListener("scroll", checkBoxes);

  checkBoxes();
});

// GESTIONE MENU MOBILE
openNav = () => {
  let overlay = document.getElementById("myNav");
  overlay.style.animation = "expand 0.5s forwards";
}

closeNav = () => {
  let overlay = document.getElementById("myNav");
  overlay.style.animation = "contract 0.5s forwards";

  setTimeout(() => {
    overlay.style.height = "0";
    overlay.style.width = "0";
  }, 500);
}

// SMOOTH SCROLL BEHAVIOur
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substr(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// TOOLTIP
document.addEventListener("DOMContentLoaded", () => {
  const iconContainer = document.querySelector('.icon-container');
  const tooltip = document.querySelector('.tooltip');

  iconContainer.addEventListener('mouseover', () => {
      tooltip.style.visibility = 'visible';
      tooltip.style.opacity = '1';
  });

  iconContainer.addEventListener('mouseout', () => {
      tooltip.style.visibility = 'hidden';
      tooltip.style.opacity = '0';
  });
});

// BACK TO TOP
const btnScrollToTop = document.querySelector(".back-to-top-btn");

// scroll to top of page when button clicked
btnScrollToTop.addEventListener("click", e => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

// toggle 'scroll to top' based on scroll position
window.addEventListener('scroll', e => {
  btnScrollToTop.style.display = window.scrollY > 50 ? 'block' : 'none';
});

topFunction = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}