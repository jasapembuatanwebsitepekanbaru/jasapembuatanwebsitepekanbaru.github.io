// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Back to Top Button
const backToTopBtn = document.getElementById("back-to-top");

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

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    // Close mobile menu if open
    if (mobileMenu) {
      mobileMenu.classList.add("hidden");
    }
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
