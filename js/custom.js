$(".menus a").click(function(e){
    var parent=$(this).parent();
    if(parent.find(">ul").length){
        e.preventDefault();
        parent.siblings().removeClass("open");
        if(parent.hasClass("open")){
            parent.removeClass("open");    
        }else{
            parent.addClass("open");    
        }

    }else{
        $(".menus li").removeClass("active");
        parent.addClass("active");
    }    

});

$(".nav-toggle").click(function(){
    $(".quan-tri-sidebar").addClass("show");
    $(".overlay-common").addClass("show");
});

$(".overlay-common").click(function(){
    $(".quan-tri-sidebar").removeClass("show");
    $(this).removeClass("show");
});