
// Creacion de productos Riego

function Aspersor(nombre, distancia, precio, imagen) {
    this.nombre = nombre;
    this.distancia = distancia;
    this.precio = precio;
    this.imagen = imagen;
    this.descuento = 10;
    this.precioDescuento = function() { return this.precio - ((this.precio * this.descuento) / 100)}
}

const producto1 = new Aspersor("Hunter PGJ", "4.3 a 11.6 metros", 1100, "aspersorHunter");
const producto2 = new Aspersor("Hunter PGP", "6.4 a 15.8 metros", 1350, "pgp");
const producto3 = new Aspersor("Hunter PGP Ultra", "6.4 a 18 metros", 1500, "pgpultra");
const producto4 = new Aspersor("Hunter PS Ultra", "7 a 20 metros", 1850, "psultra");


const productos = [producto1, producto2, producto3, producto4 ]
for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> ${producto.nombre} </h3>
                            <img src="Imagenes/Aspersores/${producto.imagen}.jpg" style="max-width: 9em; max-height: 9em;" alt="">
                            <p> Distancia de riego: ${producto.distancia} </p>
                            <b> Valor: $${producto.precio} </b>
                            <b> Valor efectivo: $${producto.precioDescuento()}</b>
                            <button class="botonCarrito" id="agregarCarrito">Agregar al Carrito</button>` ;
    document.getElementById("filaProductos").appendChild(contenedor);
}


// Creacion productos de Piletas

  /* Filtros */

function filtro(nombre, litros, precio, imagen) {
    this.nombre = nombre;
    this.litros = litros;
    this.precio = precio;
    this.imagen = imagen;
    this.descuento = 5;
    this.precioDescuento = function() { return this.precio - ((this.precio * this.descuento) / 100)}
}

const filtro1 = new filtro("Fluvial-Titanium 20", "20.000L", 28000, "Titanium-20");
const filtro2 = new filtro("Fluvial-Titanium 40", "40.000L", 33000, "Titanium-40");
const filtro3 = new filtro("Fluvial-Titanium 60", "60.000L", 38000, "Titanium-60");
const filtro4 = new filtro("Fluvial-Pompones Filtrantes", "", 1000, "Pompones");


const productosFiltro = [filtro1, filtro2, filtro3, filtro4 ]
for (const producto of productosFiltro) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> ${producto.nombre} </h3>
                            <img src="Imagenes/Filtros/${producto.imagen}.png" style="max-height: 190px" alt="">
                            <p> Volumen Máximo: ${producto.litros} </p>
                            <b> Valor: $${producto.precio} </b>
                            <b> Valor efectivo: $${producto.precioDescuento()}</b>
                            <button class="botonCarrito" id="agregarCarrito">Agregar al Carrito</button>` ;
    document.getElementById("filaProductos2").appendChild(contenedor);
}

localStorage.setItem("Productos", JSON.stringify(productos)) 


//Funcion de Modal Riego :)
function ModalRiego() {

    let cerrar = document.querySelectorAll(".close")[0];
    let abrir = document.querySelectorAll(".abrirModal")[0];
    let modal    = document.querySelectorAll(".modal")[0];
    let modalCont = document.querySelectorAll(".contenedorModals")[0];
    
    abrir.addEventListener("click", function(e) {
        e.preventDefault();
        modalCont.style.opacity = "1"
        modalCont.style.visibility = "visible"
        modal.classList.toggle("modalClose")
    
    });
    
    cerrar.addEventListener("click", function(){
        modal.classList.toggle("modalClose")
        setTimeout(function(){
            modalCont.style.opacity = "0"
            modalCont.style.visibility = "hidden"
        },400)
    })
    
    window.addEventListener("click",function(a){
        if(a.target == modalCont) {
            modal.classList.toggle("modalClose")
            setTimeout(function(){
                modalCont.style.opacity = "0"
                modalCont.style.visibility = "hidden"
            },400)
            }
    })
}
ModalRiego()

// Funcion modal Piletas
function ModalPiletas() {

    let cerrar = document.querySelectorAll(".close2")[0];
    let abrir = document.querySelectorAll(".abrirModal2")[0];
    let modal    = document.querySelectorAll(".modal2")[0];
    let modalCont = document.querySelectorAll(".contenedorModals2")[0];
    
    abrir.addEventListener("click", function(e) {
        e.preventDefault();
        modalCont.style.opacity = "1"
        modalCont.style.visibility = "visible"
        modal.classList.toggle("modalClose2")
    
    });
    
    cerrar.addEventListener("click", function(){
        modal.classList.toggle("modalClose2")
        setTimeout(function(){
            modalCont.style.opacity = "0"
            modalCont.style.visibility = "hidden"
        },400)
    })
    
    window.addEventListener("click",function(a){
        if(a.target == modalCont) {
            modal.classList.toggle("modalClose2")
            setTimeout(function(){
                modalCont.style.opacity = "0"
                modalCont.style.visibility = "hidden"
            },400)
            }
    })
}

