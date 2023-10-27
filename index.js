// interface variables
//input
const dayInput = document.getElementById("dayInput")
const monthInput = document.getElementById("monthInput")
const yearInput = document.getElementById("yearInput")
const convertButton = document.getElementById("convertButton")

//error constants 
const dayError = document.getElementById("dayError")
const monthError = document.getElementById("monthError")
const yearError = document.getElementById("yearError")
const dayLabel = document.getElementById("dayLabel")
const monthLabel = document.getElementById("monthLabel")
const yearLabel = document.getElementById("yearLabel")

//output
const yearsOutput = document.getElementById("yearsOutput")
const monthsOutput = document.getElementById("monthsOutput")
const daysOutput = document.getElementById("daysOutput")


//initialize the variables for user input

let userInputYear = 0
let userInputMonth = 0
let userInputDay = 0
let validDate = false;



// get current date
let today = new Date();
// Extract day, month, and year
let currentDay = String(today.getDate()).padStart(2, '0');
let currentMonth = String(today.getMonth() + 1).padStart(2, '0'); // January is 1 now.
let currentYear = today.getFullYear();

// Construct the desired format
let formattedCurrentDate = currentDay + ' ' + currentMonth + ' ' + currentYear;



//checking of the valid inputs and error handling in the interface

function isValidYear() {
    if (userInputYear >= currentYear) {
        console.log("error")
        yearError.style.display = "block";
        yearLabel.classList.add("errorLabel")
        yearInput.classList.add("errorInput")
        validDate = true
    } else {
        console.log("all goood")
        yearError.style.display = "none";
        yearLabel.classList.remove("errorLabel")
        yearInput.classList.remove("errorInput")
    }
}

function isValidMonth() {

    if (userInputMonth >= 1 && userInputMonth <= 12) {
        monthError.style.display = "none"
        monthLabel.classList.remove("errorLabel")
        monthInput.classList.remove("errorInput")
        validDate = true
    } else {
        monthError.style.display = "block"
        monthLabel.classList.add("errorLabel")
        monthInput.classList.add("errorInput")
    }
}

function isValidDay() {
    if (userInputDay >= 1 && userInputDay <= 31) {
        console.log("The input is between 1 and 31.")
        dayError.style.display = "none"
        dayLabel.classList.remove("errorLabel")
        dayInput.classList.remove("errorInput")
        validDate = true;
    } else {
        console.log("The input is not between 1 and 31.")
        dayError.style.display = "block"
        dayLabel.classList.add("errorLabel")
        dayInput.classList.add("errorInput")
    }
}



// check if date is possible
function isDatePossible() {

    if (userInputMonth === "4" && userInputDay > 30) {
        dayError.style.display = "block"
        dayLabel.classList.add("errorLabel")
        dayError.textContent = "April has only 30 days"
        dayInput.classList.add("errorInput")
        validDate = false
    }
    else if (userInputMonth === "2" && userInputDay > 28) {
        dayError.style.display = "block"
        dayLabel.classList.add("errorLabel")
        dayError.textContent = "February has only 28 days"
        dayInput.classList.add("errorInput")
        validDate = false
    }
    else if (userInputMonth === "6" && userInputDay > 30) {
        dayError.style.display = "block"
        dayLabel.classList.add("errorLabel")
        dayError.textContent = "June has only 30 days"
        dayInput.classList.add("errorInput")
        validDate = false
    }
    else if (userInputMonth === "9" && userInputDay > 30) {
        dayError.style.display = "block"
        dayLabel.classList.add("errorLabel")
        dayError.textContent = "September has only 30 days"
        dayInput.classList.add("errorInput")
        validDate = false
    }
    else if (userInputMonth === "9" && userInputDay > 30) {
        dayError.style.display = "block"
        dayLabel.classList.add("errorLabel")
        dayError.textContent = "September has only 30 days"
        dayInput.classList.add("errorInput")
        validDate = false
    }
    else if (userInputMonth === "11" && userInputDay > 30) {
        dayError.style.display = "block"
        dayLabel.classList.add("errorLabel")
        dayError.textContent = "November has only 30 days"
        dayInput.classList.add("errorInput")
        validDate = false
    }
    else {
        validDate = true;
    }
}






//trigger for calculation and the checking of the values

convertButton.addEventListener("click", function () {

        yearsOutput.textContent = "--"
        monthsOutput.textContent = "--"
        daysOutput.textContent = "--"

        userInputYear = yearInput.value;
        userInputMonth = monthInput.value;
        userInputDay = dayInput.value;
    
        let userDate = new Date (userInputYear, userInputMonth - 1, userInputDay);
        let currentDate = new Date(currentYear, currentMonth - 1, currentDay);
        console.log(userDate)
        console.log(currentDate)

        let timeDiff = Math.abs(currentDate.getTime() - userDate.getTime());
        let daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
        let yearDiff = Math.floor(daysDiff / 365);
        let remainingDays = daysDiff % 365;
        let monthDiff = Math.floor(remainingDays / 30);
        let dayDiff = remainingDays % 30;

       
        yearsOutput.textContent = yearDiff
        monthsOutput.textContent = monthDiff
        daysOutput.textContent = dayDiff
});

