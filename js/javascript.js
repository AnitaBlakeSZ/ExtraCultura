$(function(){
    /* gestione descrizione sulle immagini
    $("#uno").hover(function() {
        $(this).css("display", "none");
        $("#uno_t").css("display", "inline");
    });
    $("#uno_t").hover(function() {}, function() {
        $(this).css("display", "none");
        $("#uno").css("display", "inline");
    });

    $("#due").hover(function() {
        $(this).css("display", "none");
        $("#due_t").css("display", "inline");
    });
    $("#due_t").hover(function() {}, function() {
        $(this).css("display", "none");
        $("#due").css("display", "inline");
    });

    $("#tre").hover(function() {
        $(this).css("display", "none");
        $("#tre_t").css("display", "inline");
    });
    $("#tre_t").hover(function() {}, function() {
        $(this).css("display", "none");
        $("#tre").css("display", "inline");
    });

    $("#quattro").hover(function() {
        $(this).css("display", "none");
        $("#quattro_t").css("display", "inline");
    });
    $("#quattro_t").hover(function() {}, function() {
        $(this).css("display", "none");
        $("#quattro").css("display", "inline");
    });

    $("#cinque").hover(function() {
        $(this).css("display", "none");
        $("#cinque_t").css("display", "inline");
    });
    $("#cinque_t").hover(function() {}, function() {
        $(this).css("display", "none");
        $("#cinque").css("display", "inline");
    });
    */

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