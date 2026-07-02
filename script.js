// Hotel Paradise - script.js

// 1. Mobile navigation menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
}

// 2. Booking form validation (contact.html)
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const roomType = document.getElementById("roomType").value;
    const checkin = document.getElementById("checkin").value;
    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || phone === "" || roomType === "" || checkin === "") {
      formMessage.style.color = "red";
      formMessage.textContent = "Please fill all required fields.";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      formMessage.style.color = "red";
      formMessage.textContent = "Please enter a valid email address.";
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      formMessage.style.color = "red";
      formMessage.textContent = "Please enter a valid 10-digit mobile number.";
      return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Thank you " + name + "! Your booking request has been received. Our team will contact you shortly.";
    bookingForm.reset();
  });
}

// 3. Room cost calculator (rooms.html)
function calculateCost() {
  const roomSelect = document.getElementById("roomSelect");
  const nightsInput = document.getElementById("nightsCount");
  const costResult = document.getElementById("costResult");
  if (!roomSelect || !nightsInput || !costResult) return;

  const price = Number(roomSelect.value);
  const nights = Number(nightsInput.value);

  if (nights <= 0) {
    costResult.style.color = "red";
    costResult.textContent = "Please enter a valid number of nights.";
    return;
  }

  const total = price * nights;
  costResult.style.color = "green";
  costResult.textContent = "Estimated Total Cost: ₹" + total.toLocaleString("en-IN");
}

// 4. Gallery filter (gallery.html)
function filterGallery(category) {
  const items = document.querySelectorAll(".gallery-item");
  items.forEach(function (item) {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}