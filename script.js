$(document).ready(function () {
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Creator", "Problem Solver", "Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Blogger", "Gamer", "Ping Pong Player", "Chess Player", "Fitness Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 100) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    function myFunction() {
        var x = document.getElementsByClassName("menu");
        if (x.style.display === "inline-flex") {
            x.style.display = "none";
        } else {
            x.style.display = "inline-flex";
        }
    }
});