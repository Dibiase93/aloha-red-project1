document.addEventListener("DOMContentLoaded", function () {

    const flkty = new Flickity('.main-carousel', {
        cellAlign: 'left',
        freeScroll: true,
        fullscreen: true,
        groupCells: true,
    });


    const subscribeForm = document.getElementById("subcribe-form");

    subscribeForm.addEventListener('submit', function (event) {
        const email = document.getElementById('email');
        event.preventDefault();

        if (email.value != '') {
            alert("Thanks for subscribing!");
        } else {
            alert("Please enter a valid email");
        }

    });
    const cart = document.getElementById("cart-container")
    const button = document.getElementById("add-button"),
    count = 0;
    button.onclick = (function(cart) {
    count += 1;
    cart.innerHTML = "cart-container" + count;
});
});