/* === === Testing === === */
// console.log('[app.js] Loaded');
// $('#gameOverModal').modal('show');
// clearInterval(timerAge)

/* === === Approach: Use Objects and Functions === === */

/* === Variables: Global === */

/* === Dom Elements: Landing Page  === */
const $start = $('#startButton'); 
const $coderMode = $('#coderModeButton')       
const $restart = $('#restartButton');

const $col__gameDescription = $('#col__gameDescription');
const $gameDesc__h6 = $('#gameDesc__h6');
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
const $closeButtonMasterRoshi = $('#closeButtonMasterRoshi');
const $hungerLevel = $('#hungerLevel');
const $sleepLevel = $('#sleepLevel');
const $boredomLevel = $('#boredomLevel');

/* === Dom Elements: Control Buttons  === */
const $resumeButton = $('#resumeButton');
const $pauseButton = $('#pauseButton');
const $reloadButton = $('#reloadButton');
const $evolveButton = $('#evolveButton');

/* === Variables: Objects with Methods === */

const hide = {
    gameElements(){
      $('#container__gameButtons').hide();
      $('#container__gameControls').hide();
    },

    inputElement(){
    $('#avatar_NameAge').hide();
    },
}

const contentSkills = {
    unitTitles: {
        0: '<span>Unit 0:</span> Get into GA Bootcamp',
        1: '<span>Unit 1:</span> Get trained on FUNdamentals',
        2: '<span>Unit 2:</span> Learn Server and DB',
        3: '<span>Unit 3:</span> Level up on Server and DB',
        4: '<span>Unit 4:</span> Go through React and API',
        5: '<span>Unit 5:</span> Turn Super Seiyan !!'
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
    name: null,
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
    ageLevelUp: 3*1000,
    ageCutoff: {
        stage0: 0,
        stage1: 5,
        stage2: 10,
        stage3: 15,
        stage4: 20,
        stage5: 25,
    },
    seiyanStage:{
        stage0: `Clueless Baby -`,
        stage1: `Curious Baby -`,
        stage2: `Clueless Goku -`,
        stage3: `Training Goku -`,
        stage4: `Transforming...!!! -`,
        stage5: `Super Seiyan !!! -`,
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
        stage0: 'https://media.giphy.com/media/u49rMyXHrTUw8/giphy.gif',  // stage0: Clueless, 
        stage1: 'https://media.giphy.com/media/88kDwXuvzdwHK/giphy.gif',  // stage1: Has a dragonball, 
        stage2: 'https://media.giphy.com/media/13mfssn73An6De/giphy.gif', // stage2: Lost goku adult, 
        stage3: 'https://media.giphy.com/media/lPwZcFRMGOFPO/giphy.gif',  // stage3: Training Goku Adult, 
        stage4: 'https://media.giphy.com/media/C7IxyUB2uXew0/giphy.gif',  // stage4: Turning Seiyan, 
        stage5: 'https://media.giphy.com/media/B6SyssSlTgPXq/giphy.gif',  // stage5: Super Saiyan
    },
}

const gameInitiate = {

    gameStart(event) {
        console.warn("=== Game Start ===");
        this.updateAvatarToStage0(event);
        this.addName();
        this.addStageAndAge();
        this.removeStartButton();
        this.removeGameDesc();
        this.addHealthButtons();
        this.addHealthLevels();
        this.updateGameDesc();
    },

    updateAvatarToStage0(event) {
        // console.log('Update avatar');
        $avatar.attr('src', goku.avatarImg.stage0)
    },

    addName(event) {
        // console.log('Add Name & Age');
        goku.name = $('input').val();
        $('input').hide();

        if($('input').val() !== ''){
            $('#avatarName').text(`${goku.name} - `);
        } else {
            $('#avatarName').text(`${goku.nameDefault} -`);
        }    
    },

    addStageAndAge(event){
        $('#row__avatarName').append(`<h4 id="seiyanStage">${goku.seiyanStage.stage0}</h4>`);
        $('#row__avatarName').append(`<h4 id="avatarAge"></h4>`);

        $('#seiyanStage').css('margin-top', '5px')
        $('#avatarAge').css('margin-top', '5px')
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
        console.log('Update Game Desc. to show Coding Skills')
        $gameDesc__h6.text('Coding Journey');
        $gameDesc__h6.append(`<p>${contentSkills.unitTitles[0]}</p>`);
        $('#gameDesc__ul > li').remove();
    },
 
    addHealthButtons(event) {
         $container__gameButtons.show();
         $container__gameButtons.removeClass('invisible');
    },

    addHealthLevels(event) {
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
        } else if(goku.hungerLevel < 0) {
            prompt("You overate.  \n Promise me to not overeat", "I solemly swear to not overeat");
        };
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
        };
    },

    play__gokuBoredomLevel(event) {    
        if(goku.aging === true && goku.boredomLevel >=0 ){
            if(goku.coderMode === true){
                goku.boredomLevel++
                $boredomLevel.text(`JS: ${goku.boredomLevel}`);

                // NOTE Get Goku to level up by doing JS
                goku.age++
            } else {
                goku.boredomLevel--
                $boredomLevel.text(`Boredom: ${goku.boredomLevel}`);
            }
        };
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

    ageAndEvolve(){
        
        if(goku.isPaused === false){ 

            // Age if alive
            if(goku.alive === true && goku.age <= 100 && !goku.isPaused){
                goku.age++;
                $('#avatarAge').text(`Age: ${goku.age}`)
            };

            // REVIEW Evolve logic -- 60 lines of code with long IF conditions
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
                    $gameDesc__h6.append(`<p class='unitsGA'>${contentSkills.unitTitles[1]}</p>`);
                };
            } else if (
                goku.age >= goku.ageCutoff.stage2 && 
                goku.age < goku.ageCutoff.stage3
            ){
                $avatar.attr('src', goku.avatarImg.stage2);
                $('#seiyanStage').text(`${goku.seiyanStage.stage2}`);
                if( goku.age === goku.ageCutoff.stage2){
                    $gameDesc__h6.append(`<p class='unitsGA'>${contentSkills.unitTitles[2]}</p>`);
                };
            } else if (
                goku.age >= goku.ageCutoff.stage3 && 
                goku.age < goku.ageCutoff.stage4
            ){
                $avatar.attr('src', goku.avatarImg.stage3);
                $('#seiyanStage').text(`${goku.seiyanStage.stage3}`);
                if( goku.age === goku.ageCutoff.stage3){
                    $gameDesc__h6.append(`<p class='unitsGA'>${contentSkills.unitTitles[3]}</p>`);
                };
            } else if (
                goku.age >= goku.ageCutoff.stage4 && 
                goku.age < goku.ageCutoff.stage5
            ){
                $avatar.attr('src', goku.avatarImg.stage4);
                $('#seiyanStage').text(`${goku.seiyanStage.stage4}`);                
                if( goku.age === goku.ageCutoff.stage4){
                    $gameDesc__h6.append(`<p class='unitsGA'>${contentSkills.unitTitles[4]}</p>`);
                };
            } else if (
                goku.age >= goku.ageCutoff.stage5
            ){
                $avatar.attr('src', goku.avatarImg.stage5);
                $('#seiyanStage').text(`${goku.seiyanStage.stage5}`);
                if( goku.age === goku.ageCutoff.stage5){
                    $gameDesc__h6.append(`<p class='unitsGA'>${contentSkills.unitTitles[5]}</p>`);
                };
            };
        }
    },

    // REVIEW -- VERY LONG IF CONDITIONS

    healthLevelIncrease(){
        if(goku.isPaused === false){
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

// EXTRA Buttons: Pause, Resume, Evolve, Coder Mode //

controlButtons = {

    pauseButton(event){
        console.log('pause');
        goku.isPaused = true;
        $pauseButton.addClass('active');
        $resumeButton.removeClass('active');  
    },

    resumeButton(event){
        console.log('play');
        goku.isPaused = false; 
        $resumeButton.addClass('active');
        $pauseButton.removeClass('active');
    },

    evolveButton(event){
        console.log('evolve');
        goku.isPaused = true;
        $avatar.attr('src', goku.avatarImg.stage5);

        // Remove existing and add all content 
        $('.unitsGA').remove();
        $gameDesc__h6.append(`
            <p>${contentSkills.unitTitles[1]}</p>
            <p>${contentSkills.unitTitles[2]}</p>
            <p>${contentSkills.unitTitles[3]}</p>
            <p>${contentSkills.unitTitles[4]}</p><p>${contentSkills.unitTitles[5]}</p>`
            );
        $gameDesc__h6.css('line-height', 1.8);
    },

    // evolveModal

    coderMode(event){
        goku.coderMode = true;
        $start.click();

        // Label Updates
        $hungerLevel.text(`HTML: ${goku.hungerLevel}`);
        $sleepLevel.text(`CS: ${goku.sleepLevel}`);
        $boredomLevel.text(`JS: ${goku.boredomLevel}`);
    },
}

/* === Event Listeners === */

$start.click(gameInitiate.gameStart.bind(gameInitiate));
$start.click(gameAge.startAging.bind(gameAge));
$start.click((event) => $('#container__gameControls').show());
$start.click((event) => $('#container__gameControls').removeClass('invisible'));
$eatButton.click(gameFeed.eat__gokuHungerLevel);
$sleepButton.click(gameFeed.sleep__gokuSleepLevel);
$playButton.click(gameFeed.play__gokuBoredomLevel);


// Extra Controls
$pauseButton.on('click', controlButtons.pauseButton.bind(controlButtons)); 
$resumeButton.on('click', controlButtons.resumeButton.bind(controlButtons)); 
$evolveButton.on('click', controlButtons.evolveButton.bind(controlButtons)); 
$coderMode.on('click', controlButtons.coderMode.bind(controlButtons));
$reloadButton.on('click', (event) => location.reload());
$restart.on('click', (event) => location.reload());
$closeButtonMasterRoshi.on('click', (event) => $resumeButton.click());

/* === Invoked Functions === */

// $start.click();
$(window).on("load", hide.gameElements);