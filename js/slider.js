
const d=document;
export default function slider(){
  let sliderAuto;
  const $nextBtn=d.querySelector(".pagination-slider .next"),
    $prevBtn=d.querySelector(".pagination-slider .prev"),
    $slides=d.querySelectorAll(".slider");
  d.addEventListener("click",e=>{
    if(e.target===$prevBtn){
      e.preventDefault();
      $slides[0].classList.add("active");
      $slides[1].classList.remove("active");
      $prevBtn.classList.remove("disabled");
      $nextBtn.classList.add("disabled");
    }
    if(e.target===$nextBtn){
      e.preventDefault();
      $slides[1].classList.add("active");
      $slides[0].classList.remove("active");
      $prevBtn.classList.add("disabled");
      $nextBtn.classList.remove("disabled");
    }
  })
  

}

