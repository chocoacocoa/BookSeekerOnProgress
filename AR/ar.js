let image = document.getElementById('one');
let arrow = document.getElementById('arrow');
let hitboxers = document.getElementById('hitbox');
let libraryh3 = document.getElementById('libraryH3');
let libraryH3In = document.getElementById('libraryH3In');
function hitbox(){
    image.src = '/AR/arMedias/POVs/vertical/2.jpg';
    // arrow.style.display = 'none';
    // hitbox.style.display = 'none';
    arrow.style.display = 'none';
    hitboxers.style.display = 'none';
    libraryh3.style.display = 'none';
    libraryH3In.style.display = 'block';
}