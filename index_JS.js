// ---------------------------------------------DECLARATION DES VARIABLES---------------------------------------------

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


