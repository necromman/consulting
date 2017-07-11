$(function () {

    var app = $(".app");
    var deviselbtn = $(".devi-sel-btn");
    var deviwrap = $(".device-select-wrap");
    var secondcol = $(".second-col");
    var thirdcol = $(".third-col");
    var fourthcol = $(".fourth-col");


    var a = TweenLite.to(deviwrap, 1.1, {
        top: 0,
        ease: Quart.easeInOut
    }).reverse();

    var a = TweenLite.to(deviwrap, 1.1, {
        top: 0,
        ease: Quart.easeInOut
    }).reverse();

    var b = TweenLite.to(secondcol, 1, {
        right: "-58.5%",
        ease: Quart.easeInOut
    }).reverse();

    var c = TweenLite.to(thirdcol, 1, {
        left: "-8.2%",
        ease: Quart.easeInOut
    }).reverse();

    var d = TweenLite.to(fourthcol, 1, {
        right: "-25%",
        ease: Quart.easeInOut
    }).reverse();


    deviselbtn.on("click",function(){

        if(!a.isActive()){
            a.reversed(!a.reversed())
            b.reversed(!b.reversed())
            c.reversed(!c.reversed())
            d.reversed(!d.reversed())
        }
    })
    
    $(".accordion h1").click(function () {
        $(this).toggleClass("h1-change");
        $("h1").not(this).removeClass("h1-change");
    })


    $(".accordion h3").children("span").click(function (e) {
        e.stopPropagation();
    })
    $(".accordion h3").click(function () {
        $(this).toggleClass("h3-change");
        $("h3").not(this).removeClass("h3-change");
    })


})