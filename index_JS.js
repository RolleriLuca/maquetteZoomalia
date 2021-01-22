// ---------------------------------------------GESION DU MENU DEROULANT---------------------------------------------

let scrollingMenuTop = document.getElementById('scrollingMenu_top');
let scrollingList = document.getElementById('scrollingList');
let arrow = document.getElementById('arrow');

let nbClicks = 0;

scrollingMenuTop.addEventListener('click', () => scrolllingMenuApparition())

function scrolllingMenuApparition()
{
    nbClicks++;
    if (nbClicks%2 != 0)
    {
        scrollingList.style.display = "block";
        arrow.style.rotate = "-180deg";
        arrow.style.transition = "0.5s";  
    }
    else
    {
        scrollingList.style.display = "none";
        arrow.style.rotate = "0deg";
        arrow.style.transition = "0.5s";  
    }

    console.log(nbClicks);
}

// ---------------------------------------------GESION DU MENU DEROULANT---------------------------------------------

const slides = document.getElementById('slides');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
// const limit = document.querySelectorAll('.perso').length;
const limit = document.getElementsByClassName('perso').length;
let spanMax = document.getElementById('slides').offsetWidth;
console.log(limit);
console.log(spanMax);
let current = 0;

prevButton.addEventListener('click', prev);
nextButton.addEventListener('click', next);


spanMax = limit * 203;

slides.style.width = `${spanMax}px`;


function prev()
{
    if (current > 0)
    {
        current--;
        console.log(current);
        move()
    }  
}

function next()
{
    if (current < limit - 1)
    {
        current++;
        console.log(current);
        move()
    }
    
}

function move()
{
    const transform = -203 * current;
    slides.style.transform = `translateX(${transform}px)`;

    prevButton.style.display = current === 0 ? "none" : "block";
    nextButton.style.display = current === limit - 1 ? "none" : "block";
}