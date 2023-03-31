const toggle = document.querySelector(".toggle-btn");
const basic = document.querySelector(".basic");
const pro = document.querySelector(".pro");
const master = document.querySelector(".master");

function changePrice(e) {
  if (!e.target.checked) {
    basic.textContent = "199.99";
    pro.textContent = "249.99";
    master.textContent = "399.99";
  } else {
    basic.textContent = "19.99";
    pro.textContent = "24.99";
    master.textContent = "39.99";
  }
}

toggle.addEventListener("change", changePrice);
