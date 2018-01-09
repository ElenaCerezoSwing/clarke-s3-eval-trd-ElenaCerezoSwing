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
			moreReasons += '<div class="row"><h6 class="font-section-reasons-subtitle">'+ reasonsJson.reasons[i].title +
     '</h6><p class="font-section-reasons-description">'+ reasonsJson.reasons[i].description + '</p></div>';
     evenMoreReasons = reasonsContainer.innerHTML + moreReasons;
		}
reasonsContainer.innerHTML = evenMoreReasons;
}
request.send();
}

// Eventos
moreReasonsButton.addEventListener('click', getRandomReasons);
