import careers from "./careers.js";
import hamburgerMenu from "./menu_hamburguer.js";
import products from "./products.js";
import slider from "./slider.js";
import solution from "./solution.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".navbar", ".nav-item a");
  slider();
  careers();
  products("featured","card1")
  products("administration","card2")
  products("engineering","card3")
  products("logistics","card4")
  products("business","card5")
  solution("featured-main","featured-solution")
  solution("featured-other1","featured-solution1")
  solution("featured-other2","featured-solution2")
  solution("featured-other3","featured-solution3")
  solution("featured-other4","featured-solution4")
  solution("administration-main","administration-solution")
  solution("administration-other1","administration-solution1")
  solution("administration-other2","administration-solution2")
  solution("administration-other3","administration-solution3")
  solution("administration-other4","administration-solution4")
  solution("engineering-main","engineering-solution")
  solution("engineering-other1","engineering-solution1")
  solution("engineering-other2","engineering-solution2")
  solution("engineering-other3","engineering-solution3")
  solution("engineering-other4","engineering-solution4")
});
