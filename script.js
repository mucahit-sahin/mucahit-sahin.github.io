const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panelClose();
    panel.classList.add("active");
  });
});

function panelClose() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
