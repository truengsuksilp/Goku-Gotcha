// Brower will not run individual commands... LOL

console.log('[app.js] Loaded');
$('#container__gameButtons').hide();
$('#container__gameControls').hide();
    // $('#gameOverModal').modal('show');
    // clearInterval(timerAge)



/* === Questions === */
    // Modals: How to pause setInterval

/* === === Approach: Use Objects and Functions === === */

/* === Variables: Global === */

/* === Dom Elements: Landing Page  === */
const $start = $('#startButton'); 
const $coderMode = $('#coderModeButton')       
const $restart = $('#restartButton');

const $col__gameDescription = $('#col__gameDescription');
const $gameDesc__title = $('#gameDesc__title');
const $gameDesc__p = $('.gameDesc__p');
const $gameDesc__p1 = $('#gameDesc__p1');
const $gameDesc__p2 = $('#gameDesc__p2');
const $gameDesc__p3 = $('#gameDesc__p3');
const $gameDesc__ul = $('#gameDesc__ul');

const $avatar = $('#avatar');
const $col__avatar = $('#col__avatar');
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

/* === Dom Elements: Control Buttons  === */
const $resumeButton = $('#resumeButton');
const $pauseButton = $('#pauseButton');
const $reloadButton = $('#reloadButton');
const $evolveButton = $('#evolveButton');

/* === Variables: Objects with Methods === */

const contentSkills = {
    unitTitles: {
        0: '<span><strong>Unit 0</strong></span>: Get into GA Bootcamp',
        1: '<span><strong>Unit 1</strong></span>: Start training with Master Roshi on FE Fund',
        2: '<span><strong>Unit 2</strong></span>: Level up with Master Roshi on Server and DB',
        3: '<span><strong>Unit 3</strong></span>: Get to know Python for Server and DB',
        4: '<span><strong>Unit 4</strong></span>: Train with Master Roshi on React and API',
        5: '<span><strong>Unit 5</strong></span>: Turn Super Seiyan with Capstone Project'
    },
    weekTitles: {
        1: 'FUNDAMENTALS',
    },
    skills: {
        1: 'Terminal / Git / Code Editor',
        2: 'HTML / CSS / JS (Basic)',
        3: 'jQuery / Bootstrap'
    }
} 

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
    isPaused: false,
    coderMode: false,

    // Goku Config: Aging Pace
    healthLevelUp: 3*1000,
    ageLevelUp: 1.5*1000,
    ageCutoff: {
        stage0: 0,
        stage1: 5,
        stage2: 10,
        stage3: 15,
        stage4: 20,
        stage5: 25,
    },
    seiyanStage:{
        stage0: `Clueless Baby Seiyan`,
        stage1: `Curious Toddler Seiyan`,
        stage2: `Clueless Seiyan`,
        stage3: `Training Seiyan`,
        stage4: `Transforming...!!!`,
        stage5: `Super Seiyan !!!`,
    },
    seiyanStageDesc: {
        stage0: `You're clueless baby Seiyan`,
        stage1: `You're discovering dragonballs.. but you're still a clueless baby Seiyan`,
        stage2: `You have the power in your, but you're still lost`,
        stage3: `You're doing coding push-ups`,
        stage4: `You're transforming into Super Seiyan....`,
        stage5: `You're a Super Seiyan!!!`,
    },
    avatarImg: {
        // stage0: Clueless, 
        // stage1: Has a dragonball, 
        // stage2: Lost goku adult, 
        // stage3: Training Goku Adult, 
        // stage4: Turning Seiyan, 
        // stage5: Super Saiyan
        stage0: 'https://media.giphy.com/media/u49rMyXHrTUw8/giphy.gif',
        stage1: 'https://media.giphy.com/media/88kDwXuvzdwHK/giphy.gif',
        stage2: 'https://media.giphy.com/media/13mfssn73An6De/giphy.gif',
        stage3: 'https://media.giphy.com/media/lPwZcFRMGOFPO/giphy.gif',
        stage4: 'https://media.giphy.com/media/C7IxyUB2uXew0/giphy.gif',
        stage5: 'https://media.giphy.com/media/B6SyssSlTgPXq/giphy.gif',
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
        this.updateGameDesc();
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
        // $col__gameDescription.remove();
    },

    updateGameDesc(event){
        $gameDesc__title.text('Coding Skills');
        $gameDesc__p.remove();
        $gameDesc__title.append(`<p>${contentSkills.unitTitles[0]}</p>`);
        $('#gameDesc__ul > li').remove();
    },
 
    addHealthButtons(event) {
        //  console.log('Add Health Buttons');
         $container__gameButtons.show();
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
            if(goku.coderMode === true){
                goku.hungerLevel++
                $hungerLevel.text(`HTML: ${goku.hungerLevel}`);
            } else {
                goku.hungerLevel--
                $hungerLevel.text(`Hunger: ${goku.hungerLevel}`);
            }
            
            console.log('Goku eats');
        } else if(goku.hungerLevel < 0) {
            prompt("You overate.  \n Promise me to not overeat", "I solemly swear to not overeat");
        };
        
        // $hungerLevel.text(`Hunger: ${goku.hungerLevel}`);
    },

    sleep__gokuSleepLevel(event) {    
        if(goku.aging === true && goku.sleepLevel >=0 ){
            if(goku.coderMode === true){
                goku.sleepLevel++
                $sleepLevel.text(`CSS: ${goku.sleepLevel}`);
            } else {
                goku.sleepLevel--
                $sleepLevel.text(`Sleepiness: ${goku.sleepLevel}`);
            }
            
            console.log('Goku sleeps');
        };

        // $sleepLevel.text(`Sleepiness: ${goku.sleepLevel}`);
    },

    play__gokuBoredomLevel(event) {    
        if(goku.aging === true && goku.boredomLevel >=0 ){
            if(goku.coderMode === true){
                goku.boredomLevel++
                $boredomLevel.text(`JS: ${goku.boredomLevel}`);

                // ANCHOR Get Goku to level up by doing JS
                goku.age++
            } else {
                goku.boredomLevel--
                $boredomLevel.text(`Boredom: ${goku.boredomLevel}`);
            }
            
            console.log('Goku plays');
        };
        
        // $boredomLevel.text(`Boredom: ${goku.boredomLevel}`);
    },
}

