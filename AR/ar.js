let image = document.getElementById('one');
let arrow = document.getElementById('arrow');
let hitboxers = document.getElementById('hitbox');
let libraryh3 = document.getElementById('libraryH3');
let libraryH3In = document.getElementById('libraryH3In');
let arrowLeft = document.getElementById('arrowLeft');
function hitbox(){
    image.src = '/AR/arMedias/POVs/vertical/2.jpg';
    // arrow.style.display = 'none';
    // hitbox.style.display = 'none';
    // arrow.style.display = 'none';
    // hitboxers.style.display = 'none';
    // libraryh3.style.display = 'none';
    libraryH3In.style.display = 'block';
    // arrowLeft.style.display = 'block';
    arrow.style.transform = 'rotate(320deg)';
    arrow.style.left = '17vh';
    arrow.style.top = '65vh';
    hitboxers.style.height = '';
}