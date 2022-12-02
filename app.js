let $dias = document.getElementById("dias");

let meses = prompt("ingrese mes");
const obtenerDiasMes = function (mes) {
  if (
    mes === "noviembre" ||
    mes === "abril" ||
    mes === "junio" ||
    mes === "septiembre"
  ) {
    return "30 días ";
  } else if (mes === "febrero") {
    return "28 días";
  } else if (
    mes === "enero" ||
    mes === "marzo" ||
    mes === "mayo" ||
    mes === "julio" ||
    mes === "agosto" ||
    mes === "octubre" ||
    mes === "diciembre"
  ) {
    return "31 días";
  } else {
    return "eso no es un mes válido";
  }
};
$dias.textContent = obtenerDiasMes(meses);
