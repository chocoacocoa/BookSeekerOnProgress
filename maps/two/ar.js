let image = document.getElementById("one");
let arrow = document.getElementById("arrow");
let arrow1 = document.getElementById("shelf1Arrow");
let hitboxers = document.getElementById("hitbox");
let libraryh3 = document.getElementById("libraryH3");
let libraryH3In = document.getElementById("libraryH3In");
let tutorialMark = document.getElementById("tutorial");
let shelf1and2 = document.getElementById("shelf1and2");
let shelf2and3 = document.getElementById("shelf2and3");
let shelf4and5 = document.getElementById("shelf4and5");
let shelf6 = document.getElementById("shelf6");
let back = document.getElementById("back");
let backHref = document.getElementById("backHref");
let tutorialdiv = document.getElementById("tutorialdiv");
let tutorialMat = document.getElementById("tutorialMat");
let brownbook = document.getElementById("brownbook");
let redbook = document.getElementById("redbook");
let randombooks = document.getElementById("randombooks");
let bookshelf1 = document.getElementById("bookshelf1");
let bookshelf2 = document.getElementById("bookshelf2");
function tutorialOnClick(){
    // if (arrow.style.display === 'none'){
    //     arrow.style.display = 'block';
    //     arrow1.style.display = 'block';
    //     alert("Click the buttons to go to the selected shelves.\nTo hide the arrows, click '?' again.");
    // }else {
    //     arrow.style.display = 'none';
    //     arrow1.style.display = 'none';
    // }
    tutorialMat.style.display = 'block';
    tutorialdiv.style.display = 'block';
}
function backOnclick(){

}
function shelfOneATwoOnClick(){
    shelf1and2.style.fontSize = '6vmin';
    console.log("shelf1 and 2 clicked.");
    image.src = '/AR/arMedias/POVs/vertical/3.1.jpg';
    backHref.href = "/maps/two/ar.html";
    shelf6.style.display = 'none';
    shelf4and5.style.display = 'none';
    shelf2and3.style.display = 'none';
    shelf1and2.style.display = 'none';
    libraryH3In.innerHTML = 'Library > Shelf 1-2';
    back.style.filter = "invert(1)";

    bookshelf1.style.display = 'block';
    bookshelf2.style.display = 'block';
    redbook.style.display = 'block';
    brownbook.style.display = 'block';
    randombooks.style.display = 'block';
}
function X(){
    tutorialMat.style.display = 'none';
    tutorialdiv.style.display = 'none';
}
