// Variables
const carriro= document.querySelector('#carrito');
const contenedorCarrito= document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn=document.querySelector('#vaciar-carrito');
const listaCursos=document.querySelector('#lista-cursos');

cargarEventListeners();
function cargarEventListeners(){
    // Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
}


//Funciones
function agregarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado=e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

//Lee el contenido del html al que se da click y extrae la info
function leerDatosCurso(curso){
    console.log(curso);

    // Crear unobjeto con el contenido del curso actual
    const infoCurso={
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('.info-card h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
    }

    console.log(infoCurso);
    
}