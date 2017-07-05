///////Intermediate Javascript Review//////

///Scope///

function theOverlord() {
  var rules = "cry all day";
  var money = "belongs to the overlord"

  function thePowerlessFigurehead() {
    var rules = 'love me plz'

      function theTragicHumanitarian() {
        var rules = 'the golden rule'
      }
  }

  function theJudge() {
    var job = "Wearing cool robes"
  }
}

//Assign your answers to the variables below.
//1. The value of rules if accessed from thePowerlessFigurehead
var ans1 = '';
//2. The value of rules if accessed from theJudge
var ans2 = '';
//3. The value of job if accessed from theOverlord
var ans3 = '';
//4. The value of job if accessed from thePowerlessFigurehead
var ans4 = '';
//5. The value of money if accessed from theTragicHumanitarian
var ans5 = '';


///Promises///

//6. Resolving a Promise

// Write a function called "promiseResolver" with a single parameter.
// Jasmine will pass a promise into your function through that parameter.
// Your function will need to handle that promise.
// When your promise receives its results, set the variable 'theAnswer' (seen below)
// equal to the result from resolving the promise.

var theAnswer = "Unknown";

function promiseResolver(promise) {
  promise.then(response => {
    theAnswer = response;
    return;
  })
}

// CODE HERE...


///Context///

//7. Inside contextIt, inkoke myFn with its context set explicitly
/////to the contextObj, and with the two parameters passed in - return
/////the result.
function contextIt(myFn, contextObj, param1, param2) {

}

//8. Do the same as you did in question 6, except with the
/////paramArray passed in instead
function contextIt2(myFn, contextObj, paramArray) {

}

//9. Inside contextIt3, return a new function that permanently
/////links myFn to the contextObj
function contextIt3(myFn, contextObj) {

}


/////Constructor Function/////
var bubbles = 0; //Ignore this line except to mourn our lack of bubbles.

//10. Create a constructor function called Unicorn that takes in
/////parameters called hornColor, magicType, mana, and
/////canFly; inside the function, assign each to an identically
/////named property


//question updated 03/30/17
//11. Add a prototype method to Unicorn called castBubbleWrapSpell
/////which adds 100 to the global variable bubbles and takes away
/////15 from mana.



/////Closures/////

//12. Write a function called greetingMaker which takes in a name
/////and returns a function that takes in a greeting and returns
/////the name and the greeting concatenated together (in that order)


//13. Write a function called countdownMaker which takes in an
/////event name (string) and how many days until it happens.
/////countdownMaker will return a function that,
/////when invoked, takes one off of the days left and returns an
/////object that looks like this:
/////{event: <eventname>, daysLeft: <days left>}



/////Type Checking/////

//14. Write a function called notMyType which takes in a parameter
/////and returns the type of data of the parameter (number, string,
/////boolean, etc)
