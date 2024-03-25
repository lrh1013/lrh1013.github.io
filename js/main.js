// 브라우저 사이즈 변경시 자동으로 --vh 크기 변경
function setScreenSize() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setScreenSize();
window.addEventListener('resize', setScreenSize);


// VISUAL TEXT
let randoNumo = function(value) {
	return Math.floor(Math.random() * value);
};
let list = $('.visual-title span');
(function go() {
	list.eq(randoNumo(list.length)).addClass('active');
	setTimeout(function() {
		go();
	}, 10);
})();
  

// 비주얼 텍스트 모션
let character = document.querySelector("#character");
let loopcon = character.querySelector('#loopcon');
let el = character.querySelector('#loop');

el.innerHTML = el.innerHTML + el.innerHTML;

function repeatContent(el, dig) {
    let html = el.innerHTML;
    let counter = 0;
    
    while (el.offsetWidth < dig && counter < 100) {
        el.innerHTML += html;
        counter += 1;
    }
}repeatContent(loopcon, character.offsetWidth);


// 포트폴리오로 바로가기
let btnMenu = document.querySelector(".btn-menu");
let portfolioCon = document.getElementById("portfolio");
btnMenu.addEventListener('click', function(){
	window.scroll({
		behavior: 'smooth',
		left: 0,
		top:portfolioCon.offsetTop - document.getElementById("header").offsetHeight + 2
	});
});


// 포트폴리오 마우스 진입시 액티브
let portItem = document.querySelectorAll('.portfolio-item');
let coverWrap = document.querySelectorAll('.cover-wrap');

portItem.forEach(function(portItem) {
	portItem.addEventListener('click', function clickItem() {
		coverWrap.forEach(function(element) {
			element.classList.remove('active');
		});		
		portItem.querySelector('.cover-wrap').classList.add('active');
	});

	portItem.addEventListener('mouseover', function hoverItem() {
		portItem.querySelector('.cover-wrap').classList.add('active');
	});

	portItem.addEventListener('mouseleave', function leaveItem() {
		portItem.querySelector('.cover-wrap').classList.remove('active');
	});

});