const itemSeleccionado = document.getElementById("item");
itemSeleccionado.style.color = "white";

//Función para filtrar las categorías de los trabajos
function verCategoria(cat){
    const items = document.getElementsByClassName("item");
    for(let i=0; i < items.length;i++){
        items[i].style.display = "none";
    }

    const itemCat = document.getElementsByClassName(cat);
    for(let i = 0; i<itemCat.length;i++){
        itemCat[i].style.display = "block";
    }

    const links = document.querySelectorAll(".panel nav a");
    links[0].style.color = "#303030";
    links[1].style.color = "#303030";
    links[2].style.color = "#303030";
    links[3].style.color = "#303030";

    const itemSeleccionado = document.getElementById(cat);
    itemSeleccionado.style.color = "white";
}
let anios=0,proyectos=0,clientes=0,seguidores=0;
let limAnios = 15, limProyectos = 150, limClientes = 120, limSeguidores = 45
let controlAnios, controlProyectos, controlClientes, controlSeguidores;
let animRealizada = false

function animacionAumentar(id, contador, control, limite,speed){
    document.querySelector(id).textContent = 0;
    control = setInterval(function(){
        contador = contador + 1;
        document.querySelector(id).textContent = contador;
        if(contador==limite){
            clearInterval(control);
        }
    },speed)
}

//Funcion que aplica las animaciones de las habilidades
function animacionDatos(){
    var sobremi = document.getElementById("sobremi");
    var distancia_sobremi = window.innerHeight - sobremi.getBoundingClientRect().top;
    if(distancia_sobremi >= 100 && animRealizada == false){
        animRealizada = true;
        animacionAumentar("#anios", anios, controlAnios, limAnios,90);
        animacionAumentar("#proyectos", proyectos, controlProyectos, limProyectos,30);
        animacionAumentar("#clientes", clientes, controlClientes, limClientes,15);
        animacionAumentar("#seguidores", seguidores, controlSeguidores, limSeguidores,70);
    }
}

function seleccionarIconoResponsive(){
    var nav_responsive =  document.getElementById("nav-responsive");
    var distancia_nav_responsive = window.innerHeight - nav_responsive.getBoundingClientRect().top;
    var inicio = document.getElementById("inicio");
    var distancia_inicio = window.innerHeight - inicio.getBoundingClientRect().top;
    var sobremi= document.getElementById("sobremi");
    var distancia_sobremi = window.innerHeight - sobremi.getBoundingClientRect().top;
    var curriculum = document.getElementById("curriculum");
    var distancia_curriculum = window.innerHeight - curriculum.getBoundingClientRect().top;
    var porfolio = document.getElementById("porfolio");
    var distancia_porfolio = window.innerHeight - porfolio.getBoundingClientRect().top;
    var testimonios = document.getElementById("testimonios");
    var distancia_testimonios = window.innerHeight - testimonios.getBoundingClientRect().top;
    var contacto = document.getElementById("contacto");
    var distancia_contacto = window.innerHeight - contacto.getBoundingClientRect().top;

    if(distancia_inicio >=distancia_nav_responsive ){
 
        document.querySelector("#nav-inicio i").style.color = "#fff";
        document.querySelector("#nav-sobremi i").style.color = "#303030"; 
        document.querySelector("#nav-curriculum i").style.color = "#303030"; 
        document.querySelector("#nav-porfolio i").style.color = "#303030";
        document.querySelector("#nav-testimonios i").style.color = "#303030";  
        document.querySelector("#nav-contacto i").style.color = "#303030";  
    }
    if(distancia_sobremi>=distancia_nav_responsive){
        document.querySelector("#nav-inicio i").style.color = "#303030";
        document.querySelector("#nav-sobremi i").style.color = "#fff"; 
        document.querySelector("#nav-curriculum i").style.color = "#303030"; 
        document.querySelector("#nav-porfolio i").style.color = "#303030";
        document.querySelector("#nav-testimonios i").style.color = "#303030";  
        document.querySelector("#nav-contacto i").style.color = "#303030";  
    }
    if(distancia_curriculum>=distancia_nav_responsive){
        document.querySelector("#nav-inicio i").style.color = "#303030";
        document.querySelector("#nav-sobremi i").style.color = "#303030"; 
        document.querySelector("#nav-curriculum i").style.color = "#fff"; 
        document.querySelector("#nav-porfolio i").style.color = "#303030";
        document.querySelector("#nav-testimonios i").style.color = "#303030";  
        document.querySelector("#nav-contacto i").style.color = "#303030";  
    }
    if(distancia_porfolio>=distancia_nav_responsive){
        document.querySelector("#nav-inicio i").style.color = "#303030";
        document.querySelector("#nav-sobremi i").style.color = "#303030"; 
        document.querySelector("#nav-curriculum i").style.color = "#303030"; 
        document.querySelector("#nav-porfolio i").style.color = "#fff";
        document.querySelector("#nav-testimonios i").style.color = "#303030";  
        document.querySelector("#nav-contacto i").style.color = "#303030";  
    }
    if(distancia_testimonios>=distancia_nav_responsive){
        document.querySelector("#nav-inicio i").style.color = "#303030";
        document.querySelector("#nav-sobremi i").style.color = "#303030"; 
        document.querySelector("#nav-curriculum i").style.color = "#303030"; 
        document.querySelector("#nav-porfolio i").style.color = "#303030";
        document.querySelector("#nav-testimonios i").style.color = "#fff"; 
        document.querySelector("#nav-contacto i").style.color = "#303030";  
    }
    if(distancia_contacto>=distancia_nav_responsive){
        document.querySelector("#nav-inicio i").style.color = "#303030";
        document.querySelector("#nav-sobremi i").style.color = "#303030"; 
        document.querySelector("#nav-curriculum i").style.color = "#303030"; 
        document.querySelector("#nav-porfolio i").style.color = "#303030";
        document.querySelector("#nav-testimonios i").style.color = "#303030";  
        document.querySelector("#nav-contacto i").style.color = "#fff";  
    }

}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    animacionDatos();
    seleccionarIconoResponsive();
} 