// Funcion modal Servicios
function ModalServicios() {

    let cerrar = document.querySelectorAll(".close3")[0];
    let abrir = document.querySelectorAll(".abrirModal3")[0];
    let modal = document.querySelectorAll(".modal3")[0];
    let modalCont = document.querySelectorAll(".contenedorServicios")[0];
    
    abrir.addEventListener("click", function(e) {
        e.preventDefault();
        modalCont.style.opacity = "1"
        modalCont.style.visibility = "visible"
        modal.classList.toggle("modalClose3")   
    
    });
    
    cerrar.addEventListener("click", function(){
        modal.classList.toggle("modalClose3")
        setTimeout(function(){
            modalCont.style.opacity = "0"
            modalCont.style.visibility = "hidden"
        },400)
    })
    
    window.addEventListener("click",function(a){
        if(a.target == modalCont) {
            modal.classList.toggle("modalClose3")
            setTimeout(function(){
                modalCont.style.opacity = "0"
                modalCont.style.visibility = "hidden"
            },400)
            }
    })
}



//click botones hacia Servicios
function linkServicios1() {
    let modal = document.querySelectorAll(".modal3")[0];
    let modalCont = document.querySelectorAll(".contenedorServicios")[0];

    $(".linkServicios1").click(function(e){ 
        e.preventDefault()
        $('html, body').animate( {
            scrollTop: $("#sectionProductos").offset().top
        }, 100)
        
        modalCont.style.opacity = "1"
        modalCont.style.visibility = "visible"
        modal.classList.toggle("modalClose3")
    },)

}

ModalServicios()
linkServicios1()

//click boton barra navegacion hacia Piletas
function linkPiletasNav() {
    
    let modal    = document.querySelectorAll(".modal2")[0];
    let modalCont = document.querySelectorAll(".contenedorModals2")[0];
    
    $(".linkPiletas").click(function(e){ 
        e.preventDefault()
        $('html, body').animate( {
            scrollTop: $("#sectionProductos").offset().top
        }, 100)
        
        modalCont.style.opacity = "1"
        modalCont.style.visibility = "visible"
        modal.classList.toggle("modalClose2")
    },)
}

ModalPiletas();
linkPiletasNav();

//click boton barra navegacion hacia Riego
function linkRiegoNav() {
    
    let modal    = document.querySelectorAll(".modal")[0];
    let modalCont = document.querySelectorAll(".contenedorModals")[0];
    
    $(".buttonRiego").click(function(e){ 
        e.preventDefault()
        $('html, body').animate( {
            scrollTop: $("#sectionProductos").offset().top
        }, 100)
        
        modalCont.style.opacity = "1"
        modalCont.style.visibility = "visible"
        modal.classList.toggle("modalClose")
    },)
}

linkRiegoNav()

// Funcion Para formulario

$("#botonSubmit").click(() => {
    $.ajax({
        method: "POST",
        url:  "https://jsonplaceholder.typicode.com/posts",
        data: {nombre: document.getElementById("nombre").value, correo: document.getElementById("exampleFormControlInput1").value, consulta: document.getElementById("exampleFormControlTextarea1").value }, 
        success: function(respuesta) {
            $("#formConsulta").append(`<div class="success" style="display: none;"> Muchas gracias por consultar ${respuesta.nombre}! En breve contestaremos tu consulta al siguiente mail: ${respuesta.correo}.</div> <input id= "buttonSuccess" type="button" value="Entendido!" class="btn btn-outline-secondary success" style="display:none; margin:1em 0;"></input>`);
            $(".success").fadeIn(2000, function() {
                $("#buttonSuccess").click(function() {
                    $(".success").fadeOut(2000, function() {
                        $(".success").remove();
                    })
                })
            }) 
        },
        error: function(respuesta) {
            $("#formConsulta").prepend(`<div><strong>Error!</strong> No se pudo enviar los datos!</div>`);
        }
    });
})

// Animar objetos del body

window.addEventListener('scroll', function() {
    
    function fade(direction) {
        
        
        var objeto = this.document.querySelectorAll('.fade'+direction);

        for(var i = 0; i < objeto.length; i++) {


            var altura = window.innerHeight/1.3 ;
            var distancia = objeto[i].getBoundingClientRect().top;
            console.log(altura)
            console.log(distancia)
            
            objeto[i].classList.add('transform'+direction)
        
            if (distancia <= altura) {
                objeto[i].classList.add('aparece');
            }
            else{
                objeto[i].classList.remove('aparece')
            }
        }

    }

    fade('Right')
    fade('Left')
    fade('Up')

})


