const featuresArrow = document.querySelector('.op');
const featuresMenu = document.querySelector('.dropdown');
const companyArrow = document.querySelector('#comp');
const companyMenu = document.querySelector('#comp-2');
const arrowF = document.querySelector('.arrowDown');
const arrowUp = document.querySelector('.arrowUp')
const arrowC = document.querySelector('.arrowDown-2');
const arrowUpCompany = document.querySelector('.arrowUp-2');
const navMenu = document.querySelector('.nav-options')
const burger = document.querySelector('.burger')



console.log(featuresArrow);
console.log(featuresMenu);

let showFeatures = 0;
let showCompany = 0;

console.log("Hello World");


function openFeatures() {

    if (showFeatures == 0) {
        featuresMenu.classList.toggle('showMenu');
        arrowUp.classList.toggle('showArrow');
        arrowF.classList.toggle('hide');
        showFeatures = 1;
    }
    else {
        featuresMenu.classList.toggle('showMenu');
        arrowUp.classList.toggle('showArrow');
        arrowF.classList.toggle('hide');
        showFeatures = 0;
    }
}
function openCompany() {

    if (showCompany == 0) {
        companyMenu.classList.toggle('showMenu');
        arrowUpCompany.classList.toggle('showArrow');
        arrowC.classList.toggle('hide');
        showCompany = 1;
    }
    else {

        companyMenu.classList.toggle('showMenu');
        arrowUpCompany.classList.toggle('showArrow');
        arrowC.classList.toggle('hide')
        showCompany = 0;
    }
}
function openMenu() {

    
    navMenu.style.width = "70%";
        
}
function closeMenu() {

    
    navMenu.style.width = "0%";
        
}



