document.addEventListener("DOMContentLoaded", async function (event) {
  const mt = document.querySelectorAll(".modal-trigger");
  const rt = () => mt.forEach((t) => (t.style.pointerEvents = "initial"));
  const dt = () => mt.forEach((t) => (t.style.pointerEvents = "none"));
  document.addEventListener("mousedown", async function (e) {
    if (
      Array.from(document.querySelectorAll(".modal-popup")).find(
        (e) => e.style.display == "block"
      )
    ) {
      dt();
      setTimeout(() => {
        if (
          !Array.from(document.querySelectorAll(".modal-popup")).find(
            (e) => e.style.display == "block"
          )
        )
          rt();
      }, 500);
    } else rt();
  });
});
