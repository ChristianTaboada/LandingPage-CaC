let select = document.querySelector("#select");
let divTotal = document.querySelector(".total");
let cantidad = document.querySelector(".cantidad");
let name = document.querySelector(".name");
let surname = document.querySelector(".surname");
let email = document.querySelector(".email");
let resume = document.querySelector(".resume");

let total = (cantidad, categoria, div) => {
    if(categoria === "1") {
        div.textContent = `Total a pagar: $ ${200 * cantidad * 0.2}`;
    }

    if (categoria === "2") {
        div.textContent = `Total a pagar: $ ${200 * cantidad * 0.5}`;
    }

    if (categoria === "3") {
        div.textContent = `Total a pagar: $ ${200 * cantidad * 0.85}`
    }
};

let emptyInput = (input) => {
    if(input.value === "") {
        input.style.borderColor = "red";
        return true;
    } else {
        input.style.borderColor = "green";
    }
};

select.addEventListener("change", (e) => {
    if(e.target.value === "Seleccione categoria") {
        divTotal.textContent = "Total a pagar: $";
    }
    total(cantidad.value, e.target.value, divTotal)
});

cantidad.addEventListener("input", (e) => {
    total(cantidad.value, select.value, divTotal)
});

resume.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    !emptyInput(name) &&
    !emptyInput(surname) &&
    !emptyInput(email) &&
    !emptyInput(cantidad)
  ) {
    const confirmMessage = `Gracias por realizar tu compra:\n\n${name.value} ${surname.value}\nHemos enviado la información a: ${email.value}\n${divTotal.textContent}`;
    const isConfirmed = confirm(confirmMessage);

    if (isConfirmed) {
      window.location.href = "./index.html";
    }
  }
});