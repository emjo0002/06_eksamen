window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document.querySelector(".færdig_mand_sprite").addEventListener("mouseover", stickmandMouseoverHandler);
  document.querySelector(".læse_mand_sprite").addEventListener("mouseover", stickmandMouseoverHandler);
  document.querySelector(".tænke_mand_sprite").addEventListener("mouseover", stickmandMouseoverHandler);
  document.querySelector(".baby_sprite").addEventListener("mouseover", stickmandMouseoverHandler);
  document.querySelector("#protrat").classList.add("hid");
  document.querySelector("#protrat").addEventListener("animationend", fjernHid);
  document.querySelector("#rul_ned").classList.add("hid");
  document.querySelector("#rul_ned").addEventListener("animationend", fjernHid);
  document.querySelector("#mand_der_tegner_sprite").classList.add("hid");
  document.querySelector("#mand_der_tegner_sprite").addEventListener("animationstart", fjernHid);
}

function stickmandMouseoverHandler() {
  console.log("Du har hovet over en stikmand");
  this.classList.add("hop");
  this.addEventListener("animationend", genstartStickmand);
}

function genstartStickmand() {
  console.log("Du genstarter stickmanden nu");
  this.classList.remove("hop");
  this.addEventListener("mouseover", stickmandMouseoverHandler);
}

function fjernHid() {
  console.log("fjern");
  this.classList.remove("hid");
}
