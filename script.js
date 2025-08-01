document.querySelectorAll(".accordion-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

    // Close all others
    document.querySelectorAll(".accordion-content").forEach(c => {
      c.style.maxHeight = null;
      c.previousElementSibling.textContent = "View More";
    });

    // If not open already, open it
    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
      button.textContent = "Hide";
    }
  });
});
