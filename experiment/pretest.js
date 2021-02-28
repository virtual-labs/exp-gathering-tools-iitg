 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");

         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
            question: "1.Hunter Gatherer is the term used by anthropologists to describe:", ///// Write the question inside double quotes
            answers: {
                a: "Group of people who hunt animal and gather food.", ///// Write the option 1 inside double quotes
                b: "Specific kind of lifestyle of all human being until the invention of agriculture.", ///// Write the option 2 inside double quotes
                c: "Specific group of animals.",
                d: "All human beings after the invention of agriculture.",
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

    {
      question: "2.Jakoi is a",  ///// Write the question inside double quotes
      answers: {
        a: "Fishing implement.",                  ///// W Fishing trap.rite the option 1 inside double quotes
        b: "Fishing trap.",                  ///// Write the option 2 inside double quotes
        c: "None of these", 
        d: "Both of these",   
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },
                          
    {
      question: "'3.Jati' bamboo is spacially used for making the implement",  ///// Write the question inside double quotes
      answers: {
        a: "Chepa.",                  ///// W Fishing trap.rite the option 1 inside double quotes
        b: "Khoka",                  ///// Write the option 2 inside double quotes
        c: "Polo", 
        d: "Jakoi",   
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },



     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////
