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


// ---------------------------------------------GESION DU SLIDER CATEGORIES---------------------------------------------

const slidesCategories = document.getElementById('slides_categories');
const prevButtonCategories = document.getElementById('prev_categories');
const nextButtonCategories = document.getElementById('next_categories');
// const limit = document.querySelectorAll('.perso').length;
const limit1 = document.getElementsByClassName('category').length;
let spanMax1 = document.getElementById('slides_categories').offsetWidth;
console.log(limit1);
console.log(spanMax1);
let current1 = 0;

prevButtonCategories.addEventListener('click', prev1);
nextButtonCategories.addEventListener('click', next1);


spanMax1 = limit1 * 100;
console.log("spanMax1 =" + spanMax1)
slidesCategories.style.width = `${spanMax1}vw`;
console.log(slidesCategories.style.width)


function prev1()
{
    if (current1 > 0)
    {
        current1--;
        console.log(current1);
        move1()
    }  
}

function next1()
{
    if (current1 < limit1 - 1)
    {
        current1++;
        console.log(current1);
        move1()
    }
    
}

function move1()
{
    const transform1 = -100 * current1;
    console.log('transform1 :' + transform1);
    slidesCategories.style.transform = `translateX(${transform1}vw)`;

    prevButtonCategories.style.display = current1 === 0 ? "none" : "block";
    nextButtonCategories.style.display = current1 === limit1 - 1 ? "none" : "block";
}

// ---------------------------------------------GESION DU SLIDER PEOPLE---------------------------------------------

const slides = document.getElementById('slides_people');
const prevButtonPeople = document.getElementById('prev_people');
const nextButtonPeople = document.getElementById('next_people');
// const limit = document.querySelectorAll('.perso').length;
const limit = document.getElementsByClassName('perso').length;
let spanMax = document.getElementById('slides_people').offsetWidth;
console.log(limit);
console.log(spanMax);
let current = 0;

prevButtonPeople.addEventListener('click', prev);
nextButtonPeople.addEventListener('click', next);


spanMax = limit * 100;

slides.style.width = `${spanMax}vw`;
console.log(slides.style.width)


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
    const transform = -100 * current;
    slides.style.transform = `translateX(${transform}vw)`;

    prevButtonPeople.style.display = current === 0 ? "none" : "block";
    nextButtonPeople.style.display = current === limit - 1 ? "none" : "block";
}