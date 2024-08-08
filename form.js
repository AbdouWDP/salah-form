const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const checkoutForm = document.getElementById("checkout-form");

function addQuantity() {
  checkoutForm.quantity.value = parseInt(checkoutForm.quantity.value) + 1;
}
function minusQuantity() {
  if (checkoutForm.quantity.value > 1) {
    checkoutForm.quantity.value = parseInt(checkoutForm.quantity.value) - 1;
  }
}
add.addEventListener("click", addQuantity);
sub.addEventListener("click", minusQuantity);
checkoutForm.quantity.addEventListener("keyup", (e) => {
  if (e.target.value < 1) {
    e.target.value = 1;
  }
});
