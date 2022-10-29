const counterEl = document.querySelector("#counter");


function counterChange(type) {
  switch (type) {
    case "increment":
      counterEl.dispatchEvent(
        new CustomEvent("counter-change", {
          detail: {
            count: Number(counterEl.innerHTML) + 1,
          },
        })
      );
      break;
    case "decrement":
      counterEl.dispatchEvent(
        new CustomEvent("counter-change", {
          detail: {
            count: Number(counterEl.innerHTML) - 1,
          },
        })
      );
    default:
      break;
  }
}


counterEl.addEventListener("counter-change", (e) => {
  e.target.innerHTML = e.detail.count;
});
