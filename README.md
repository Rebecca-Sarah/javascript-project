# **Friends Quiz - Project Portfolio 2 - JavaScript_** 

This Friends Quiz is a short quiz on the siz main characters off the TV show friends. The quiz contains 6 different playing options where the player can decide who they would like to be quizzed on. There are 4 questions in each category 


You can view the live site here - <a href="https://rebecca-sarah.github.io/javascript-project/" target="_blank" rel="noopener">Friends Quiz</a>

# Contents

* [**Objective**](<#objective>)
* [**User Experience UX**](<#user-experience-ux>)
    * [Design Prototype](<#design-prototype>)
    * [Site Structure](<#site-structure>)
    * [Design Choices](<#design-choices>)
    *  [Typography](<#typography>)
    *  [Colour Scheme](<#colour-scheme>)
* [**Features**](<#features>)
*   [**Existing Features](<#existing-features>)
    * [Starting Section](<#starting-section>)
    * [Rules Section](<#rules-section>)
    * [Categories Section](<#categories-section>)
    * [Question Section](<#question-section>)
    * [Results Section](<#results-section>)
    * [Score](<#score>)
* [**Future Features**](<#future-features>)
    * [High Scores](<#high-scores>)
    * [Friends of Friends](<#friends-of-friends>)
    * [Sound Settings](<#sound-settings>)
    * [Submit your own questions](<#submit-your-own-questions>)
    * [Difficulty levels](<#difficulty-levels>)
* [**Technologies Used**](<#technologies-used>)
* [**Testing**](<#testing>)
* [**Deployment**](<#deployment>)
* [**Credits**](<#credits>)
    * [**Content**](<#content>)
    * [**Media**](<#media>)
    * [**Code**](<#code>)
*  [**Acknowledgments**](<#acknowledgements>)
*  [**Personal Development**](<#personal-development>)


# Objective

In this project I intend on making a quiz quizzing Friends fans on their knowledge from the TV show Friends. I plan on demonstrating skills used in HTML, CSS and JavaScript. 

[Back to top](<#contents>)

# User Experience (UX)

## Design Prototype

The very first design prototype was created using [Uizard](http://uizard.com/). I designed the inital look for the quiz using this program so that I could have an idea of what I wanted to achieve without having to worry about the colour theme, font style and button styles when it came to starting to write the code. When I had a clear idea of how I wanted the quiz to look I began to write the html and css in gitpod. <br /><br />

Uizard Start Prototype<img width="451" alt="image" src="https://user-images.githubusercontent.com/102615645/178159948-b6552767-8973-4be6-9567-5fdbb37f10f6.png">

Uizard Rules Prototype <img width="385" alt="image" src="https://user-images.githubusercontent.com/102615645/178160266-b31497af-70a4-46e1-aea6-2362628af00d.png">

Uizard Categories Prototype <img width="410" alt="image" src="https://user-images.githubusercontent.com/102615645/178160150-d8ac3cb5-a62d-4147-9036-49f2c84ab122.png">

Uizard Questions Prototype <img width="433" alt="image" src="https://user-images.githubusercontent.com/102615645/178160089-05fccfb5-9192-4dc2-9653-662624213ac7.png">

Uizard Result Prototype <img width="376" alt="image" src="https://user-images.githubusercontent.com/102615645/178160208-3c9c5039-7372-490d-9562-f465479b2666.png">

The design prototype for the Friends Quiz was designed using [Uizard](http://uizard.com/). The many different sections where disigned to ensure that every page was in the same tone and went well together. I tried to make the quiz as similar to the initial design as it was a great help when it came to coding the quiz having it created and I knew exactly what I wanted to do. <br /><br />


[Back to top](<#contents>)

## Site Structure
The Friends Quiz is a one-page website which has been designed to look like an application. When the user access the quiz they are initally met with a start button to begin the game, then the rules of the quiz, letting them know what they have to do before they begin. The quiz is very straight forward in how to play and the user is guided by the buttons. When they click next on the rules page, they will choose which character they would like to be quizzed on, after they have choosen the questions will begin and they click the answer they think is correct. If they get a question correct their score will increase by 1. At the end of the game they are brought to the results page where they see their final score and there is a button there that they can press to replay so they can be quizzed on a different character. 

[Back to top](<#contents>)
## Design Choices

 * ### Typography
      The main font that was chosen was Nunito which was used throughout all three pages of the website with sans-serif as a second choice. Keeping the same font for all the text keeps the theme of continuity which is bettter for the users experience when visiting the site. 
      Most of the text used is the same weight to continue the pages blending well together, with the headings for the paragraphs being a larger size to ensure the user knows what the main objective for the paragraph is. 

 * ### Colour Scheme
     The background picture was choosen as it is the New York skyline where the TV show, Friends takes place. For the main container throughout, I choose white as a start difference to the dark blue picture. The buttons are aquamarine as it was a very similar color to the lights on the bridge in the background to bring it all together. The main colour of text throughout is black, which is for a stark contrast for the white background of the container. <br /><br />


Colour Palate <img width="372" alt="image" src="https://user-images.githubusercontent.com/102615645/178160404-228f7cb7-7123-4091-8fd8-c6a47e778d7f.png">


[Back to top](<#contents>)
# Features

The Astronomy Quiz website is set up to be very easy to use and visually appealing for the player. It was designed with player-experience in mind. The player should feel like they are doing an Astronomy Quiz just by the visual theme and feel encouraged to keep playing to try and beat their current hiscore.

## Existing Features

* ### Starting Section
    * The starting section is designed to allow the user to get a feel for the quiz, just a basic design of a start button in the middle of the page, with a background image of the Brooklyn bridge in the background. The start button will then move on to the Rules section next. 
    Starting Section - <img width="752" alt="image" src="https://user-images.githubusercontent.com/102615645/178161238-22bcb111-00cf-4644-a0dc-d95a5b43f261.png">

* ### Rules Section
    * The next section within the quiz is the Rules, where it describes how to play, allowing the user a chance to come to terms with what to do, and understand that there is only one chance to choose an answer. This is important so the user doesn't get frustrated when playing, so they can take more time to think about the answers, giving them more of an opportunity to click the correct answer. 
    Rules Section - <img width="538" alt="image" src="https://user-images.githubusercontent.com/102615645/178161263-b15fcaf6-e000-4037-9be5-09761d2c7384.png">

* ### Categories Section
    * The categories section consists of 6 different buttons, which are the main charaters in the show, including, Ross, Rachel, Monica, Pheobe, Joey and Chandler. The categories section allows the user a chance to choose who they would like to be questionned on, 
    Categories Section - <img width="517" alt="image" src="https://user-images.githubusercontent.com/102615645/178161277-5f5e4efe-fedf-4e39-9deb-9f1aad19973b.png">
* ### Questions Section 
    * The question section consists of four questions per character, after the user selects an answer the next question will automatically appear to allow the user a seamless experience on the app, allowing them to only tap once. The questions are created with different diffculty which cater to all users and their ability to answer the questions. The questions are also all multiple choice, allowing the user the opportunity to guess if they are unsure of the answer. When they answer correctly the score will increase below the questions. 
    Question Section - <img width="495" alt="image" src="https://user-images.githubusercontent.com/102615645/178162614-eb4b5582-e362-4f24-b45c-ea7c73776c5a.png">
* ### Results Section
    * The results section is designed to congratulate the user on finishing the questions. Their score appears at the end telling them what they got. Their is then a button for them to replay the quiz, taking them back to the rules section where they can choose a different character to be quizzed on. 
* ### Score 
    * The score feature counts how many questions the user get correct and add 1 when they get a question right. It shows on the screen as the user plays through the quiz div and then the total gets shown at the end on the results page.
* ## Future Features 

* ### High Scores

    * Where the game stores the high scores played at once and tells you which character you know the best, by playing them all.

* ### Friends of Friends

    * Having a social side to the game where you can play against other Friends fans and see who can get the highest score as well as in the fastest time. There would be a change to discuss their love of the show in a messages side as well. 

* ### Sound Settings

    * Adding sounds to the game when a button is pressed, an answer is correct or incorrect, letting the player know what answer they have choosen.

* ### Submit Your Own Questions

    * An area for the user to submit questions they would like to test other poeple on, to see how well other people would get on with their questions, this would bring the user closer to the game as well, giving them some ownership in what is being played. 

* ### Difficulty levels 

    * Within each category there could be three different levels of questions to see how well the users really know each person within the show, this would be a fun experience for the user as it could also total up the scores for all three levels played to see what their score it overall. 


[Back to top](<#contents>)

# Technologies Used
* [HTML5](https://en.wikipedia.org/wiki/HTML) - Provides the content and structure for the website.
* [CSS3](https://en.wikipedia.org/wiki/CSS) - Provides the styling for the website.
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Provides the functionality of the website.
* [GitHub](https://github.com/) - Used to host and deploy the website.
* [GitBash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) - Terminal used to push changes to the GitHub repository.e
* [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Used to test responsiveness and debug
* [uizard](https://app.uizard.io/prototypes) - Used to design wireframes of the quiz. 
* [compressingjpeg](http://compressingjpeg.come) - Used to compress background image. 

[Back to top](<#contents>)

# Testing

* ## Code Validation

    * The Friends Quiz has been tested through different validators for the different codes written. All the code has been validated through [W3C HTML Validator](https://validator.w3.org/) the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), the [ES6 syntax check](https://www.piliapp.com/) and the [beautify tools](https://beautifytools.com/). There were 2 errors found in HTML and 2 warning found in CSS which were fixed immediately and documented below.
    <br /><br />

* ### HTML Validation

    HTML Validation <img width="446" alt="image" src="https://user-images.githubusercontent.com/102615645/178163653-6f4df546-d038-44d2-89aa-be6ab36fd0ee.png">

* ### CSS Validation

    CSS Validation <img width="771" alt="image" src="https://user-images.githubusercontent.com/102615645/178163701-c45fd98b-347f-431e-a8d6-130551f80396.png">

* ### JS Validation

    * I have tested my Javascript files which has gone through validating on the [Beautify Tools](http://beautifytools.com). This has highlighted some warnings that are highlighted below. 
   <br /><br />

    JS Validation <img width="485" alt="image" src="https://user-images.githubusercontent.com/102615645/178164008-5319bb9a-7d89-4e2f-b235-6c062caae9c2.png">
    <img width="911" alt="image" src="https://user-images.githubusercontent.com/102615645/178164185-511b06a4-889b-4e6a-92b0-254cff6c7198.png">

* Warning 1 
    * **'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6')**. This warning is caused by line 33, 36, 39, 42, 45 and 48 in script.js. With working with my mentor, it has been said that using this in the code it alright. <br /><br />
* Warning 2 
    * **'template literal syntax' is only available in ES6 (use 'esversion: 6')**. This warning appears on line 128. It has been checked by a tutor and has been said that it is ok. <br /><br />
* ## Lighthouse Testing 

    * Furthermore the website has been through the [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) Lighthouse Testing which tests the website for the following:
        * Performance - How the page performs whilst loading.
        * Accessibility - Is the site accessible for all players and how can it be improved.
        * Best Practices - Site conforms to industry best practices.
        * SEO - Search Engine Optimisation. Is the site optimised for search engine result rankings. 
        <br /><br />

    1st testing - <img width="295" alt="image" src="https://user-images.githubusercontent.com/102615645/178165241-314ef52c-ac07-4292-a560-ac81e69015d4.png"><br /><br />

    I initially tested the quiz and found that the performance was slow, so I compressed my background image of the quiz. I tested the quiz again and it brought my performance up to 100. <br /><br />

    2nd testing - <img width="294" alt="image" src="https://user-images.githubusercontent.com/102615645/178165464-000889b5-7483-40eb-80a7-a9f31de7192d.png">


* ## Accessibility Testing
    * I also put the website through [a11y](https://color.a11y.com/Contrast/) to further test the contrast and found no issues.  <br /><br />

    a11y test - <img width="339" alt="image" src="https://user-images.githubusercontent.com/102615645/178165577-3a04ac93-d488-4bfb-bdc2-60b8a3c903c1.png">


* ## Compressing Images
    * All images have been compressed with [compressingjpeg](https://compressingjpeg.com) and I managed to have it compressed by 45%.<br /><br />


* ## Manual Testing
    * In addition to the other tests, I have created a manual checklist to ensure everything works well. 


   * ### Manual Tests Conducted
      * Start Section
        * Ensure the start button is working and links to the rules div
        * Ensure the hover element is working over the buttons 
      * Rules Section
        * Ensure the next button is working and links to the characters div 
      * Character Section 
        * Ensure that all buttons lead to their correct questions and answers
        * Ensure all buttons have the correct hover over them 
      * Question Section
        * Ensure that the question and the answers are displayed correctly
        * Ensure that the score will increase by one if the answer is correct 
      * Results Section
        * Ensure that the correct score is being displayed 
        * Ensure that the button links back to the rules page to start again
        * Ensure the correct score is being shown on the page 
        <br /><br />

[Back to top](<#contents>)

# Deployment

### **To deploy the project**
The site was deployed to GitHub pages. The steps to deploy a site are as follows:
  1. In the GitHub repository, navigate to the **Settings** tab.
  2. Once in Settings, navigate to the **Pages** tab on the left-hand side.
  3. Under **Source**, select the branch to **master**, then click **save**.
  4. Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

<details><summary><b>Git Deploy Preview Image</b></summary>

### **To fork the repository on GitHub**
A copy of the GitHub Repository can be made by forking the GitHub account. This copy can be viewed and changes can be made to the copy without affecting the original repository. Take the following steps to fork the repository;
1. Log in to **GitHub** and locate the [repository](https://github.com/Rebecca-Sarah/javascript-project).
2. On the right-hand side of the page inline with the repository name is a button called **'Fork'**, click on the button to create a copy of the original repository in your GitHub Account.

<details><summary><b>Git Fork Preview Image</b></summary>

### **To create a local clone of this project**
The method from cloning a project from GitHub is below:

1. Under the repository’s name, click on the **code** tab.
2. In the **Clone with HTTPS** section, click on the clipboard icon to copy the given URL.
3. In your IDE of choice, open **Git Bash**.
4. Change the current working directory to the location where you want the cloned directory to be made.
5. Type **git clone**, and then paste the URL copied from GitHub.
6. Press **enter** and the local clone will be created.

<details><summary><b>Git Clone Preview Image</b></summary>

[Back to top](<#contents>)

# Credits
### Content

* The font came from [Google Fonts](https://fonts.google.com/)
* The colour colors where retireved from [converting colors](https://convertingcolors.com/rgb-color-0_71_55.html)
* The responsive preview image at the top of the README.md came from [Techsini](https://techsini.com/multi-mockup/index.php)
* The questions and answers came from [buzzfeed](http://buzzfeed.com), [Whatculture](http://whatculture.com), [FunTrivia](http://funtrivia.org).

### Media
* The background image came from [pexels](http:pexels.com).

### Code
* The code for the hiscores was based off guidance and inspiration from a player name [Minna N](https://dev.to/minna_xd). I used [DevTo](https://dev.to/minna_xd/adding-a-high-score-table-to-javascript30-whack-a-mole-4adk) to gain a good understanding of what is required to create a hiscores system using local storage and then implemented a version of my own for The Astronomy Quiz.
* For the contact form, I wanted to be able to actually receive emails and understand how that can be achieved. I stumbled upon a brilliant website called [EmailJS](https://www.emailjs.com/docs/player-guide/creating-email-templates/) that has some very clear and informative documentation which explains how you can embed a working email system on your website.
* When searching how I could implement audio through JavaScript, I found this [StackOverflow](https://stackoverflow.com/questions/9419263/how-to-play-audio) post which explained some basic concepts on how to achieve it. After managing to implement audio on my quiz, I decided to refactor the code to make it more readable and also reusable.
* I feel like adding a timer on a quiz can make it more engaging for the player and provide a better player experience. After searching online for some information, I found this [StackOverflow](https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz) post which shows a basic example of a countdown timer. After understanding the fundamentals behind it, I decided to implement it but refactor it to suit my needs.

[Back to top](<#contents>)

# Acknowledgments
The quiz was completed as part of the Full Stack Software Developer Diploma Project with COde Institute. Creating this has been a challenge for myself and I would like to thank my mentor Jack Wachira for all his help and support within this project. As well as my educator my educator [Luke Walters](https://www.linkedin.com/in/luke-walters-leatherbarrow-531107101/). The tutors at code institute for their guidance and advice as well as the slack community. 

# Personal Development
This project has been a challenging experience which has made me learn a lot about JavaScript very quickly. I have enjoyed creating this quiz and showing my new found skills within the language. It has been rewarding to see how far I have come in a short amount of space with Code Institute and how resiliant I am becoming with not giving up when it begins to get a lot harder. Sometimes it just takes restarting from scratch a few times to get my head around it completely which it really did need a few times. It has taken me completely out of my comfort zone and has definetly been frustrating at times but I am happy with the result that I have ended up with. 

I have learned that I need to keep trying to break things into smaller sections and not jump into eveything at once. Writing it down and looking at the smaller but necessary steps that need to happen before evething falls into place. I felt very overwhelmed throughout this project but needless to say it was worth it, as I have enjoyed being challenged and learning a lot more about javaScript, HTML5 and CSS3. 
The skills that I have learnt and developed throughout this project will stay with me throughout my future and the knowledge I have learnt will help me in my future as I am sure to encounter more challenged along the way. 

Rebecca Watson 2022. 

[Back to top](<#contents>)