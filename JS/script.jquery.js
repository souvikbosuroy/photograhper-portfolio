$(document).ready(function(){
    $(".ico").click(function(){
        $(this).toggleClass("fa-xmark");
        $(".nav-menu").toggle(500)
    });
    $(window).resize(function(){
        if(screen.width > 768)
            $(".nav-menu").show();
    })
});
