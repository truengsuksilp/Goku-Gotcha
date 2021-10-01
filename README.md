# Project-Zero: Goku-Gotcha

-----------------------------------------------------

### LEARNINGS
- **HTML & JS: jQuery**: Build in HTML and use JS to update visibilty later.  So you can prototype faster and it's easy to target by defining jQuery Alias
- **CSS & JS: jQuery**: Make your targets specific.  Use ID when possible and minimize wildcards (*), so you don't accidentally target new elements with the same class (e.g., buttons)
- **JS**: Refactoring is error prone.  I tried too too much, deleted some lines and spent hours tracing and debugging

-----------------------------------------------------

### Epic: A Story of Goku going through GA Bootcamp
Goku-Gotcha is a story of Goku leveling up...
..but there's a "Gotcha" that Goku needs to stay alive by doing "Human Things"

### Design Approach
- Landing Page: Warms the user up for the game of keeping Goku alive throughout GA Bootcamp
- Game Console Page: Interactive page to interact with Goku's health levels and show Goku evolves through GA Bootcamp

### Wireframes
Link: https://thanatadruengsuksilp685999.invisionapp.com/freehand/SEI-913---gokugotcha-wireframe-HyCOqwAPW
- MVP: Shows Goku Leveling up
- Game V1: Add Play / Pause / Force Evolve
- Game V2: Shows Goku evolve like a Digimon
- Game V3: Add Coding Skills into Game Console page (5 Units of GA)

### Storyline: 
Goku is leveling up by going through GA Bootcamp.

Goku needs to stay alive.  
GA Bootcamp increases your hunger, sleepiness, boredom
- Do nothing and you'll die
- To not die, you need to do "Human Things"

"Human Things" you need to do during Bootcamp:
- Eat
- Sleep
- Play

Goku dies when you do not do human things and your level of hunger, sleepiness, boredom reaches Level 10

### Use Stories
- When I am in any page, I can see Goku GIFs on the screen, so I can see Goku progresses and evolve
- When I am in the landing page, I can see game description, so I know how to play the game
- When I am in the landing page, I customize avatar name, so I can personalize the journey through GA Bootcamp
- When I am in the game console page, I can see age increasing in weeks and day of week (1-5), so I know where I am the GA bootcamp journey
- When I am in the game console page, I can see health issues metric increases every 3s, so I know I need to do Human Things
- When I am in the game console page, I can see Goku dies when any of the health issues metric reaches 10, so I know when it's game over
- When I am in the game console page, I can see Goku image change based on age, so I can see myself powering up through GA Bootcamp

##### Spec
- Display a character of your choice on the screen to represent your pet
- Display the following metrics for your pet
- Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
- Add the ability to name your pet.
- Increase your pet's age every x minutes
- Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
- You pet should die if Hunger, Boredom, or Sleepiness hits 10.
- Morph your pet at certain ages.


##### Approach: Use Objects and nested methods

/* === Dom Elements  === */
- Landing Page
- Game Console Page

/* === Object & Methods  === */
- goku: characteristics and aging config.
- gameInitation: gameStart method to transition to game page
- gameFeed: gameFeedInitation method to allow users to interact with health level metrics
- gameAge: startAging method to get Goku to age, deteriorate, and evolve

/* === Event Listeners  === */
- Add interactions (clicks to start, eat, sleep, play)
- Add control buttons (clicks to stop, reload, restart after game over)

-----------------------------------------------------

*****Appendix

* === LEARNINGS === */
    // jQuery: Cannot target a DOM element in the JS code, because it's created
    // CSS: Target with ID when possible (e.g., define alias for $start as a class for red buttons )
        // Lazy and define alias for "Start !" red button as $start
        // Later added a red button for "Play" 
        // Added code to click $start and code ran twice.. ($start.click)
    // CSS & Bootstrap: Wildcard selector (*) can be a pain with Modal (e.g., background-color: black;)
    // JS: Pay attention during class!!! 
        // Chrome Dev Tool | element: remove or update properties e.g., background-color, display
        // e.g., bind(${object}) --> bind(this)
    // JS: Refactoring is error prone.  Don't try to do too much
        // Start: Wrote functions outside an object
        // Refactor: Put functions into objects, and call methods with one method ( startGame(event), startFeed(event) )
        // Attempt: Tried to collapse into 1 line and removed eventListeners on other buttons
        // Final: 5 lines
    // JS: Timer -- Use it to invoke loops (e.g., evolve)
        // Context 1: Store time in timerAge: null,
        // Context 2: Create method timerAge(){ //--code block with this--// }
        // Before: this.timerAge = setInterval (agingFunction, 1000ms)  // Increase age every 1000ms
        // After: this.timerAge = setInterval (ageAndEvolve, 1000ms)    // Add 1 conditional to run every 1000ms, check age & change img
    // JS & HTML: Visible AND invisible components to keep everything in HTML, so it's easy to prototype and target with jQuery alias 
        // Former approach: Start button, remove start button, add 3 buttons
        // New approach: Start buttons + 3 buttons (.invisible), CSS: visibility: hidden, JS: remove class
    

/* ==== Tips & Syntax notes === */
    // JS: alert() sucks!! ---> Use prompt, so you can cancel out
    // JS: Syntax wat -- Backticks (``) ignores spaces 
    // CSS: Use display: none
    // Bootstrap: KISS - modal-title, Content, Blue button, Grey button
    // Bootstrap & CSS: Hide and Show
        // Use class .invisible and .removeClass('invisible'): https://getbootstrap.com/docs/4.1/utilities/visibility/
        // Usual doesn't work Display: none -> display: flex (See Chrome Dev Tool Elements > Styles --> change to display: Flex)


/* === Variables: n/a  === */
/* === Event Functions: n/a  === */ - Moved to methods

/* === Invoked Functions: n/a === */ - Commented out auto-start for the game's final version
