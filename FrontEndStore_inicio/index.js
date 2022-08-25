let visitas = 0;
let usuarios = "";
let nombre;

let click = document.querySelector("#bienvenido");
function identificarUsuario() {
    usuarios = prompt ("Ingrese su nombre");
    localStorage.setItem("usuarios", JSON.stringify (usuarios));
    if(usuarios=== null || usuarios === "") {
        while (usuarios == "" || usuarios == null) {
            alert ("Debe ingresar su nombre para identificarse");
            usuarios = prompt ("Ingrese su nombre");
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            nombre = JSON.parse(localStorage.getItem("usuarios"));
            document.querySelector("#bienvenido").innerHTML = "Bienvenido " + nombre;
        }
    }
}
click.addEventListener("click", identificarUsuario);

function contador() {
    visitas = localStorage.getItem("contador") || 0;
    visitas++;
    localStorage.setItem("contador", JSON.stringify(visitas));
    document.querySelector("#visitas").innerHTML = 'Visitas :' + visitas;
}
contador();

function mostrar() {
    nombre = JSON.parse(localStorage.getItem("usuarios"));

    if(nombre=== null || nombre === "") {
        document.querySelector(".nombre").innerHTML = "Haz click para identificarte";
    } else {
        nombre = JSON.parse(localStorage.getItem("usuarios"));
        document.querySelector("#bienvenido").innerHTML = "Bienvenido"+ " " + nombre;
    }
}
mostrar();