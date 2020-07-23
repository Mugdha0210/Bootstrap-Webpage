$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass("fa-pause")) {
            $("#myCarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
        }
        else if ($("#carouselButton").children("span").hasClass("fa-play")) {
            $("#myCarousel").carousel("cycle");
            $("#carouselButton").children("span").removeClass("fa-play");
            $("#carouselButton").children("span").addClass("fa-pause");
        }
    });
    $('[data-toggle = "buttons"]').button('toggle');
    $('#LoginButton').click(function () {
        $('#LoginModal').modal({
            toggle: true,
            closeOnEscape: true
        });
    });

    $('#ReserveButton').click(function () {
        $('#ReserveModal').modal({
            toggle: true,
            closeOnEscape: true
        });
    });

});