$(document).ready(function () {

    $('img').bind('contextmenu', function (e) {
        return false;
    });

    $('.j-eos').hover(function () {
        $('#j-eos').css("background-image", "url(" + $(this).attr('src') + ")");
    });

    $('.j-eos').mouseleave(function () {
        $('#j-eos').css("background-image", "url(/assets/p/eos-3.png)");
    });


    $('.fantasies').hover(function () {
        $('#j-fantasy .journeys').css("background-image", "url(" + $(this).attr('src') + ")");
            
    });

    $('.fm').click(function () {
        $('#f-mask-preview').css("background-image", "url(" + $(this).attr('src') + ")");
        $('#f-mask').css("background-image", "url(" + $(this).attr('src') + ")");
    });
    $('.fs').click(function () {
        $('#f-silver-preview').css("background-image", "url(" + $(this).attr('src') + ")");
        $('#f-silver').css("background-image", "url(" + $(this).attr('src') + ")");
    });

});
