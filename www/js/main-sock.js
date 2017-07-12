$(function () {

    var app = $(".app");
    var deviselbtn = $(".devi-sel-btn");
    var planbtn = $(".plan-btn");
    var deviwrap = $(".device-select-wrap");
    var planwrap = $(".plan-select-wrap");
    var secondcol = $(".second-col");
    var thirdcol = $(".third-col");
    var fourthcol = $(".fourth-col");

    var device;
    var plan;
    var b;
    var c;
    var d;

    function deviceAnime() {
        device = TweenLite.to(deviwrap, 1.1, {top: 0,ease: Quart.easeInOut});
        b = TweenLite.to(secondcol, 1, {right: "-58.5%",ease: Quart.easeInOut});
        c = TweenLite.to(thirdcol, 1, {left: "-8.2%",ease: Quart.easeInOut});
        d = TweenLite.to(fourthcol, 1, {right: "-25%",ease: Quart.easeInOut});
    }
    function acDeviceAnime() {
        device = TweenLite.to(deviwrap, 1.1, {top: 0,ease: Quart.easeInOut});
        b = TweenLite.to(secondcol, 1, {right: "-58.5%",ease: Quart.easeInOut});
        c = TweenLite.to(thirdcol, 1, {left: "-8.2%",y:0,ease: Quart.easeInOut});
        d = TweenLite.to(fourthcol, 1, {right: "-25%",ease: Quart.easeInOut});
    }

    // function planAnime() {
    //     plan = TweenLite.to(planwrap, 1.1, {top: 0,ease: Quart.easeInOut});
    //     b = TweenLite.to(secondcol, 1, {right: "-58.5%",ease: Quart.easeInOut});
    //     c = TweenLite.to(thirdcol, 1, {left: "-8.2%",ease: Quart.easeInOut});
    //     d = TweenLite.to(fourthcol, 1, {right: "-25%",ease: Quart.easeInOut});
    // }
    function planAnime() {
        plan = TweenLite.to(planwrap, 1.1, {top: 0,ease: Quart.easeInOut});
        b = TweenLite.to(secondcol, 1, {right: "-33.3%",ease: Quart.easeInOut});
        c = TweenLite.to(thirdcol, 1, {y:1000,ease: Quart.easeInOut});
        d = TweenLite.to(fourthcol, 1, {right: "0%",ease: Quart.easeInOut});
    }

    function commonReversed() {
        TweenLite.to(secondcol, 1, {right: "0%",ease: Quart.easeInOut});
        TweenLite.to(thirdcol, 1, {left: "0%",y:0,ease: Quart.easeInOut});
        TweenLite.to(fourthcol, 1, {right: "0%",ease: Quart.easeInOut});
    }


    function partAni() {
        if(!b.isActive()) {
            if (deviwrap.hasClass("active")) {
                plan.reversed(!plan.reversed());
                acDeviceAnime()
            }
            if (planwrap.hasClass("active")) {
                device.reversed(!device.reversed());
                planAnime()
            }
        }
    }

    function  resetAni() {
        if(deviwrap.hasClass("active")){
            device.reversed(!device.reversed());
            commonReversed();
        }
        if(planwrap.hasClass("active")){
            plan.reversed(!plan.reversed());
            commonReversed();
        }
    }


    deviselbtn.on("click", function () {
        if ($(".total-select-wrap").not(this).hasClass("active")) {
            deviwrap.addClass("active");
            $(".total-select-wrap").not(deviwrap).removeClass("active");
            partAni();

        } else if (!$(".total-select-wrap").not(this).hasClass("active")) {
            deviwrap.addClass("active");
            deviwrap.not("div").removeClass("active")
            deviceAnime();
        }
    })

    planbtn.on("click", function (e) {
        e.stopPropagation();
        if ($(".total-select-wrap").not(this).hasClass("active")) {
            planwrap.addClass("active");
            $(".total-select-wrap").not(planwrap).removeClass("active");
            partAni();
        } else if (!$(".total-select-wrap").not(this).hasClass("active")) {
            planwrap.addClass("active");
            planwrap.not("div").removeClass("active")
            planAnime();
        }
    })


    $(".accordion h1").click(function () {
        $(this).toggleClass("h1-change");
        $("h1").not(this).removeClass("h1-change");
        $("h3").removeClass("h3-change");
    })


    $(".accordion h2").click(function () {
        var h2txt = $(this).text();
        $(this).parent().prev().html(h2txt);

        $(this).parent().slideToggle("fast");
        $(this).parent().next().toggleClass("h1-change");
        $(this).parent().next().next().slideDown();
    })


    $(".accordion h3").children("span").click(function (e) {
        resetAni();
        $(".total-select-wrap").removeClass("active");
        e.stopPropagation();
    })
    $(".accordion h3").click(function () {
        $(this).toggleClass("h3-change");
        $("h3").not(this).removeClass("h3-change");
    })


})