const gameAge = {

    timerAge: null,
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


    // ANCHOR - Add Level 1: $col__gameDescription.append('<li>${skill1}')

    ageAndEvolve(){
        
        // ISSUE: Cause load timeout
        if(goku.isPaused === false){ 

            // Age if alive
            if(goku.alive === true && goku.age <= 100 && !goku.isPaused){
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
                if( goku.age === goku.ageCutoff.stage1){
                    $('#masterRoshiModal').modal('show');
                    $pauseButton.click();
                    $gameDesc__title.append(`<p class='unitsGA'>${contentSkills.unitTitles[1]}</p>`);
                };
            } else if (
                goku.age >= goku.ageCutoff.stage2 && 
                goku.age < goku.ageCutoff.stage3
            ){
                $avatar.attr('src', goku.avatarImg.stage2);
                $('#seiyanStage').text(`${goku.seiyanStage.stage2}`);
                if( goku.age === goku.ageCutoff.stage2){
                    $gameDesc__title.append(`<p class='unitsGA'>${contentSkills.unitTitles[2]}</p>`);
                };
            } else if (
                goku.age >= goku.ageCutoff.stage3 && 
                goku.age < goku.ageCutoff.stage4
            ){
                $avatar.attr('src', goku.avatarImg.stage3);
                $('#seiyanStage').text(`${goku.seiyanStage.stage3}`);
                if( goku.age === goku.ageCutoff.stage3){
                    $gameDesc__title.append(`<p class='unitsGA'>${contentSkills.unitTitles[3]}</p>`);
                };
            } else if (
                goku.age >= goku.ageCutoff.stage4 && 
                goku.age < goku.ageCutoff.stage5
            ){
                $avatar.attr('src', goku.avatarImg.stage4);
                $('#seiyanStage').text(`${goku.seiyanStage.stage4}`);                if( goku.age === goku.ageCutoff.stage4){
                    $gameDesc__title.append(`<p class='unitsGA'>${contentSkills.unitTitles[4]}</p>`);
                };
            } else if (
                goku.age >= goku.ageCutoff.stage5
            ){
                $avatar.attr('src', goku.avatarImg.stage5);
                $('#seiyanStage').text(`${goku.seiyanStage.stage5}`);
                if( goku.age === goku.ageCutoff.stage5){
                    $gameDesc__title.append(`<p class='unitsGA'>${contentSkills.unitTitles[5]}</p>`);
                };
            };
        }
    },

    healthLevelIncrease(){
        if( 
            goku.coderMode === false &&
            goku.hungerLevel < 10 && 
            goku.sleepLevel < 10 &&
            goku.hungerLevel < 10 &&
            goku.alive === true &&
            goku.age < 100
            ){
            goku.hungerLevel++;
            goku.sleepLevel++;
            goku.boredomLevel++;
            $hungerLevel.text(`Hunger: ${goku.hungerLevel}`);
            $sleepLevel.text(`Sleepiness: ${goku.sleepLevel}`);
            $boredomLevel.text(`Boredom: ${goku.boredomLevel}`);
        } else if (
            goku.coderMode === true &&
            goku.hungerLevel > 0 && 
            goku.sleepLevel > 0 &&
            goku.hungerLevel > 0 &&
            goku.alive === true &&
            goku.age < 100
            ){
            goku.hungerLevel--;
            goku.sleepLevel--;
            goku.boredomLevel--;
            $hungerLevel.text(`HTML: ${goku.hungerLevel}`);
            $sleepLevel.text(`CSS: ${goku.sleepLevel}`);
            $boredomLevel.text(`JS: ${goku.boredomLevel}`);
        } else if (
            goku.coderMode === true
        ){
            console.log('Coder never dies');
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


/* === Event Functions: Controls === */

/* === Event Listeners === */

$start.click(gameInitiate.gameStart.bind(gameInitiate));
$start.click(gameAge.startAging.bind(gameAge));
$start.click((event) => $('#container__gameControls').show());
$start.click((event) => $('#container__gameControls').removeClass('invisible'));
$eatButton.click(gameFeed.eat__gokuHungerLevel);
$sleepButton.click(gameFeed.sleep__gokuSleepLevel);
$playButton.click(gameFeed.play__gokuBoredomLevel);


// Controls
$pauseButton.on('click', (event) => console.log('pause')); 
$pauseButton.on('click', (event) => goku.isPaused = true); 
$pauseButton.on('click', (event) => $pauseButton.addClass('active')); 
$pauseButton.on('click', (event) => $resumeButton.removeClass('active')); 

$resumeButton.on('click', (event) => console.log('play')); 
$resumeButton.on('click', (event) => goku.isPaused = false);
$resumeButton.on('click', (event) => $resumeButton.addClass('active')); 
$resumeButton.on('click', (event) => $pauseButton.removeClass('active')); 

// $evolveButton.on('click', (event) => goku.isPaused = true);
$evolveButton.on('click', (event) => $pauseButton.click());
$evolveButton.on('click', (event) => $avatar.attr('src', goku.avatarImg.stage5))
$evolveButton.on('click', (event) => $('.unitsGA').remove());

$evolveButton.on('click', (event) => console.log('test'));
$evolveButton.on('click', (event) => $gameDesc__title.append(`<p>${contentSkills.unitTitles[1]}</p><p>${contentSkills.unitTitles[2]}</p><p>${contentSkills.unitTitles[3]}</p><p>${contentSkills.unitTitles[4]}</p><p>${contentSkills.unitTitles[5]}</p>`));

$reloadButton.on('click', (event) => location.reload());
$reloadButton.on('click', (event) => $start.click());

$restart.on('click', (event) => location.reload());

$('#closeButtonMasterRoshi').on('click', (event) => $resumeButton.click());

// Coder Mode
$coderMode.click((event) => goku.coderMode = true);
$coderMode.click((event) => $start.click());
$coderMode.click((event) => $hungerLevel.text(`HTML: ${goku.hungerLevel}`));
$coderMode.click((event) => $sleepLevel.text(`CS: ${goku.sleepLevel}`));
$coderMode.click((event) => $boredomLevel.text(`JS: ${goku.boredomLevel}`));


/* === Invoked Functions === */

// AUTO START
// $start.click();
// $('.playButton.medium').click()
// Poke-a-square: $button.click(game.start.bind(game));