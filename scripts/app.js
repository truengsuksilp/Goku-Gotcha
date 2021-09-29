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
    healthLevelUp: 3*10000,
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

    $start: $('.btn.btn-danger'),

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

const gameFeed = {
    gameFeedInitiation(event){
        this.eat__gokuHungerLevel();
        this.sleep__gokuSleepLevel();
        this.play__gokuBoredomLevel();
    },

    eat__gokuHungerLevel(event) {
        console.log('Goku eats');
        goku.hungerLevel--
        $hungerLevel.text(`Hunger: ${goku.hungerLevel}`);
    },

    sleep__gokuSleepLevel(event) {
        console.log('Goku sleeps');
        goku.sleepLevel--
        $sleepLevel.text(`Sleepiness: ${goku.sleepLevel}`);
    },

    play__gokuBoredomLevel(event) {
        console.log('Goku plays');
        goku.boredomLevel--
        $boredomLevel.text(`Sleepiness: ${goku.boredomLevel}`);
    },
}

const gameAge = {

    timerAge: null,
    timerHealth: null,
    // clearInterval(timer)

    startAging(event){
        this.startAgeTimer();
        this.startHealthTimer();
        this.evolveGokuFunction();
    },

    startAgeTimer(){
        this.timerAge = setInterval(this.aging, goku.ageLevelUp);
    },

    startHealthTimer(){
        this.timerHealth = setInterval(this.healthLevelIncrease, goku.healthLevelUp);
    },

    aging(){
        goku.age++;
        $('#avatarAge').text(`Age: ${goku.age}`)
    },
    
    // ANCHOR Change avatar 
    evolveGoku(){
        if(goku.age >= 10 && goku.age <= 20){
            $avatar.attr('src', goku.avatarImg.stage1)
        } 
    },

    healthLevelIncrease(){
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


}

/* === Event Listeners === */

$start.click(gameInitiate.gameStart.bind(gameInitiate));
$start.click(gameFeed.gameFeedInitiation.bind(gameFeed));
$start.click(gameAge.startAging.bind(gameAge));


/* === Invoked Functions === */

// AUTO START
$start.click();





/* === POKE-A-Square: THIS === */
// FIXME Combined starter code
// Poke-a-square: $button.click(game.start.bind(game));
// $start.click(gameInitiate.gameStart) // Type Error: NOT A FUNCTION