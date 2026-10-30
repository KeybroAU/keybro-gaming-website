import "@fontsource/barlow/latin-400";
import "@fontsource/barlow/latin-500";
import "@fontsource/barlow/latin-600";
import "@fontsource/barlow-condensed/latin-500";
import "@fontsource/barlow-condensed/latin-600";
import "@fontsource/barlow-condensed/latin-700";
import "@fontsource/big-shoulders-stencil-display/latin-700";
import "@fontsource/big-shoulders-stencil-display/latin-800";
import "./styles.css";

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

if (toggle && nav) {
  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}

document.querySelectorAll(".copy-ip").forEach((button) => {
  const label = button.textContent;
  button.addEventListener("click", async () => {
    const value = button.getAttribute("data-copy") || "";
    try {
      await navigator.clipboard.writeText(value);
      button.textContent = "Copied";
    } catch {
      const code = document.getElementById("server-ip");
      if (code) {
        const range = document.createRange();
        range.selectNodeContents(code);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      }
      button.textContent = "Selected";
    }
    window.setTimeout(() => {
      button.textContent = label;
    }, 1600);
  });
});
