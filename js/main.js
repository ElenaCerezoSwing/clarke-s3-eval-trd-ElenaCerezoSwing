'use strict';
//  MENÚ BURGUER O TRIGGER
//  Variables
var page = document.querySelector('.burguer-display');
var menuTrigger = page.querySelector('.burguer-opener');
var menuCloseBTN = page.querySelector('.burguer-close');

// Funciones
function openNavMenu() {
	page.classList.add('page--menu-visible');
};

function closeNavMenu() {
	page.classList.remove('page--menu-visible');
};


// Eventos
menuTrigger.addEventListener('click', openNavMenu);
menuCloseBTN.addEventListener('click', closeNavMenu);

// PARTE AJAX: Cargar contenido nuevo desde una API
// Variables
var moreReasonsButton = document.querySelector('.button-opposite');
var reasonsContainer = document.querySelector('.reasons-grid');
var moreReasons = '';
var evenMoreReasons ='';
// Funciones
function getRandomReasons(){
 var request = new XMLHttpRequest();
 request.open('GET',' https://three-random-reasons-izwfjpgbqm.now.sh/');
 request.addEventListener('load',addRandomReasons);

		function addRandomReasons(){
			var response = request.responseText;
			var reasonsJson = JSON.parse(response);

		for (var i = 0; i < reasonsJson.reasons.length; i++) {
      //  Y aquí hay varios caminos que hay que preguntar a Álex:
// 1º un pelín fallido, pero bueno si encontramos el fallo: (es el caso i*3)

		// 	moreReasons += '<div class="row"><h6 class="font-section-reasons-subtitle">'+ reasonsJson.reasons[i].title +
    //  '</h6><p class="font-section-reasons-description">'+ reasonsJson.reasons[i].description + '</p></div>';
    //  evenMoreReasons = reasonsContainer.innerHTML + moreReasons ;

// después del cierre del for deberíamos decir que:
// reasonsContainer.innerHTML = evenMoreReasons;


// 2º también fallido, lo hace bien pero nos elimina nuestra primera opción... (la que hemos escrito a mano):

// 	moreReasons += '<div class="row"><h6 class="font-section-reasons-subtitle">'+ reasonsJson.reasons[i].title +
//  '</h6><p class="font-section-reasons-description">'+ reasonsJson.reasons[i].description + '</p></div>';
//  evenMoreReasons = reasonsContainer.innerHTML + moreReasons ;

// después del cierre del for deberíamos decir que:
// reasonsContainer.innerHTML = moreReasons;

// y el 3º (que es el más eficiente y sencillo)


     reasonsContainer.innerHTML += '<div class="row"><h6 class="font-section-reasons-subtitle">'+ reasonsJson.reasons[i].title +
		'</h6><p class="font-section-reasons-description">'+ reasonsJson.reasons[i].description + '</p></div>';

		}
// reasonsContainer.innerHTML = evenMoreReasons;
}
request.send();
}

// Eventos
moreReasonsButton.addEventListener('click', getRandomReasons);
