$(function(){
    //gestione foto
    if(('ontouchstart' in window)){//check for touch device
        //gestione foto mobile
        $("#info1").click(Click);
        $("#info2").click(Click);
        $("#info3").click(Click);
        $("#info4").click(Click);
        $("#info5").click(Click);

        function Click() {
            if($(this).prev().css("display") == "none") {
                $(this).prev().css("display", "flex");
                $(this).prev().prev().css("opacity", "0.3");
                $(this).css("filter", "invert(50%) sepia(6%) saturate(243%) hue-rotate(2deg) brightness(93%) contrast(94%)");
            } else {
                $(this).prev().css("display", "none");
                $(this).prev().prev().css("opacity", "1");
                $(this).css("filter", "invert(12%) sepia(16%) saturate(230%) hue-rotate(349deg) brightness(96%) contrast(89%)");
            }
        }
    } else {
        //gestione foto pc
        $("#container1").hover(Dentro, Fuori);
        $("#container2").hover(Dentro, Fuori);
        $("#container3").hover(Dentro, Fuori);
        $("#container4").hover(Dentro, Fuori);
        $("#container5").hover(Dentro, Fuori);

        function Dentro() {
            $(this).children().eq(0).css("opacity", "0.3");
            $(this).children().eq(1).css("display", "flex");
        }

        function Fuori() {
            $(this).children().eq(0).css("opacity", 1);
            $(this).children().eq(1).css("display", "none");
        }
    }

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

    //gestione slideshow automatico pag. informazioni
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