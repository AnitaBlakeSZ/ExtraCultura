$(function(){

    $(".container").hover(
        function() {
            $(".foto_descr").css("opacity", "0.3");
            $(".descrizione").css("display", "flex");
        }, function() {
            $(".foto_descr").css("opacity", 1);
            $(".descrizione").css("display", "none");
        }
    );
    //gestione navbar
    $(".menu_1").on("click", function() {
        $(".destra").css("display", "flex");
        $(".menu_1").css("display", "none");
        $(".centro").css("display", "none");
    });
    $(".menu_2").on("click", function() {
        $(".menu_1").css("display", "flex");
        $(".centro").css("display", "block");
        $(".destra").css("display", "none");
    });

    //gestione slideshow pag. informazioni
    var slideIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("slide");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > x.length) {slideIndex = 1}
        x[slideIndex-1].style.display = "block";
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }
});