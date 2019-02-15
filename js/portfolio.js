
// Code for panel toggle on index.html

var panels = document.querySelectorAll(".panel");
function toggleView() {
    this.classList.toggle("open");
}

function toggleText(e) {
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
    }
}

panels.forEach(panel => panel.addEventListener("click", toggleView));
panels.forEach(panel => panel.addEventListener("transitionend", toggleText));

// ============================================================================