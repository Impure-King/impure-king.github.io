document.addEventListener("DOMContentLoaded", function() {

    const navbarElems = document.getElementsByClassName("navbarelements");
    
    // fix the function.
    const navbarEvent = function(elem) {
        const rect = elem.getBoundingClientRect();
        console.log(rect.x)
        rect.x += 100;
    }

    for (let i = 0; i < navbarElems.length; i++) {
        navbarElems[i].addEventListener("mouseover", 
        // Adding a function to activate.
        () => {
            navbarEvent(navbarElems[i]);
        }
        );
    }


})

