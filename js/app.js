document.addEventListener("DOMContentLoaded", () => {
  /**
   * How it works
   */
  const tabItems = document.querySelectorAll(".tabs__item");
  const imageWrappers = document.querySelectorAll(".image-wrapper");

  // Show first image wrapper by default
  imageWrappers[0].classList.add("active");

  tabItems.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      tabItems.forEach((item) => item.classList.remove("active"));

      // Add active class to clicked tab
      tab.classList.add("active");

      // Get the tab number from data-tab attribute
      const tabNumber = tab.getAttribute("data-tab");

      // Remove active class from all image wrappers
      imageWrappers.forEach((wrapper) => {
        wrapper.classList.remove("active");
      });

      // Add active class to corresponding image wrapper
      const activeImage = document.querySelector(
        `.image-wrapper[data-tab="${tabNumber}"]`
      );
      activeImage.classList.add("active");
    });
  });

  /**
   * Testimonials
   */
  const swiper = new Swiper(".swiper", {
    // effect: "cube",
    // effect: "fade",
    // effect: "coverflow",
    // effect: "cards",
    loop: true,
    effect: "fade",
    speed: 700,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /**
   * Mobile menu
   */
  const mobileMenu = document.querySelector(".site-header__nav");
  const mobileMenuIcon = document.querySelector(".mobile-menu__trigger");

  mobileMenuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuIcon.contains(e.target)) {
      mobileMenu.classList.remove("active");
    }
  });

  /**
   * Scroll Reveal
   */
  const sr = ScrollReveal({
    distance: "60px",
    duration: 1500,
    delay: 400,
    reset: false,
    mobile: true,
  });

  const isMobile = window.innerWidth <= 820;
  const getOrigin = (defaultOrigin) => (isMobile ? "bottom" : defaultOrigin);

  // Hero section
  sr.reveal(".hero__content", {
    origin: "bottom",
    delay: 200,
  });

  // Our Vision section
  sr.reveal(".our-vision .col1-2:first-child", {
    origin: getOrigin("left"),
    delay: 300,
  });
  sr.reveal(".our-vision .col1-2:last-child", {
    origin: getOrigin("right"),
    delay: 300,
  });

  // Properties
  sr.reveal(".property", {
    origin: "bottom",
    interval: 200, // Creates a nice stagger effect
  });

  // Features
  sr.reveal(".feature", {
    origin: "bottom",
    interval: 200,
  });

  // Our Mission
  sr.reveal(".our-mission__image", {
    origin: getOrigin("left"),
    delay: 300,
  });
  sr.reveal(".our-mission__text", {
    origin: getOrigin("right"),
    delay: 300,
  });

  // How it works
  sr.reveal(".tabs__item", {
    origin: getOrigin("right"),
    interval: 200,
  });
  sr.reveal(".how-it-works__content .col1-2:last-child", {
    origin: "bottom",
    interval: 200,
  });

  // Why choose us
  sr.reveal(".why-choose-us__content", {
    origin: getOrigin("right"),
    delay: 200,
  });

  // Testimonials
  sr.reveal(".testimonials__content", {
    origin: "bottom",
    delay: 200,
  });

  // Blogs
  sr.reveal(".blog", {
    origin: "bottom",
    interval: 200,
  });
});
