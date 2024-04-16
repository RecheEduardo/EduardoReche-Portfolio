const hamburger = document.querySelector(".hamburger");

const nav = document.querySelector(".nav");

hamburger.addEventListener("click" , () => nav.classList.toggle("active"));

var clicado = false;

function email()
{
    if (!clicado) {
        clicado = true
        var elem = document.getElementById("emailbtn");
        if (elem.innerHTML=="E-Mail para contato") elem.innerHTML = "Eduardorechemartins2006@gmail.com";
        else if (elem.innerHTML=="Eduardorechemartins2006@gmail.com") elem.innerHTML = "Eduardorechemartins2006@gmail.com";
    }
}