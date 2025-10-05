// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".main-nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#") {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  // Lazy load images
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.add("loaded");
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }
});

// Cart functionality
class CartDrawer {
  constructor() {
    this.cart = document.querySelector(".cart-drawer");
    this.init();
  }

  init() {
    document.querySelectorAll("[data-cart-trigger]").forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        this.open();
      });
    });
  }

  open() {
    if (this.cart) {
      this.cart.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  close() {
    if (this.cart) {
      this.cart.classList.remove("active");
      document.body.style.overflow = "";
    }
  }
}

// Initialize cart drawer
if (document.querySelector(".cart-drawer")) {
  new CartDrawer();
}
