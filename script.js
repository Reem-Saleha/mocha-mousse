const header = document.getElementById("site-header");
const filters = document.querySelectorAll(".menu-filter");
const items = document.querySelectorAll(".menu-item");
const checkMenuButton = document.getElementById("check-menu");
const orderButtons = document.querySelectorAll("[data-order]");
const directionsButton = document.querySelector("[data-directions]");
const membershipButton = document.querySelector("[data-membership]");
const socialButtons = document.querySelectorAll("[data-social]");
const contactForm = document.getElementById("contact-form");
const successMessage = document.getElementById("form-success");

const setActiveFilter = (button) => {
  filters.forEach((btn) => {
    btn.classList.remove("bg-[var(--mocha)]", "text-white");
    btn.classList.add("text-[var(--mocha)]");
  });
  button.classList.add("bg-[var(--mocha)]", "text-white");
  button.classList.remove("text-[var(--mocha)]");
};

const filterMenu = (category) => {
  items.forEach((item) => {
    const match = category === "all" || item.dataset.category === category;
    if (match) {
      item.classList.remove("hidden-item");
    } else {
      item.classList.add("hidden-item");
    }
  });
};

filters.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveFilter(button);
    filterMenu(button.dataset.filter);
  });
});

const onScroll = () => {
  if (window.scrollY > 40) {
    header.classList.add("bg-white/90", "backdrop-blur", "sticky-shadow");
  } else {
    header.classList.remove("bg-white/90", "backdrop-blur", "sticky-shadow");
  }
};

if (checkMenuButton) {
  checkMenuButton.addEventListener("click", () => {
    const target = document.getElementById("menu");
    target?.scrollIntoView({ behavior: "smooth" });
  });
}

orderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (window.Swal) {
      window.Swal.fire({
        title: "Order Received!",
        text: "Demo only — your coffee is brewing.",
        icon: "success",
        confirmButtonText: "Sweet!",
        confirmButtonColor: "#6f4e37",
        background: "#f6efe6",
      });
    } else {
      alert("Order Received! (Demo Only)");
    }
  });
});

if (directionsButton) {
  directionsButton.addEventListener("click", () => {
    const target = document.getElementById("map");
    target?.scrollIntoView({ behavior: "smooth" });
    if (window.Swal) {
      window.Swal.fire({
        title: "Opening Map",
        text: "Demo only — use the embedded map below.",
        icon: "info",
        confirmButtonText: "Got it",
        confirmButtonColor: "#6f4e37",
        background: "#f6efe6",
      });
    }
  });
}

if (membershipButton) {
  membershipButton.addEventListener("click", () => {
    if (window.Swal) {
      window.Swal.fire({
        title: "Membership Started!",
        text: "Demo only — subscription flow would start here.",
        icon: "success",
        confirmButtonText: "Nice!",
        confirmButtonColor: "#6f4e37",
        background: "#f6efe6",
      });
    } else {
      alert("Membership Started! (Demo Only)");
    }
  });
}

socialButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const platform = button.dataset.social || "Social";
    if (window.Swal) {
      window.Swal.fire({
        title: `${platform} Link` ,
        text: "Demo only — add your real social URL here.",
        icon: "info",
        confirmButtonText: "Okay",
        confirmButtonColor: "#6f4e37",
        background: "#f6efe6",
      });
    } else {
      alert(`${platform} link (Demo Only)`);
    }
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactForm.reset();
    if (successMessage) {
      successMessage.classList.add("visible");
      setTimeout(() => successMessage.classList.remove("visible"), 4000);
    }
  });
}

setActiveFilter(filters[0]);
filterMenu("all");
window.addEventListener("scroll", onScroll);
