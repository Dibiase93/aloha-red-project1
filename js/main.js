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

});