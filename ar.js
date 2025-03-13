console.log('connected ar.js');
let image = document.getElementById("one");
let arrow = document.getElementById("arrow");
let hitboxers = document.getElementById("hitbox");
let libraryh3 = document.getElementById("libraryH3");
let libraryH3In = document.getElementById("libraryH3In");
// let arrowLeft = document.getElementById("arrowLeft");
let tutorialMark = document.getElementById("tutorial");
// // let arrow1 = document.getElementById("shelf1Arrow");
// // function hitbox(){
// //     image.src = '/AR/arMedias/POVs/vertical/2.jpg';
// //     // arrow.style.display = 'none';
// //     hitboxers.style.display = 'none';
// //     libraryh3.style.display = 'none';
// //     libraryH3In.style.display = 'block';
// //     arrowLeft.style.display = 'block';
// //     arrow.style.position = 'absolute';
// //     arrow.style.left = '18vh';
// //     arrow.style.bottom = '25vh';
// //     hitboxers.style.height = '';
// //     //     left: 18vh;
// //     // bottom: 25vh;
// //     // transform: rotate(-52deg);
// //     arrow.style.transform = 'rotate(-52deg)';
// // }

// function hitbox() {
//   image.src = "/AR/arMedias/POVs/vertical/2.jpg";
//   hitboxers.style.display = "none";
//   libraryh3.style.display = "none";
//   libraryH3In.style.display = "block";

//   arrow.style.position = "absolute";
//   arrow.style.left = "18vh";
//   arrow.style.bottom = "25vh";
//   hitboxers.style.height = "";
//   arrow.style.transform = "rotate(-52deg)";
// }

// function tutorialCursorIn() {
//   tutorialMark.innerHTML = "hint";
// }
// function tutorialCursorOut() {
//   tutorialMark.innerHTML = "?";
// }
// // function tutorial(){
// //     if(arrow.style.display === 'none'){
// //         arrow.style.display = 'block';
// //         arrow1.style.display = 'block';

// //     }else{
// //         arrow.style.display = 'none';
// //         arrow1.style.display = 'none';
// //     }
function tutorialOnClick() {
  if (arrow.style.display === "none") {
    arrow.style.display = 'block';
  }else{
    arrow.style.display = 'none';
  }
}

// mediaquery
// const mediaQuery = window.matchMedia('(min-width: 768px)');

// function handleScreenChange(event) {
//     if (event.matches) {
//         console.log('Screen is 768px or smaller');
//     } else {
//         console.log('Screen is larger than 768px');
//     }
// }

// // Call the function when the script loads
// handleScreenChange(mediaQuery);

// // Listen for changes
// mediaQuery.addEventListener('change', handleScreenChange);

// console.log('hello?');

