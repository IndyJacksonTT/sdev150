const infoNotch1 = document.getElementById("infoMainNotch");
const infoNotch2 = document.getElementById("infoRatesNotch");
const infoNotch3 = document.getElementById("infoRulesNotch");
const infoNotch4 = document.getElementById("infoShopNotch");
const infoNotch5 = document.getElementById("infoModsNotch");
const infoNotch6 = document.getElementById("infoChangesNotch");
const infoNotch7 = document.getElementById("infoIssuesNotch");

const infoSlide1 = document.getElementById("mainInfoSlide");
const infoSlide2 = document.getElementById("ratesInfoSlide");
const infoSlide3 = document.getElementById("rulesInfoSlide");
const infoSlide4 = document.getElementById("shopInfoSlide");
const infoSlide5 = document.getElementById("modsInfoSlide");
const infoSlide6 = document.getElementById("changesInfoSlide");
const infoSlide7 = document.getElementById("issuesInfoSlide");

function changeInfoSlide(targetSlide) {
    infoSlide1.style.display = (targetSlide === infoSlide1) ? "" : "none";
    infoSlide2.style.display = (targetSlide === infoSlide2) ? "" : "none";
    infoSlide3.style.display = (targetSlide === infoSlide3) ? "" : "none";
    infoSlide4.style.display = (targetSlide === infoSlide4) ? "" : "none";
    infoSlide5.style.display = (targetSlide === infoSlide5) ? "" : "none";
    infoSlide6.style.display = (targetSlide === infoSlide6) ? "" : "none";
    infoSlide7.style.display = (targetSlide === infoSlide7) ? "" : "none";

    infoNotch1.classList.toggle("active", targetSlide === infoSlide1);
    infoNotch2.classList.toggle("active", targetSlide === infoSlide2);
    infoNotch3.classList.toggle("active", targetSlide === infoSlide3);
    infoNotch4.classList.toggle("active", targetSlide === infoSlide4);
    infoNotch5.classList.toggle("active", targetSlide === infoSlide5);
    infoNotch6.classList.toggle("active", targetSlide === infoSlide6);
    infoNotch7.classList.toggle("active", targetSlide === infoSlide7);
}

infoNotch1.addEventListener("click", () => changeInfoSlide(infoSlide1));
infoNotch2.addEventListener("click", () => changeInfoSlide(infoSlide2));
infoNotch3.addEventListener("click", () => changeInfoSlide(infoSlide3));
infoNotch4.addEventListener("click", () => changeInfoSlide(infoSlide4));
infoNotch5.addEventListener("click", () => changeInfoSlide(infoSlide5));
infoNotch6.addEventListener("click", () => changeInfoSlide(infoSlide6));
infoNotch7.addEventListener("click", () => changeInfoSlide(infoSlide7));

changeInfoSlide(infoSlide1);