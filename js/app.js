/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// Build menu 


const sectionTag = document.querySelectorAll('section'); 
      
const generateNav = () => {
    // This function creates the nav bar based on ID names of the different sections 

    // Obtaining all section tags 

    // Start for loop according to the number of sections 
    for (i=0; i < sectionTag.length; i++) {

        // for each, create new <li> element, and also nav pointer to <ul>
        let navList = document.createElement('li');
        let nav = document.getElementById('navbar__list');
        let sectionID = sectionTag.item(i).id;

        // all <li> element has a class .menu__link for styling
        navList.className = "menu__link";
        navList.setAttribute('id', `${sectionID}Nav`);

        //also a scroll into view feature but not by JS
        let linkList = document.createElement('A');
        linkList.setAttribute('href',`#${sectionID}`);

        
        linkList.innerText = sectionTag.item(i).getAttribute('data-nav');
        navList.insertAdjacentElement('beforeend', linkList);
        
        // in <ul>, add item according to number of sections
        nav.appendChild(navList);
     }
    }

document.addEventListener('DOMContentLoaded', generateNav());

// button to go to top of page
const topButton = document.getElementById("topButton");

window.onscroll = () => scrollFunction();

const scrollFunction = () => {
    if (document.documentElement.scrollTop > 40) {
    topButton.style.display = "block";
    } else {
    topButton.style.display = "none";
    }
};

const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

// highlighting section in view 
// sectionHeight is the distance between the top of the page and the section selected
const sectionHeight = (section) => section.getBoundingClientRect().top;

// removeActive will remove active state when not inviewport
const removeActive = (section, navSection) => {
    section.classList.remove('your-active-class');
};

// addActive will add active state when entering inviewport. Condition given if in view port
const addActive = (conditional, section, navSection) => {
    if (conditional) {
        section.classList.add('your-active-class');
    }
};

// function to determine if section is in active state 
const sectionActive = () => {
    //for each section
    sectionTag.forEach(
        section => { 
            // height is hgith of section
            const height = sectionHeight(section);

            inviewport = () => height < 200 && height >= -200;

            removeActive(section);
            addActive(inviewport(), section);

        }
    )
}

// Event listener to track scroll movement, and run function sectionActive
window.addEventListener('scroll', sectionActive);
