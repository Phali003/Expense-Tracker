

//Function for input screen of the cardholder`s details !! //

const nameValue = document.getElementById("nameInput");
const nameValueScreen = document.getElementById("nameScreen");

nameValue.addEventListener("input", function(){
nameValueScreen.value = nameValue.value;

});

const numberValue = document.getElementById("numberInput");
const numberValueScreen = document.getElementById("numberScreen");

numberValue.addEventListener("input", function(){
numberValueScreen.value = numberValue.value;

});
// Function for confirm button
//REMEMBER TO CORRECT THE CONFIRMBUTTON WHEN YOU CLICK THE SECOND TIME, TRANSACTIONBUTTON DISSAPEARS//

const confirmBtn = document.getElementById("Confirm");
const transactionBtn = document.getElementById("Transaction");

confirmBtn.addEventListener("click", function (){
transactionBtn.classList.add("TransactionButtonClick");
document.body.appendChild(transactionBtn);

});

//Function for the selected items in the selection container//
const grocerySelect = document.getElementById("Grocery-select");
const itemScreen = document.getElementById("items-screen");
const itemSelect = document.getElementById("itemsSelections");
grocerySelect.addEventListener("change", function (){
    itemScreen.value += this.value;
    itemScreen.classList.add("itemsSelected .itemsSelections");
});
const entertainmentSelect = document.getElementById("Entertainment-select");

entertainmentSelect.addEventListener("change", function () {
    itemScreen.value += this.value + "<br>"; // Append selected value with a line break

});

const StationerySelect = document.getElementById("Stationery-select");

StationerySelect.addEventListener("change", function () {
    itemScreen.value += this.value + "<br>"; // Append selected value with a line break
    itemScreen.classList.add("itemsSelected");
});



//Transaction Button Calculation//

 const amountInput = document.getElementById("inputMoney");
 const moneyPaid = document.getElementById("amountPaid");
 const moneySpent = document.getElementById("amountSpent");
 const moneyRemaining = document.getElementById("amountRemaining");
 transactionBtn.addEventListener("click", function(){
moneyPaid.value = amountInput.value;

const remaining = Number(moneyPaid.value) - (moneySpent.value);
moneyRemaining.value = remaining;
 });


 grocerySelect = document.getElementById("Grocery-select");

 grocerySelect.addEventListener("change", function (){

    

    const CalculationScreen = document.getElementById("Calculate-screen");
    const selectedValue = this.value;
let valueToAdd = 0;

switch (selectedValue) {
    case "Bakery":
        valueToAdd = 100;
        break;
        case "Dairy and Eggs":
            valueToAdd = 200;
            break;
            case "Meat and Poultry":
                valueToAdd = 300;
                break;
                case "Produce":
                    valueToAdd = 400;
                    break;
                    case "Snacks and Beverages":
                        valueToAdd = 100;
                        break;
                                        


    default:
        valueToAdd = 0;

        break;
}

CalculationScreen.value = parseInt(CalculationScreen.value) + valueToAdd;




    
});




 grocerySelect = document.getElementById("Grocery-select");
 grocerySelect.addEventListener("change", function (){

let valueToAdd = 0;
const itemToAdd = this.value;
switch (itemToAdd){
case "Bakery":
    valueToAdd = 100;
    break;
    case "Dairy and Eggs":
    valueToAdd = 200;
    break;
    case "Meat and Poultry":
    valueToAdd = 300;
    break;
    case "Produce":
    valueToAdd = 400;
    break;
    case "Snacks and Beverages":
    valueToAdd = 500;
    break;
    case "Frozen Foods":
    valueToAdd = 600;
    break;
    case "Pantry Staples":
        valueToAdd = 700;
        break;

        default:
            valueToAdd = 0;
}
itemScreen.value = parseInt(itemScreen.value) + valueToAdd;

 });