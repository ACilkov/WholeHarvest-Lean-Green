// Scroll function on click
const btnScroll = (event) =>{
    // Target big button, and listen for click
    let id = event.target.id
    let section = null
    
    if(id == "big-btn") {
        section = document.getElementById("ingredients");
    }
    else {
        section = document.getElementById("experience-transformation");
    }
    
    // What needs to be scrolled to
    section.scrollIntoView();

    // prevent default behavior
    event.preventDefault();
}