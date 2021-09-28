console.log('[app.js] Loaded');

// Approach: Use Objects and Functions


/* === Variables: Global === */

/* === Dom Elements: Landing Page  === */
const $start = $('.btn.btn-danger');
const $avatar = $('img');
const $col__gameDescription = $('#col__gameDescription');
const $col__avatar = $('.col__avatar');
const $col__startButton = $('#col__startButton');
const $row__avatar = $('#row__avatar');

/* === Dom Elements: Game Page  === */
// let $gameDOM.eatButton = $('#eatButton');
// let $gameDOM.sleepButton = $('#sleepButton');
// let $gameDOM.playButton = $('playButton');
// let $gameDOM.hungerLevel = $('#hungerLevel');

// FIXME Cannot use $rol__buttons with function addHealthButtons(){}
const $rol__buttons = $('#row__buttons');


/* === Variables: Objects with Methods === */

const goku = {
    name: 'Goku',
    age: 0,
    hungerLevel: 5,
    sleepLevel: 5,
    boredomLevel: 5,
    avatarStage1:'https://media.giphy.com/media/u49rMyXHrTUw8/giphy.gif?cid=790b76111601a3644bfa79fb8520ea1cd99db6869145ae3d&rid=giphy.gif&ct=g',
}

const gameInitiate = {
    updateToAvatar1 (event){
        console.log('Update avatar');
        // $avatar.remove();
        $avatar.attr('src', goku.avatarStage1)
    },
    removeStartButton(event){
        console.log('Removed Start Button');
        $col__startButton.remove();
    },

    removeGameDesc(event){
        console.log('Removed Game Description');
        $col__gameDescription.remove();
    },
    
    addHealthLevelsAndButtons(event){
        console.log('Add Health Levels');
        $('#row__buttons').append(`
            <div class='row'>
              <div class="col">
                  <h5 id="hungerLevel">Hunger: ${goku.hungerLevel}</h5>
                  <button type="button" class="btn btn-primary" id='eatButton'>Eat</button>
              </div>
              <div class="col">
                  <h5 id="sleepLevel">Sleepiness: ${goku.sleepLevel}</h5>
                  <button type="button" class="btn btn-success" id='sleepButton'>Sleep</button>
              </div>
              <div class="col">
                  <h5 id="boredomLevel">Boredom: ${goku.boredomLevel}</h5>
                  <button type="button" class="btn btn-danger" id='playButton'>Play</button>
              </div>
            </div>`
        );
    },

    addNameAge(event){
        console.log('Add Health Buttons');
        $('body').prepend(`
            <div class='container'>
                <div class='row'>
                  <h4 id='avatarName'>Name: ${goku.name}</h4>
                </div>  
                <div class='row'>
                  <h4 id='avatarAge'>Age: ${goku.age}</h4>
                </div>  
            </div>`
        );
    }
}

const gamePlay = {
    eat__gokuHungerLevel(event){
        console.log('Goku eats');
        goku.hungerLevel--
        $('#hungerLevel').text(`Hunger: ${goku.hungerLevel}`);
    },

    eat__gokuSleepLevel(event){
        console.log('Goku sleeps');
        goku.sleepLevel--
        $('#sleepLevel').text(`Sleepiness: ${goku.sleepLevel}`);
    },

    eat__gokuBoredomLevel(event){
        console.log('Goku plays');
        goku.boredomLevel--
        $('#boredomLevel').text(`Sleepiness: ${goku.boredomLevel}`);
    },
}

const avatarAgeAndEvolve = {
    timer: null,
    agingFunction(){
        goku.age++;
        $('#avatarAge').text(`Age: ${goku.age}`)
    },
    startTimer(){
        setInterval(this.agingFunction, 3000)
    }


}

/* === Event Functions === */

// timer = setInterval(agingFunction, 1000)
// clearInterval(timer)


/* === Event Listeners === */

$start.on('click', gameInitiate.updateToAvatar1);
$start.on('click', gameInitiate.removeStartButton);
$start.on('click', gameInitiate.addHealthLevelsAndButtons);
$start.on('click', gameInitiate.addNameAge);

$start.on('click', avatarAgeAndEvolve.startTimer());

// FIXME Remove description does not collapse
$start.on('click', gameInitiate.removeGameDesc);


/* === Invoked Functions === */

// AUTO START
$start.click();

// Invoke after game started Manually
$('#eatButton').on('click', gamePlay.eat__gokuHungerLevel);
$('#sleepButton').on('click', gamePlay.eat__gokuSleepLevel);
$('#playButton').on('click', gamePlay.eat__gokuBoredomLevel);
