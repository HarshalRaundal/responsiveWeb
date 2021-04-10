
const cards = Array.from(document.querySelectorAll('article'));

cards.forEach(key => key.addEventListener('mouseover',addEffect));
cards.forEach(key => key.addEventListener('transitionend',removeEffect));


function addEffect() {

    this.classList.add('mouse');
}

function removeEffect(e) {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('mouse');
}



const menu = Array.from(document.querySelectorAll('.menu>div'));
menu.forEach(key => key.addEventListener('mouseover',addEffect));
menu.forEach(key => key.addEventListener('transitionend',removeEffect));

const game = document.querySelector('.game') ;

game.addEventListener('mouseenter',gameEffect);
game.addEventListener('mouseleave',erase);

function erase(e) {
    e.target.classList.remove('game-effect');
}

function gameEffect() {
    this.classList.add('game-effect');
}

const dark=document.querySelector('.dark-mode');

let containers = [];
containers.push(document.querySelector('body'));
containers.push(document.querySelector('.main>div'));
containers.push(document.querySelector('.game'));
containers=containers.concat(menu);
containers=containers.concat(cards);
dark.addEventListener('click',darkTheme);

containers.forEach(key => key.addEventListener('mouseenter',sound));
const audio = document.querySelector('audio');
function sound(){
    audio.currentTime=0;
    audio.play();
}

function darkTheme (){
    containers.forEach(key => key.classList.toggle('dark'));
}

const mute = document.querySelector('.mute');
mute.addEventListener('click',muteAudio);

function muteAudio() {
    if(!audio.muted)
    audio.muted=true;
    else 
    audio.muted = false;
}

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click',()=>location.reload());