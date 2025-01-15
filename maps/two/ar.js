let image = document.getElementById("one");
let arrow = document.getElementById("arrow");
let arrow1 = document.getElementById("shelf1Arrow");
let hitboxers = document.getElementById("hitbox");
let libraryh3 = document.getElementById("libraryH3");
let libraryH3In = document.getElementById("libraryH3In");
let tutorialMark = document.getElementById("tutorial");

function tutorialOnClick(){
    if (arrow.style.display === 'none'){
        arrow.style.display = 'block';
        arrow1.style.display = 'block';
        alert("Click the buttons to go to the selected shelves.\nTo hide the arrows, click '?' again.");
    }else {
        arrow.style.display = 'none';
        arrow1.style.display = 'none';
    }
    // alert("Click the buttons to go to the selected shelves.\nTo hide the arrows, click '?' again.");
}