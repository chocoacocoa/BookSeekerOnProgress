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
let backLibrary = document.getElementById("backLibrary");
let isbacklibraryrunning = false;
let isshelf2to3running = false;
let locationfunction;




bookshelf1.style.opacity = '1.0';
bookshelf2.style.opacity = '1.0';

bookshelf1.style.opacity = '1.0';
    bookshelf2.style.opacity = '0.5';
function tutorialOnClick(){
    tutorialMat.style.display = 'block';
    tutorialdiv.style.display = 'block';
}

backLibrary.onclick = function () {
    if (isbacklibraryrunning){
        shelf1to2();
    }else{
        alert("backbutton is disabled boss");
    }
}
// bookshelf1.onclick = function(){
//     if (isshelf2to3running){
//         s23b1();
//     }else{
//         alert("im depressed");
//     }
// }
// function s23b1(){
//     shelf1and2.style.fontSize = '6vmin';
//     console.log("shelf2 and 3 clicked.");
//     image.src = '/AR/arMedias/POVs/vertical/4.1.jpg';
//     backHref.href = "/maps/two/ar.html";
//     shelf6.style.display = 'none';
//     shelf4and5.style.display = 'none';
//     shelf2and3.style.display = 'none';
//     shelf1and2.style.display = 'none';
//     libraryH3In.innerHTML = 'Library > Shelf 1-2';
//     back.style.filter = "invert(1)";
//     bookshelf1.style.display = 'block';
//     bookshelf2.style.display = 'block';
//     redbook.style.display = 'none';
//     brownbook.style.display = 'none';
//     randombooks.style.left = 'unset';
//     randombooks.style.top = '77vh';
//     randombooks.style.width = '100vw';
//     randombooks.style.borderRadius = 'unset';
//     randombooks.style.display = 'block';
//     bookshelf1.style.opacity = '1.0';
//     bookshelf2.style.opacity = '0.5';
// }
backLibrary.style.display = 'none';
function shelf1to2(){
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
    bookshelf1.style.opacity = '1.0';
    bookshelf2.style.display = 'block';
    redbook.style.display = 'block';
    brownbook.style.display = 'block';
    randombooks.style.display = 'block';
    backLibrary.style.display = 'none';
    back.style.display = 'block';
    isbacklibraryrunning = false;
    brownbook.style.left = '28vw';
    brownbook.style.top = '34vh';
    randombooks.style.left = '59vw';
    randombooks.style.top = '55vh';
    randombooks.style.width = 'fit-content';
    randombooks.style.borderRadius = '10px';
    bookshelf1.style.opacity = '1.0';
    bookshelf2.style.opacity = '1.0';
    bookshelf11.onclick = function(){
        bookshelf1();
    }
}


function X(){
    tutorialMat.style.display = 'none';
    tutorialdiv.style.display = 'none';
}
function shelf2to3(){
    shelf1and2.style.fontSize = '6vmin';
    console.log("shelf2 and 3 clicked.");
    image.src = '/AR/arMedias/POVs/vertical/4.1.jpg';
    backHref.href = "/maps/two/ar.html";
    shelf6.style.display = 'none';
    shelf4and5.style.display = 'none';
    shelf2and3.style.display = 'none';
    shelf1and2.style.display = 'none';
    libraryH3In.innerHTML = 'Library > Shelf 3';
    back.style.filter = "invert(1)";
    bookshelf1.style.display = 'block';
    bookshelf2.style.display = 'block';
    redbook.style.display = 'none';
    brownbook.style.display = 'none';
    randombooks.style.left = 'unset';
    randombooks.style.top = '77vh';
    randombooks.style.width = '100vw';
    randombooks.style.borderRadius = 'unset';
    randombooks.style.display = 'block';
    randombooks.innerHTML = 'random books';
    
    // isshelf2to3running = true;
    isbacklibraryrunning = false;
   
    backLibrary.style.display = 'none';
    bookshelf2.style.opacity = '1.0';
    bookshelf1.style.opacity = '0.5';
    
    bookshelf1.onclick = function (){
        bookshelf1inshelf23();
    }
    bookshelf2.onclick = function () {
        shelf2to3();
    }
}
// function shelf4to5onclick(){
//     shelf1and2.style.fontSize = '6vmin';
//     console.log("shelf2 and 3 clicked.");
//     image.src = '/AR/arMedias/POVs/vertical/4.1.jpg';
//     backHref.href = "/maps/two/ar.html";
//     shelf6.style.display = 'none';
//     shelf4and5.style.display = 'none';
//     shelf2and3.style.display = 'none';
//     shelf1and2.style.display = 'none';
//     libraryH3In.innerHTML = 'Library > Shelf 1-2';
//     back.style.filter = "invert(1)";

