// generate 2 boxes
// make a dropdown list
// call currency exchange rate api
// once you pick an item from the dropdown list, its display changes.
// once put the number, currency is changed.
// change to korean?
// can put number in either boxes

let currencyRatio = {
    USD: {
        USD: 1,
        KRW: 1320.31,
        VND: 24420.00,
        unit: "달러"
    },
    KRW: {
        USD: 0.00076,
        KRW: 1,
        VND: 18.50,
        unit: "원"
    },
    VND: {
        USD: 0.000041,
        KRW: 0.054,
        VND: 1,
        unit: "동"
    }
}

//1. console.log(currencyRatio.VND.unit);
//2. console.log(currencyRatio["VND"][unit])

let fromCurrency = 'USD';
let toCurrency = 'USD';

document.querySelectorAll("#from-currency-list a").forEach((menu) => menu.addEventListener("click", function () {
    //1. fetch the button
    //2. change the value of button
    document.getElementById("from-button").textContent = this.textContent;
    //3. save the value in varaible.
    fromCurrency = this.textContent;
    convert()
}))

document.querySelectorAll("#to-currency-list a").forEach((menu) => menu.addEventListener("click", function () {
    //1. fetch the button
    //2. change the value of button
    document.getElementById("to-button").textContent = this.textContent;
    //3. save the value in varaible.
    toCurrency = this.textContent;
    convert()

}))

document.getElementById("from-input").addEventListener("keyup", convert)

function convert() {
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    console.log("I got here");

    document.getElementById("to-input").value = convertedAmount;
}

fetch('https://v6.exchangerate-api.com/v6/520b7be8aa6e6a10361e8b45/latest/KRW')
    .then(response => {
        if (response.ok) {
            return response.json(); // Parse the response data as JSON
        } else {
            throw new Error('API request failed');
        }
    })
    .then(data => {
        // Process the response data here
        console.log(data); // Example: Logging the data to the console
    })
    .catch(error => {
        // Handle any errors here
        console.error(error); // Example: Logging the error to the console
    });
