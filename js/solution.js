const d = document;
export default function solution(id, card1) {
  const $cards = d.querySelectorAll(".products-group"),
    $solution=d.querySelectorAll(".products-solution");

  d.addEventListener("click", (e) => {
    if (e.target === d.getElementById(id)) {
      e.preventDefault();
      $cards.forEach((products) => {
        products.classList.remove("active");
      });
      $solution.forEach((solutionProducts) => {
        solutionProducts.classList.remove("active");
      });

      d.getElementById(card1).classList.add("active");
      
    }

})
}