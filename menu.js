$ (function(){
    var boton = $('#btn-menu');
    var fondo_enlace = $('#fondo-enlace');

    boton.on('click', function(e){
        fondo_enlace.toggleClass('active');
        $('#barra-lateral-izquierda').toggleClass('active');
        e.preventDefault();
    });
    fondo_enlace.on('click', function(e){
        fondo_enlace.toggleClass('active');
        $('#barra-lateral-izquierda').toggleClass('active');
        e.preventDefault();
    });
}())
//----------- Relleno Corazon-----------------------------------
$(document).ready(function(){
    $('#relleno-corazon-1').on('click', function(){
        $(this).toggleClass('icon-heart');
    });
    $('#relleno-corazon-2').on('click', function(){
        $(this).toggleClass('icon-heart');
    });
    $('#relleno-corazon-3').on('click', function(){
        $(this).toggleClass('icon-heart');
    });
    $('#relleno-corazon-4').on('click', function(){
        $(this).toggleClass('icon-heart');
    });
    $('#relleno-corazon-5').on('click', function(){
        $(this).toggleClass('icon-heart');
    });
    $('#relleno-corazon-6').on('click', function(){
        $(this).toggleClass('icon-heart');
    });
    $('#relleno-corazon-7').on('click', function(){
        $(this).toggleClass('icon-heart');
    });
    $('#relleno-corazon-8').on('click', function(){
        $(this).toggleClass('icon-heart');
    });
});
// --------- Slider Instagram-----------------------------------------
const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});
