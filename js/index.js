// step 1 - define objects and functions
let state = {};
//function to add items into the shopping cart
function addToShoppingCart() {
    alert("I've just activated the addTo() function");
}
// function to check items in the shopping cart
function checkShoppingCart() {
    alert("I've just activated the check() function");
}
// function to delete items from shopping cart
function deleteFromShoppingCart() {
    alert("I've just activated the delete() function");
}
// function to render the shopping cart
function renderShoppingCart() {
    alert("I've just activated the render() function");
}



// step 2 - use objects and functions (triggers)
// document.ready trigger
$(document).ready(function () {

})

//trigger to add items into the shopping cart
$('#js-shopping-list-form').on('submit', function (e) {
    e.preventDefault();
    // get form values
    let itemName = document.getElementById('itemName').value;

    //console.log(itemName);

    //prevent form from submitting

    let item = {
        name: itemName
    }

    //test if items is null
    if (localStorage.getItem('items') === null) {
        // init array
        const items = [];
        // Add to array
        items.push(item);
        // set to local storage
        localStorage.setItem('items', JSON.stringify(items));
    } else {
        // Get items from localStorage
        let items = JSON.parse(localStorage.getItem('items'));
        // Add item to array
        items.push(item);
        // re-set back to localStorage
        localStorage.setItem('items', JSON.stringify(items));


    }

});

//trigger to check items into the shopping cart
$(document).on('click', '.shopping-item-toggle', function (event) {
    event.preventDefault();
    checkShoppingCart();
});

//trigger to delete items into the shopping cart
$(document).on('click', '.shopping-item-delete', function (event) {
    event.preventDefault();
    deleteFromShoppingCart();
});
