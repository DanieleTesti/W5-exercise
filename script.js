function changeTheme() {
  const el = document.documentElement;
  el.getAttribute("data-theme") == "light"
    ? el.setAttribute("data-theme", "dark")
    : el.setAttribute("data-theme", "light");
}

let add = 0;
function carrello() {
  alert("Aggiunto al carrello correttamente");
  add += 1;
}

function conta() {
  alert("Nel carrello ci sono \n" + add + " \noggetti");
}

function svuota() {
  add = 0;
  alert("Ora il tuo carrello è vuoto");
}
