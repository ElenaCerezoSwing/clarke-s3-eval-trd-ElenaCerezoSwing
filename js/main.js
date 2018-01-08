'use strict';

var page = document.querySelector('.burguer-display');
var menuTrigger = page.querySelector('.burguer-opener');
var menuCloseBTN = page.querySelector('.burguer-close');

// Functions
function openNavMenu() {
	page.classList.add('page--menu-visible');
};

function closeNavMenu() {
	page.classList.remove('page--menu-visible');
};


// Magic
menuTrigger.addEventListener('click', openNavMenu);
menuCloseBTN.addEventListener('click', closeNavMenu);
