let featurePageDisplay = document.querySelector("#featurePageDisplay");
let mainPageDisplay = document.querySelector(".closeIcon");
let mainPage = document.querySelector("#mainPage");
let featuredDetailsPage = document.querySelector("#featuredDetailsPage");

featurePageDisplay.addEventListener("click", function(event) {
    event.preventDefault();
    featuredDetailsPage.className = "displayed";
    mainPage.className = "notDisplayed";
});

mainPageDisplay.addEventListener("click", function(event) {
    mainPage.className = "displayed";
    featuredDetailsPage.className = "notDisplayed";
});

let recipeArea = document.querySelector(".recipe");
let artArea = document.querySelector(".art");
let healthArea = document.querySelector(".health");

const changeTextFunction = (textValue, textArea) => {
    textArea.innerHTML = textValue;
}

recipeArea.addEventListener("mouseover", function(event) {
    changeTextFunction("Yummy treats", this);
});

recipeArea.addEventListener("mouseout", function(event) {
    changeTextFunction('Recipe', this);
});

artArea.addEventListener("mouseover", function(event) {
    changeTextFunction("Simple to Strange!", this);
});

artArea.addEventListener("mouseout", function(event) {
    changeTextFunction("Art", this);
});

healthArea.addEventListener("mouseover", function(event) {
    changeTextFunction("Health tips", this);
});

healthArea.addEventListener("mouseout", function(event) {
    changeTextFunction("Health", this);
});

recipeArea.addEventListener("click", function(event) {
    changeTextFunction("Coming Soon!", this);
});

artArea.addEventListener("click", function(event) {
    changeTextFunction("Coming Soon!", this);
});

healthArea.addEventListener("click", function(event) {
    changeTextFunction("Coming Soon!", this);
});

let greendot = document.querySelector("#greendot");
let yellowdot = document.querySelector("#yellowdot");
let reddot = document.querySelector("#reddot");
let feedbackExplain = document.querySelector("#feedbackExplain");
let beforeFeedback = document.querySelector("#beforeFeedback");
let afterFeedback = document.querySelector("#afterFeedback");

greendot.addEventListener("mouseover", function(event) {
    greendot.className="greendot";
    feedbackExplain.innerHTML = "Love it!";
});

greendot.addEventListener("mouseout", function(event) {
    greendot.className="dot";
    feedbackExplain.innerHTML = "";
});

yellowdot.addEventListener("mouseover", function(event) {
    yellowdot.className="yellowdot";
    feedbackExplain.innerHTML = "Looks fine.";
});

yellowdot.addEventListener("mouseout", function(event) {
    yellowdot.className="dot";
    feedbackExplain.innerHTML = "";
});

reddot.addEventListener("mouseover", function(event) {
    reddot.className="reddot";
    feedbackExplain.innerHTML = "Hate it. :(";
});

reddot.addEventListener("mouseout", function(event) {
    reddot.className="dot";
    feedbackExplain.innerHTML = "";
});

greendot.addEventListener("click", function(event) {
    toggleFeedbackDisplay();
});

yellowdot.addEventListener("click", function(event) {
    toggleFeedbackDisplay();
});

reddot.addEventListener("click", function(event) {
    toggleFeedbackDisplay();
});

const toggleFeedbackDisplay = () => {
    beforeFeedback.className="hiddenfootertext";
    afterFeedback.className="footertext";
    setTimeout(
        function showFeedbackComplete(){ 
            beforeFeedback.className="footertext";
            afterFeedback.className="hiddenfootertext";
        }
      ,2000);
}