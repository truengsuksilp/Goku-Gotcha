console.log('[app.js] Loaded');
// $('#gameOverModal').modal('show');



/* === === Approach: Use Objects and Functions === === */


/* === Variables: Global === */

/* === Dom Elements: Landing Page  === */
const $start = $('.btn.btn-danger');
const $restart = $('#restartButton');
const $avatar = $('img');
const $col__gameDescription = $('#col__gameDescription');
const $col__avatar = $('#col__avatar');
const $col__startButton = $('#col__startButton');
const $row__avatar = $('#row__avatar');

/* === Dom Elements: Game Page  === */
const $avatarName = $('#avatarName');
const $container__startButtons = $('#container__startButtons');
const $container__gameButtons = $('#container__gameButtons');
const $eatButton = $('#eatButton');
const $sleepButton = $('#sleepButton');
const $playButton = $('#playButton');
const $hungerLevel = $('#hungerLevel');
const $sleepLevel = $('#sleepLevel');
const $boredomLevel = $('#boredomLevel');



// FIXME -- Doesn't work: defined before user clicks starts ==> Undefined
const $avatarAge = $('#avatarAge'); // 


/* === Variables: Objects with Methods === */

const goku = {

    // Goku Initiation
    name: null, // 
    nameDefault: 'Goku',
    age: 0,
    hungerLevel: 5,
    sleepLevel: 5,
    boredomLevel: 5,

    // Goku Aging Values
    healthLevelUp: 3*1000,
    ageLevelUp: 3*1000,
    ageStageCutoff: {
        stage0: 0,
        stage1: 5,
        stage2: 10,
        stage3: 15,
        stage4: 20,
    },
    avatarImg: {
        // stage0: Clueless, stage1: Has a dragonball, stage2: Lost goku adult, 
        // stage3: Training Goku Adult, stage4: Turning Seiyan, stage5: Super Saiyan
        stage0: 'https://media.giphy.com/media/u49rMyXHrTUw8/giphy.gif?cid=790b76111601a3644bfa79fb8520ea1cd99db6869145ae3d&rid=giphy.gif&ct=g',
        stage1: 'https://media.giphy.com/media/88kDwXuvzdwHK/giphy.gif?cid=790b7611378ee8712358862eba44e6f8e70b65fba2ca0437&rid=giphy.gif&ct=g',
        stage2: 'https://media.giphy.com/media/13mfssn73An6De/giphy.gif?cid=ecf05e47onbo719k8c3eqj90d2cvbped2zteiwy8i9ooxr8y&rid=giphy.gif&ct=g',
        stage3: 'https://media.giphy.com/media/lPwZcFRMGOFPO/giphy.gif?cid=ecf05e47w312ugxoztulgj8jc35tc48e52p2iiyk0n94b0b4&rid=giphy.gif&ct=g',
        stage4: 'https://media.giphy.com/media/C7IxyUB2uXew0/giphy.gif?cid=ecf05e47ouwz87s9vfeepewqjcl61pe1yfn6iga4dep8a2el&rid=giphy.gif&ct=g',
        stage5: 'https://media.giphy.com/media/B6SyssSlTgPXq/giphy.gif?cid=ecf05e47idy9ssm5xkenkb8b56cyjddtr4srrm56e72cn5sv&rid=giphy.gif&ct=g',
    },
}

const gameInitiate = {

    // Poke-a-Square: game.button.click(game.start.bind(this));
    // New Listener: $start.click(gameInitiate.gameStart.bind(this));

    gameStart(event) {
        console.warn("=== Game Start ===");
        this.updateAvatarToStage0(event);
        this.addNameAge();
        this.removeStartButton();
        this.removeGameDesc();
        this.addHealthButtons();
        this.addHealthLevels();
    },

    updateAvatarToStage0(event) {
        console.log('Update avatar');
        // $avatar.remove();
        $avatar.attr('src', goku.avatarImg.stage0)
    },

    addNameAge(event) {
        console.log('Add Name & Age');

        goku.name = $('input').val();

        if($('input').val() !== ''){
            $('#avatarName').text(`Name: ${goku.name}`);
        } else {
            $('#avatarName').text(`Name: ${goku.nameDefault}`);
        }

        $('input').addClass('invisible');
        
        // $('#row__avatarAge').append(`<h4 id="avatarAge">Age: ${goku.age}</h4>`);
        $('#row__avatarAge').append(`<h4 id="avatarAge"></h4>`);
    },

    removeStartButton(event) {
        console.log('Removed Start Button');
        $container__startButtons.css('display', 'none');
    },

    removeGameDesc(event) {
        console.log('Removed Game Description');
        $col__gameDescription.remove();
    },
 
    addHealthButtons(event) {
         console.log('Add Health Buttons');
         $container__gameButtons.removeClass('invisible');
    },

    addHealthLevels(event) {
        console.log('Add Health Levels');
        $hungerLevel.text(`Hunger: ${goku.hungerLevel}`);
        $sleepLevel.text(`Sleepiness: ${goku.sleepLevel}`);
        $boredomLevel.text(`Boredom: ${goku.boredomLevel}`);
    },

}

