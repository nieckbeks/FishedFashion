let selectedSize = null;

let quantity = 1;
let cartItems = 0;


// ---------------------------------------
// Elementen ophalen
// ---------------------------------------

const sizeButtons =
    document.querySelectorAll(".size-button");

const quantityElement =
    document.getElementById("quantity");

const minusButton =
    document.getElementById("minus");

const plusButton =
    document.getElementById("plus");

const addToCartButton =
    document.getElementById("addToCart");

const cartCount =
    document.getElementById("cartCount");

const message =
    document.getElementById("message");

const productImage =
    document.getElementById("productImage");


// ---------------------------------------
// Maat selecteren
// ---------------------------------------

sizeButtons.forEach(button => {

    button.addEventListener("click", () => {

        sizeButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedSize = button.dataset.size;

        clearMessage();

    });

});


// ---------------------------------------
// Hoeveelheid verminderen
// ---------------------------------------

minusButton.addEventListener("click", () => {

    if (quantity > 1) {
        quantity--;
    }

    updateQuantity();

});


// ---------------------------------------
// Hoeveelheid verhogen
// ---------------------------------------

plusButton.addEventListener("click", () => {

    if (quantity < 10) {
        quantity++;
    }

    updateQuantity();

});


function updateQuantity() {
    quantityElement.textContent = quantity;
}


// ---------------------------------------
// Winkelmand
// ---------------------------------------

addToCartButton.addEventListener("click", () => {

    if (!selectedSize) {

        showMessage(
            "Kies eerst een maat."
        );

        return;
    }


    cartItems += quantity;

    cartCount.textContent = cartItems;
    cartCount.style.display = "flex";


    showMessage(
        `${quantity} × maat ${selectedSize} is toegevoegd aan je winkelmand.`
    );

});


// ---------------------------------------
// Meldingen
// ---------------------------------------

function showMessage(text) {

    message.textContent = text;

}


function clearMessage() {

    message.textContent = "";

}