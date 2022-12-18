const accordionsButtons = document.querySelectorAll(".accordion .open-btn");

for (let i = 0; i < accordionsButtons.length; i++) {
  accordionsButtons[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
