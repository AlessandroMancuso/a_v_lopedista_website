// GESTIONE BANNER GDPR
setTimeout(function () {
  document.getElementById("banner-privacy").classList.add("show");
}, 1000);

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

scrollToAnchor = (anchor) => {
  document.getElementById(anchor).scrollIntoView({
    behavior: "smooth",
  });
}

navigateFromMobileMenu = (anchor) => {
  closeNav();
  scrollToAnchor(anchor);
}

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