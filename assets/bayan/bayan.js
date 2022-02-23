/**
 * @bayan
 */
const bayans = [...document.querySelectorAll(".bayan")];
const bayanOpenedClass = "bayan--opened";

function toggleBayan(
  bayanTop,
  bayanBottom,
  bayanOpenedClass,
  bayanBottomHeight
) {
  if (bayanTop.parentElement.classList.value.includes(bayanOpenedClass)) {
    bayanBottom.style.maxHeight = "0";
    bayanTop.parentElement.classList.remove(bayanOpenedClass);
  } else {
    let heightModifier = 20;
    if (window.innerWidth < 575) heightModifier = 70;

    bayanBottom.style.maxHeight = `${bayanBottomHeight + heightModifier}px`;
    bayanTop.parentElement.classList.add(bayanOpenedClass);
  }
}

if (bayans.length > 0) {
  bayans.forEach((bayan, index) => {
    let currentBayanTop = undefined;
    let currentBayanBottom = undefined;

    const bayanChildren = bayan.children;
    console.log(bayanChildren);

    currentBayanTop = bayan.querySelector(".bayan__top");
    currentBayanBottom = bayan.querySelector(".bayan__bottom");
    const currentBayanBottomHeight = currentBayanBottom.clientHeight;

    currentBayanTop.addEventListener("click", function () {
      toggleBayan(
        currentBayanTop,
        currentBayanBottom,
        bayanOpenedClass,
        currentBayanBottomHeight
      );
    });

    setTimeout(() => {
      currentBayanTop.click();
      if (index > 0) {
        toggleBayan(
          currentBayanTop,
          currentBayanBottom,
          bayanOpenedClass,
          currentBayanBottomHeight
        );
      }
    }, 200);
  });
}
