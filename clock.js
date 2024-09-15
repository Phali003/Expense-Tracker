const hours = document.querySelector(".hrs");
const minutes = document.querySelector(".mins");
const seconds = document.querySelector(".secs");
const input = document.querySelector(".inputvalue"); // Corrected selector
const greetingsContainer = document.createElement("div"); // Changed to 'div' for proper DOM element
const submitBtn = document.getElementById("greetings-button");
const todayDate = document.querySelector(".todayDate");
document.body.appendChild(greetingsContainer); // Append to the body

// Function to update the current time
setInterval(() => {
    let currentTime = new Date();
    hours.textContent = String(currentTime.getHours()).padStart(2, "0");
    minutes.textContent = String(currentTime.getMinutes()).padStart(2, "0");
    seconds.textContent = String(currentTime.getSeconds()).padStart(2, "0");
   
   //Function to update the current date
    let currentDate = new Date();
   todayDate.textContent = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;
}, 1000);

// Event listener for the sub = mit button
submitBtn.addEventListener("click", function () {
    
    let currentHour = new Date().getHours(); // Get current hour
    let nameinput = input.value.trim(); // Trim the white space from the input


if (!nameinput){
    greetingsContainer.textContent = "Name is required for this field";
    greetingsContainer.classList.add("greetings");

}

else if(currentHour < 12){
    greetingsContainer.textContent = `Good Morning ${nameinput}`;
    greetingsContainer.classList.add("greetings");
}
else if(currentHour < 18){
    greetingsContainer.textContent = `Good Afternoon ${nameinput}`;
    greetingsContainer.classList.add("greetings");
}
else if(currentHour < 23){
    greetingsContainer.textContent = `Good Evening ${nameinput}`;
    greetingsContainer.classList.add("greetings");
}
else{
    greetingsContainer.textContent = `Good Night ${nameinput}`;
    greetingsContainer.classList.add("greetings");
};

  // Clear the input field after submission
  input.value = "";

});


// Function for calendar
const date = new Date();
const day = String(date.getDate()).padStart(2, '0');
const month = String(date.getMonth() + 1).padStart(2, '0'); //The + 1 value is because in JavaScript, the getMonth() method of the Date object returns the month of the date as a zero-based value.To convert this zero-based month value to a more human-readable format (where January is 1, February is 2, etc.), you need to add 1 to the result of getMonth(). This is why the code includes date.getMonth() + 1.

const year = date.getFullYear();
const localDate = `${year}-${month}-${day}`; //Date format//
document.getElementById("todayDate").value = localDate;