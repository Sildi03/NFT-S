
function apri_chiudi_ham{
  var hamburgher =  document.getElementById("a_di_hamburgher")[0].classList.contains("tendina");
  if (hamburgher){
    hamburgher[0].classList.remove("tendina");
  } else {
    hamburgher[0].classList.add("tendina");
  }
}