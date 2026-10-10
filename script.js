// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const siteHeader = document.querySelector(".site-header");

function setMobileMenuOpen(isOpen) {
  if (!menuBtn || !mobileMenu) return;

  mobileMenu.classList.toggle("is-open", isOpen);
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  mobileMenu.inert = !isOpen;
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  menuBtn.setAttribute(
    "aria-label",
    isOpen ? "Tutup menu navigasi" : "Buka menu navigasi",
  );
}

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    setMobileMenuOpen(menuBtn.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuBtn.getAttribute("aria-expanded") === "true") {
      setMobileMenuOpen(false);
      menuBtn.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      menuBtn.getAttribute("aria-expanded") === "true" &&
      !mobileMenu.contains(event.target) &&
      !menuBtn.contains(event.target)
    ) {
      setMobileMenuOpen(false);
    }
  });

  window.matchMedia("(min-width: 1024px)").addEventListener("change", (event) => {
    if (event.matches) setMobileMenuOpen(false);
  });
}

if (siteHeader) {
  const updateHeaderOnScroll = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  updateHeaderOnScroll();
  window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
}

// Back to Top Button
const backToTopBtn = document.getElementById("back-to-top");

if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.remove("opacity-0", "invisible");
      backToTopBtn.classList.add("opacity-100", "visible");
    } else {
      backToTopBtn.classList.remove("opacity-100", "visible");
      backToTopBtn.classList.add("opacity-0", "invisible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      return;
    }

    // Close mobile menu if open
    setMobileMenuOpen(false);
  });
});

// Form submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah form dari reload halaman

  // Tangkap nilai dari input
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value.trim();
  const message = document.getElementById("message").value.trim();

  // Format pesan
  const whatsappMessage = `Halo! Saya ingin konsultasi dengan detail berikut:\n\nNama: ${name}\nEmail: ${email}\nNo HP: ${phone}\nLayanan: ${service}\nPesan: ${message}`;

  // Encode URL untuk WhatsApp
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappNumber = "6281365036634";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  // Arahkan ke WhatsApp
  window.open(whatsappURL, "_blank");
});
