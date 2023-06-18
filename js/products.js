const d = document;
export default function products(id, card1) {
  const $cards = d.querySelectorAll(".products-group"),
    $items = d.querySelectorAll(".item-products a"),
    $solution=d.querySelectorAll(".products-solution");
  d.addEventListener("click", (e) => {
    if (e.target === d.getElementById(id)) {
      e.preventDefault();
      $cards.forEach((products) => {
        products.classList.remove("active");
      });
      $items.forEach((item) => {
        item.classList.remove("color");
      });
      $solution.forEach((solutionProducts) => {
        solutionProducts.classList.remove("active");
      });

      d.getElementById(id).classList.add("color");

      d.getElementById(card1).classList.add("active");
      
    }

})
}
