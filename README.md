# The Mythology Quiz
[View the live project here.](https://emilija-smitaite.github.io/the-mythology-quiz/)

This is a mythology themed quiz game. The game contains 5 multiple choice questions with result calculated at the end. The website is easy to use and responsive.

![Mock up](assets/images/mock-up.png)

# User Experience (UX)
## User stories

   #### **First time visitor goals**
   1. As a First Time Visitor, I want to immediately identify the main purpose of the website.
   2. As a First Time Visitor, I want to easily navigate through the website.
   3. As a First Time Visitor, I want to see help / how to play section on the home page.
   4. As a First Time Visitor, I want the website's colour scheme and general feel to reflect the theme of the quiz.
   5. As a First Time Visitor, I want to have fun playing.
   6. As a First Time Visitor, I want to see my score.

   #### **Returning Visitor Goals**
   1. As a Returning Visitor, I want to improve my score.
   2. As a Returning Visitor, I want to be able to leave feedback and be assured it has been delivered.

   #### **Frequent User Goals**
   1. As a Frequent User, I want to replay the quiz and keep learning on the subject.

## Design

  #### **Colour scheme**
  - Minimal palette consisting of shades of black and white. These colours used to help background image to stand out.
  #### **Typography**
  - All the elements use Bootstrap native font stack which adapts to the device. These fonts are familiar to the user, professional and clean looking, good match to this project where style focus is on the background.
  #### **Imagery**
  - 
## Wireframes
- [Mobile Home Page](assets/images/mobile-home.png)
- [iPad Game Page](assets/images/ipad-game-page.png)
- [Desktop Results Page](assets/images/desktop-results.png)

## Features
* Responsive on all device sizes
* Intuitive and easy to use.

# Further development
*

# Technologies Used
## Languages Used
   - HTML
   - CSS
   - JavaScript

## Frameworks, Libraries & Programs Used

1. Git:
- Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
2. GitHub:
- GitHub is used to store the project's code after being pushed from Git.
3. Balsamiq:
- Balsamiq was used to create the wireframes during the design process.
4. Bootstrap 5.1.3:
- Bootstrap was used to assist with the responsiveness and styling of the website.
5. Font Awesome:
- Font Awesome was used to style icons in the quiz outcome paragraph.
6. Favicon
-
7. Web Formatter:
- Web Formatter was used to add proper indentation and improve readability on HTML, CSS and JS files.


# Testing

## Testing User Stories from User Experience (UX) Section

#### **First time visitor goals**
1. As a First Time Visitor, I want to immediately identify the main purpose of the website.
* Upon entering the site, users are greeted with the quiz name main heading. 
* Background image and home link at the top left corner support the main heading.
2. As a First Time Visitor, I want to easily navigate through the website.
* Nav bar and main section of index.html both offer easy navigation from any point of the site.
* There is no need to use browser buttons.
* Game can be restarted at any point.
3. As a First Time Visitor, I want to see help / how to play section on the home page.
* Immediately visible in the nav bar and the main section of the index.html.
4. As a First Time Visitor, I want the website's colour scheme and general feel to reflect the theme of the quiz.
* Background image is an antiquity period marble sculpture of Atlas holding The World on his shoulders.
Home button is and image of Medusa, snakes on the head. Both are quite well know legends.
5. As a First Time Visitor, I want to have fun playing.
* The game is inviting, quick to play, has got interesting questions.
6. As a First Time Visitor, I want to see my score progress.
* Scores are updated as it goes.
7. As a First Time Visitor, I want to game controls to be intuitive.
* On picking answer, next question is shown automatically.
* Once last question has been answered, result is displayed, PLAY AGAIN button shows up.

#### **Returning Visitor Goals**
1. As a Returning Visitor, I want to improve my score.
* Score is displayed at the end of the game and during the game.
2. As a Returning Visitor, I want to be able to leave feedback and be assured it has been delivered.
 
#### **Frequent User Goals**
1. As a Frequent User, I want to replay the quiz and keep learning on the subject.
* In case of incorrect answer, correct one is displayed.
* At the end of the game, PLAY AGAIN button is shown.
* Play link at the nav bar has the same functionality as PLAY AGAIN button.   


### The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.
 * HTML validator results [Home Page](assets/images/html-validator-index.PNG) [Game Page](assets/images/html-validator-game.PNG) 
 * [CSS validator results](assets/images/css-validator(style.css)

### Lighthouse was used to measure performance.
* Lighthouse results [Desktop]() [Mobile](assets/images/lighthouse-results.PNG)
 - Addition of meta description tag made a significant improvement to the score.
 - Another issue was with nav bar links having no href attribute since I have used Bootstrap classes to add modal functionality to the nav bar. This was solved by leaving empty href tags in the nav  bar.

### JShint was used to check if JavaScript source code complies with coding rules.
*[JShint report]()

### Chrome developer tools 
* Used to test responsiveness and functionality on various devices.

## Functionality testing
* All the internal links work.

### Nav bar
1. Home button is an image in the top left corner.
 On clicking user is expected to be taken to the home page.
 Shaking animation is shown when hovered on desktop devices.
 - Tested by clicking and hovering over -  it is functioning as expected.
2. Help and Contact buttons expected to display modals when clicked on.
 Modal can be closed either by Close button inside it or clicking anywhere outside the modal. 
  -Tested by opening and closing from various pages - it is functioning as expected.
3. Contact form is expected to send email to developers chosen email address.
 - Tested by sending a test email - email has arrived as expected.
4. Contact form is expected to provide feedback if it was submitted succesfully.
 - A message appears "Form submitted succesfully!".
 - Console shows status 200.
5. Contact form is expected to not allow empty or incorrect input. 
 - Tested by putting empty or incorrect input into every field - it was not allowed.
6. Play button is expected to take user to game.html page.
 - Tested by clicking and works as expected on index.html and game.html.

### Quiz game
1. Game is expected to start once Play button is clicked in the nav bar or main area of index.html
- Tested by clickin and works as expected.
2. Quiz question is expected to be fetched from the API and displayed.
- It is displayed at the start of the game.
3. Answer options are expected to be fetched from the API and displayed in an ordered list.
- Answer options are displayed at the start of the game in an ordered list.
4. On clicking one of the options , answer is expected to be checked, feedback given and then next question displayed.
- Tested by clicking correct and incorrect answer options. 
- In case of correct asnwer, feedback message "Correct!" was displayed and next answer shown.
- In case of incorrect asnwer, feedback message "Inorrect!" displayed, correct answer shown briefly and then the next answer shown.
5. Score is expected to update while playing.
- Tested by clicking on correct/incorrect answers and score was updating accordingly.
6. At the end of the game "Well done on finishing the quiz!" message is expected to be displayed.
- Message is shown once the last question is answered.
7. At the end of the game total score is expected to be displayed.
- Works as expected
8. At the end of the game PLAY AGAIN button is expected to be displayed, functioning accordingly.
-Button is displayed, once clicked, the game restarts.

## Further testing
* Website was given to friends to test on various devices. Good responsiveness and functionality reported.

## Bugs
* After answering all the questions, if user didn't click PLAY AGAIN button and kept clicking on answers, score count would continue adding up. Tried removing event listener, but was best solved by setting question, answer and score counter display to none, then PLAY AGAIN button was shown delayed 600ms. Congratulations message added too. These changes fixed the bug and improved the UX.

* Index.html validator returned error saying that anchor tag cannot be inside button element. Solved by removing button and adding Bootstrap class to the anchor tag.

* Adding function to PLAY AGAIN button. I have tried .click() but it wouldn't work on the anchor tag element, then I have tried to simulate click action with a separate function. The easiest solution was adding onclick="location.reload();" attribute directly to the button's HTML.

# Deployment
## GitHub Pages
The project was deployed to GitHub Pages using the following steps...
1. Log in to GitHub and locate the [GitHub Repository](https://github.com/emilija-smitaite/the-mythology-quiz)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Main".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

## Forking the GitHub Repository
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...
1. Log in to GitHub and locate the [GitHub Repository](https://github.com/emilija-smitaite/the-mythology-quiz)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

## Making a Local Clone
1. Log in to GitHub and locate the [GitHub Repository](https://github.com/emilija-smitaite/the-mythology-quiz)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type "git clone" and then paste the URL you copied in Step 3.
7. Press Enter. Your local clone will be created.

# Credits
## Content
* All content was written by the developer. Any code that was not written by the developer was referenced in a document.

## Media 


## Acknowledgements
* My mentors Spencer Barriball and Adegbenga Adeye for encouragement and support.














