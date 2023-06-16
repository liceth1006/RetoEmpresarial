const d = document;
export default function careers() {
  const $administracion = d.getElementById("administracion"),
    $finanzas = d.getElementById("finanzas"),
    $software = d.getElementById("software"),
    $industrial = d.getElementById("industrial"),
    $marketing = d.getElementById("marketing"),
    $negocios = d.getElementById("negocios"),
    $admi = d.querySelector(".administracion"),
    $finanza = d.querySelector(".finanzas"),
    $softwar = d.querySelector(".software"),
    $industria = d.querySelector(".industrial"),
    $market = d.querySelector(".marketing"),
    $negocio = d.querySelector(".negocios");

  d.addEventListener("click", (e) => {
    if (e.target === $administracion) {
      e.preventDefault();
      $administracion.classList.add("administracion");
      $admi.classList.add("active");

      $finanzas.classList.remove("finanzas");
      $finanza.classList.remove("active");
      $software.classList.remove("software");
      $softwar.classList.remove("active");
      $industrial.classList.remove("industrial");
      $industria.classList.remove("active");
      $marketing.classList.remove("marketing");
      $market.classList.remove("active");
      $negocios.classList.remove("negocios");
      $negocio.classList.remove("active");
    }
    if (e.target === $finanzas) {
      e.preventDefault();
      $finanzas.classList.add("finanzas");
      $finanza.classList.add("active");

      $admi.classList.remove("active");
      $administracion.classList.remove("administracion");
      $software.classList.remove("software");
      $softwar.classList.remove("active");
      $industrial.classList.remove("industrial");
      $industria.classList.remove("active");
      $marketing.classList.remove("marketing");
      $market.classList.remove("active");
      $negocios.classList.remove("negocios");
      $negocio.classList.remove("active");
    }
    if (e.target === $software) {
      e.preventDefault();
      $software.classList.add("software");
      $softwar.classList.add("active");

      $admi.classList.remove("active");
      $administracion.classList.remove("administracion");
      $finanzas.classList.remove("finanzas");
      $finanza.classList.remove("active");
      $industrial.classList.remove("industrial");
      $industria.classList.remove("active");
      $marketing.classList.remove("marketing");
      $market.classList.remove("active");
      $negocios.classList.remove("negocios");
      $negocio.classList.remove("active");
    }
    if (e.target === $industrial) {
      e.preventDefault();
      $industrial.classList.add("industrial");
      $industria.classList.add("active");

      $admi.classList.remove("active");
      $administracion.classList.remove("administracion");
      $finanzas.classList.remove("finanzas");
      $finanza.classList.remove("active");
      $software.classList.remove("software");
      $softwar.classList.remove("active");
      $marketing.classList.remove("marketing");
      $market.classList.remove("active");
      $negocios.classList.remove("negocios");
      $negocio.classList.remove("active");
    }
    if (e.target === $marketing) {
      e.preventDefault();
      $marketing.classList.add("marketing");
      $market.classList.add("active");

      $admi.classList.remove("active");
      $administracion.classList.remove("administracion");
      $finanzas.classList.remove("finanzas");
      $finanza.classList.remove("active");
      $software.classList.remove("software");
      $softwar.classList.remove("active");
      $industrial.classList.remove("industrial");
      $industria.classList.remove("active");
      $negocios.classList.remove("negocios");
      $negocio.classList.remove("active");
    }
    if (e.target === $negocios) {
      e.preventDefault();
      $negocios.classList.add("negocios");
      $negocio.classList.add("active");

      $admi.classList.remove("active");
      $administracion.classList.remove("administracion");
      $finanzas.classList.remove("finanzas");
      $finanza.classList.remove("active");
      $software.classList.remove("software");
      $softwar.classList.remove("active");
      $industrial.classList.remove("industrial");
      $industria.classList.remove("active");
      $marketing.classList.remove("marketing");
      $market.classList.remove("active");
    }
  });
}
