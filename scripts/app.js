console.log('[app.js] Loaded');

// Approach: Use Objects and Functions


/* === Variables: Global === */

/* === Dom Elements  === */
const $start = $('.btn.btn-danger');
const $avatar = $('img');
const $col__gameDescription = $('#col__gameDescription');
const $col__avatar = $('.col__avatar');
const $col__startButton = $('#col__startButton');
const $row__avatar = $('#row__avatar');

// FIXME Cannot use $rol__buttons with function addHealthButtons(){}
const $rol__buttons = $('#row__buttons');


/* === Variables: Objects with Methods === */

const goku = {
    avatarStage1:'https://media.giphy.com/media/u49rMyXHrTUw8/giphy.gif?cid=790b76111601a3644bfa79fb8520ea1cd99db6869145ae3d&rid=giphy.gif&ct=g',
}

/* === Event Functions  === */

const updateToAvatar1 = function updateToAvatar1 (event){
    console.log('Update avatar');
    // $avatar.remove();
    $avatar.attr('src', goku.avatarStage1)
}

const removeStartButton = function removeStartButton(event){
    console.log('Removed Start Button');
    $col__startButton.remove();
}

// FIXME Remove description does not collapse
const removeGameDesc = function removeGameDesc(event){
    console.log('Removed Game Description');
    $col__gameDescription.remove();
}

const addHealthButtons = function addHealthButtons(event){
    console.log('Add Health Buttons');
    $('#row__buttons').append(`<div class="col">
    <button type="button" class="btn btn-primary">Eat</button>
</div>
<div class="col">
    <button type="button" class="btn btn-success">Sleep</button>
</div>
<div class="col">
    <button type="button" class="btn btn-danger">Play</button>
</div>`)
}


/* === Event Listeners === */

// $start.on('click', removeGameDesc);
$start.on('click', updateToAvatar1);
$start.on('click', removeStartButton);
$start.on('click', addHealthButtons);

/* === Invoked Functions === */



