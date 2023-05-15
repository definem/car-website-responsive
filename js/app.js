const hamburgerBtn = document.querySelector("#hamburgerBtn");

hamburgerBtn.addEventListener("click", () => {
  const prevAttrVal = hamburgerBtn.getAttribute("aria-expanded") === "false";
  hamburgerBtn.setAttribute("aria-expanded", prevAttrVal ? true : false);
  
})