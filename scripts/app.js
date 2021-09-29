console.log('[app.js] Loaded');
// $('#gameOverModal').modal('show');

/* === LEARNINGS === */
// Target with ID when possible: Ran twice because there were two red buttons as .btn.btn-danger (start & play);
// Refactoring is error prone: Don't try to collapse into 1 line (e.g., removed eventListeners on other buttons)


/* === === Approach: Use Objects and Functions === === */


/* === Variables: Global === */

/* === Dom Elements: Landing Page  === */
const $start = $('#startButton');        
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
    alive: true,
    aging: false,

    // Goku Aging Values
    healthLevelUp: 3*10000,
    ageLevelUp: 2*1000,
    ageCutoff: {
        stage0: 0,
        stage1: 5,
        stage2: 10,
        stage3: 15,
        stage4: 20,
        stage5: 25,
    },
    seiyanStage:{
        stage0: `Clueless Baby Seiyan, `,
        stage1: `Curious Toddler Seiyan, `,
        stage2: `Clueless Seiyan, `,
        stage3: `Training Seiyan, `,
        stage4: `Transforming..., `,
        stage5: `Super Seiyan !!!, `,
    },
    seiyanStageDesc: {
        stage0: `You're clueless baby Seiyan`,
        stage1: `You're discovering dragonballs.. but you're still a clueless baby Seiyan`,
        stage2: `You have the power in your, but you're still lost`,
        stage3: `You're doing coding push-ups`,
        stage4: `You're gathering power and transforming into Super Seiyan....`,
        stage5: `You're a Super Seiyan!!!`,
    },
    avatarImg: {
        // stage0: Clueless, 
        // stage1: Has a dragonball, 
        // stage2: Lost goku adult, 
        // stage3: Training Goku Adult, 
        // stage4: Turning Seiyan, 
        // stage5: Super Saiyan
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
        // console.log('Add Name & Age');
        goku.name = $('input').val();

        if($('input').val() !== ''){
            $('#avatarName').text(`${goku.name}`);
        } else {
            $('#avatarName').text(`${goku.nameDefault}`);
        }

        $('input').addClass('invisible');
        $('#row__avatarAge').append(`<h6 id="seiyanStage">${goku.seiyanStage.stage0}</h6>`);
        $('#row__avatarAge').append(`<h6 id="avatarAge"></h6>`);

    },

    removeStartButton(event) {
        // console.log('Removed Start Button');
        $container__startButtons.css('display', 'none');
    },

    removeGameDesc(event) {
        // console.log('Removed Game Description');
        $col__gameDescription.remove();
    },
 
    addHealthButtons(event) {
        //  console.log('Add Health Buttons');
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
        console.log('Game Feed Initiated: Start Feeding Goku');
    },

    eat__gokuHungerLevel(event) {
        if(goku.aging === true && goku.hungerLevel >=0 ){
            goku.hungerLevel--
            console.log('Goku eats');
        } else if(goku.hungerLevel < 0) {
            prompt("You overate.  \n Promise me to not overeat", "I solemly swear to not overeat");
        };
        
        $hungerLevel.text(`Hunger: ${goku.hungerLevel}`);
    },

    sleep__gokuSleepLevel(event) {    
        if(goku.aging === true && goku.sleepLevel >=0 ){
            goku.sleepLevel--
            console.log('Goku sleeps');
        };

        $sleepLevel.text(`Sleepiness: ${goku.sleepLevel}`);
    },

    play__gokuBoredomLevel(event) {    
        if(goku.aging === true && goku.boredomLevel >=0 ){
            goku.boredomLevel--
            console.log('Goku plays');
        };
        $boredomLevel.text(`Sleepiness: ${goku.boredomLevel}`);
    },
}

const gameAge = {

    timerAge: null,  // clearInterval(timerAge)
    timerHealth: null, 

    startAging(event){
        this.startAgeTimer();
        this.startHealthTimer();
    },

    startAgeTimer(){
        goku.aging = true;
        this.timerAge = setInterval(this.ageAndEvolve, goku.ageLevelUp);
    },

    startHealthTimer(){
        this.timerHealth = setInterval(this.healthLevelIncrease, goku.healthLevelUp);
    },

    ageAndEvolve(){
        // Age if alive
        if(goku.alive === true){
            goku.age++;
            $('#avatarAge').text(`Age: ${goku.age}`)
        };

        // Evolve logic
        if( goku.age < goku.ageCutoff.stage1
          ){
            $avatar.attr('src', goku.avatarImg.stage0);
            $('#seiyanStage').text(`${goku.seiyanStage.stage0}`)
        } else if(
            goku.age >= goku.ageCutoff.stage1 &&
            goku.age < goku.ageCutoff.stage2
          ){
            $avatar.attr('src', goku.avatarImg.stage1);
            $('#seiyanStage').text(`${goku.seiyanStage.stage1}`)
        } else if (
            goku.age >= goku.ageCutoff.stage2 && 
            goku.age < goku.ageCutoff.stage3
          ){
            $avatar.attr('src', goku.avatarImg.stage2);
            $('#seiyanStage').text(`${goku.seiyanStage.stage2}`)
        } else if (
            goku.age >= goku.ageCutoff.stage3 && 
            goku.age < goku.ageCutoff.stage4
          ){
            $avatar.attr('src', goku.avatarImg.stage3);
            $('#seiyanStage').text(`${goku.seiyanStage.stage3}`)
        } else if (
            goku.age >= goku.ageCutoff.stage4 && 
            goku.age < goku.ageCutoff.stage5
          ){
            $avatar.attr('src', goku.avatarImg.stage4);
            $('#seiyanStage').text(`${goku.seiyanStage.stage4}`)
        } else if (
            goku.age > goku.ageCutoff.stage5
          ){
            $avatar.attr('src', goku.avatarImg.stage5);
            $('#seiyanStage').text(`${goku.seiyanStage.stage5}`)
        };
        
    },

    healthLevelIncrease(){
        if(
            goku.hungerLevel <= 10 && 
            goku.sleepLevel <= 10 &&
            goku.hungerLevel <= 10 &&
            goku.alive === true

            ){
            goku.hungerLevel++;
            goku.sleepLevel++;
            goku.boredomLevel++
            $hungerLevel.text(`Hunger: ${goku.hungerLevel}`)
            $sleepLevel.text(`Sleepiness: ${goku.sleepLevel}`)
            $boredomLevel.text(`Boredom: ${goku.boredomLevel}`)
        } else {
            gameAge.gameOver();
        };
    },

    gameOver(){
        goku.alive = false;
        $('#gameOverModal').modal('show');
        clearInterval(this.timerAge);
        clearInterval(this.timerHealth);

        $avatar.css('opacity', 0.5);
        $col__avatar.css('background-color', 'red');
    }


}

/* === Event Listeners === */

$start.click(gameInitiate.gameStart.bind(gameInitiate));
$eatButton.click(gameFeed.eat__gokuHungerLevel);
$sleepButton.click(gameFeed.sleep__gokuSleepLevel);
$playButton.click(gameFeed.play__gokuBoredomLevel);
$start.click(gameAge.startAging.bind(gameAge));


$restart.on('click', (event) => location.reload());

/* === Invoked Functions === */

// AUTO START
// $start.click();





/* === POKE-A-Square: THIS === */
// FIXME Combined starter code
// Poke-a-square: $button.click(game.start.bind(game));
// $start.click(gameInitiate.gameStart) // Type Error: NOT A FUNCTION