//     bookshelf1.style.display = 'block';
//     bookshelf2.style.display = 'block';
//     redbook.style.display = 'block';
//     brownbook.style.display = 'block';
//     randombooks.style.display = 'block';
// }
function bookshelf11(){
    image.src = "/AR/arMedias/POVs/vertical/3.1.1.jpg";
    bookshelf1.style.display = 'block';
    bookshelf2.style.display = 'block';
    redbook.style.display = 'block';
    brownbook.style.display = 'block';
    randombooks.style.display = 'none';
    brownbook.style.top = "65vh";
    brownbook.style.left = "64vw";
    libraryH3In.innerHTML = "Library > bookshelf 1";
    back.style.display = "none";
    isbacklibraryrunning = true;
    backLibrary.style.display = 'block';
    bookshelf1.style.opacity = '1.0';
    bookshelf2.style.opacity = '0.5';
}
function bookshelf22(){
    image.src = '/maps/two/arMedias/POVs/vertical/3.1.2.jpg';
    redbook.style.display = 'none';
    brownbook.style.display = 'none';
    isbacklibraryrunning = true;
    backLibrary.style.display = 'block';
    back.style.display = 'none';
    libraryH3In.innerHTML = 'Library > Shelf 2';
    randombooks.style.left = 'unset';
    randombooks.style.top = '77vh';
    randombooks.style.width = '100vw';
    randombooks.style.borderRadius = 'unset';
    randombooks.style.display = 'block';
    bookshelf2.style.opacity = '1.0';
    bookshelf1.style.opacity = '0.5';
    bookshelf11.onclick = function(){
        bookshelf1inshelf23();
    }
}
function bookshelf1inshelf23(){
    image.src = '/maps/two/arMedias/POVs/vertical/bookshelf2.jpg';
    redbook.style.display = 'none';
    brownbook.style.display = 'none';
    isbacklibraryrunning = false;
    backLibrary.style.display = 'block';
    back.style.display = 'none';
    libraryH3In.innerHTML = 'Library > Shelf 2';
    randombooks.style.left = 'unset';
    randombooks.style.top = '77vh';
    randombooks.style.width = '100vw';
    randombooks.style.borderRadius = 'unset';
    randombooks.style.display = 'block';
    randombooks.innerHTML = 'Map of the Philippines';
    isbacklibraryrunning = false;
    backLibrary.style.display = 'none';
    back.style.display = 'block';
    bookshelf1.style.opacity = '1.0';
    bookshelf2.style.opacity = '0.5';
}



function shelf4to5(){
    shelf1and2.style.fontSize = '6vmin';
    console.log("shelf2 and 3 clicked.");
    image.src = '/AR/arMedias/POVs/vertical/4.1.jpg';
    backHref.href = "/maps/two/ar.html";
    shelf6.style.display = 'none';
    shelf4and5.style.display = 'none';
    shelf2and3.style.display = 'none';
    shelf1and2.style.display = 'none';
    libraryH3In.innerHTML = 'Library > Shelf 3';
    back.style.filter = "invert(1)";
    bookshelf1.style.display = 'block';
    bookshelf2.style.display = 'block';
    redbook.style.display = 'none';
    brownbook.style.display = 'none';
    randombooks.style.left = 'unset';
    randombooks.style.top = '77vh';
    randombooks.style.width = '100vw';
    randombooks.style.borderRadius = 'unset';
    randombooks.style.display = 'block';
    randombooks.innerHTML = 'random books';
    
    // isshelf2to3running = true;
    isbacklibraryrunning = false;
   
    backLibrary.style.display = 'none';
    bookshelf2.style.opacity = '1.0';
    bookshelf1.style.opacity = '0.5';
    
    bookshelf1.onclick = function (){
        bookshelf1inshelf23();
    }
    bookshelf2.onclick = function () {
        shelf2to3();
    }
}