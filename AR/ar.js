let image = document.getElementById('one');
let arrow = document.getElementById('arrow');
let hitboxers = document.getElementById('hitbox');
let libraryh3 = document.getElementById('libraryH3');
let libraryH3In = document.getElementById('libraryH3In');
let arrowLeft = document.getElementById('arrowLeft');
let tutorialMark = document.getElementById('tutorial');
// function hitbox(){
//     image.src = '/AR/arMedias/POVs/vertical/2.jpg';
//     // arrow.style.display = 'none';
//     hitboxers.style.display = 'none';
//     libraryh3.style.display = 'none';
//     libraryH3In.style.display = 'block';
//     arrowLeft.style.display = 'block';
//     arrow.style.position = 'absolute';
//     arrow.style.left = '18vh';
//     arrow.style.bottom = '25vh';
//     hitboxers.style.height = '';
//     //     left: 18vh;
//     // bottom: 25vh;
//     // transform: rotate(-52deg);
//     arrow.style.transform = 'rotate(-52deg)';
// }

function hitbox() {
    image.src = '/AR/arMedias/POVs/vertical/2.jpg';
    hitboxers.style.display = 'none';
    libraryh3.style.display = 'none';
    libraryH3In.style.display = 'block';
    
    arrow.style.position = 'absolute';
    arrow.style.left = '18vh';
    arrow.style.bottom = '25vh';
    hitboxers.style.height = '';
    arrow.style.transform = 'rotate(-52deg)';
}

function tutorial(){
    alert('Click the location you want to enter or to go.');
}