const gamePlay = {
    eat__gokuHungerLevel(event) {
        console.log('Goku eats');
        goku.hungerLevel--
        $hungerLevel.text(`Hunger: ${goku.hungerLevel}`);
    },

    eat__gokuSleepLevel(event) {
        console.log('Goku sleeps');
        goku.sleepLevel--
        $sleepLevel.text(`Sleepiness: ${goku.sleepLevel}`);
    },

    eat__gokuBoredomLevel(event) {
        console.log('Goku plays');
        goku.boredomLevel--
        $boredomLevel.text(`Sleepiness: ${goku.boredomLevel}`);
    },
}

const avatarAgeAndEvolve = {

    timerAge: null,
    timerHealth: null,
    // clearInterval(timer)

    agingFunction(){
        goku.age++;
        $('#avatarAge').text(`Age: ${goku.age}`)
    },

    healthLevelIncreaseFunction(){
        // FIXME while loop fails: while( hungerLevel < 10 ){}
        if(goku.hungerLevel <= 9){
            goku.hungerLevel++;
            goku.sleepLevel++;
            goku.boredomLevel++
            $hungerLevel.text(`Hunger: ${goku.hungerLevel}`)
            $sleepLevel.text(`Sleepiness: ${goku.sleepLevel}`)
            $boredomLevel.text(`Boredom: ${goku.boredomLevel}`)
        } else {
            clearInterval(this.startAgeTimer);
            goku.hunger = 0;

            $('#gameOverModal').modal('show');

            $avatar.css('opacity', 0.5);
            $col__avatar.css('background-color', 'red');
            
        };
    },

    startAgeTimer(){
        this.timer = setInterval(this.agingFunction, goku.ageLevelUp);
    },

    startHealthTimer(){
        setInterval(this.healthLevelIncreaseFunction, goku.healthLevelUp);
    }

    // FIXME While Loop fails... does not read goku.age
    // while ( goku.age > 10 ){
    //     $avatar.attr('src', goku.avatarImg.stage1)
    // }

}

/* === Event Listeners === */

// Initiate
$start.on('click', gameInitiate.addNameAge);
$start.on('click', gameInitiate.updateAvatarToStage0);
$start.on('click', gameInitiate.removeGameDesc);
$start.on('click', gameInitiate.removeStartButton);
$start.on('click', gameInitiate.addHealthButtons);
$start.on('click', gameInitiate.addHealthLevels);
$restart.on('click', (event) => location.reload());

// Timer
$start.on('click', avatarAgeAndEvolve.startAgeTimer());
$start.on('click', avatarAgeAndEvolve.startHealthTimer());

// FIXME Combined starter code
// EXAMPLE from Poke-a-square: game.button.click(game.start.bind(this));
// $start.click(gameInitiate.gameStart.bind(this));

/* === Invoked Functions === */

// AUTO START
// $start.click();

// Invoke after game started Manually
$('#eatButton').on('click', gamePlay.eat__gokuHungerLevel);
$('#sleepButton').on('click', gamePlay.eat__gokuSleepLevel);
$('#playButton').on('click', gamePlay.eat__gokuBoredomLevel);













    // Moved code to HTML: Refactor on Tues, 9/28

    // addHealthLevelsAndButtons(event){
    //     console.log('Add Health Levels');
    //     $('#row__buttons').append(`
    //         <div class='row'>
    //           <div class="col">
    //               <h5 id="hungerLevel">Hunger: ${goku.hungerLevel}</h5>
    //               <button type="button" class="btn btn-primary" id='eatButton'>Eat</button>
    //           </div>
    //           <div class="col">
    //               <h5 id="sleepLevel">Sleepiness: ${goku.sleepLevel}</h5>
    //               <button type="button" class="btn btn-success" id='sleepButton'>Sleep</button>
    //           </div>
    //           <div class="col">
    //               <h5 id="boredomLevel"></h5>
    //               <button type="button" class="btn btn-danger" id='playButton'>Play</button>
    //           </div>
    //         </div>`
    //     );
    // },