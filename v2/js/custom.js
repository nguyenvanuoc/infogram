$(".nav-toggle").click(function(){
    $(".menus").addClass("show");
    $(".overlay-common").addClass("show");
});

$(".overlay-common").click(function(){
    $(".menus").removeClass("show");
    $(this).removeClass("show");
});

$(".menus a").click(function(){
    var parent = $(this).parent();
    if(parent.find(">.dropdown-menu").length){
        parent.siblings().removeClass("open");
        parent.toggleClass("open");
    }
});

$(".tracuu-sidebar a").click(function(e){
    var parent = $(this).parent();
    if(parent.find(">ul").length){
        e.preventDefault();
        console.log("-----");
        parent.siblings().removeClass("active");
        parent.toggleClass("active");
    }
})

$(".box-legend .legend-title").click(function(){
    $(this).parents(".box-legend").toggleClass("-collapsed");

});