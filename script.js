const observer = new IntersectionObserver((entries) => {
    // Loop over the entries
    entries.forEach((entry) => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add("btn-move");
      }
    });
  });

  observer.observe(document.querySelector(".dif-btn"));


  const cardObserver = new IntersectionObserver((entries) => {
    // Loop over the entries
    entries.forEach((entry) => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add("guide-card-grow");
      }
    });
  });

  const cards = document.querySelectorAll(".guide-card");

  cards.forEach(card => cardObserver.observe(card));