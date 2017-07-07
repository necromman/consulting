$(function () {

    var deviselbtn = $(".devi-sel-btn");
    var deviwrap = $(".device-select-wrap");
    var secondcol = $(".second-col");
    var thirdcol = $(".third-col");
    var fourthcol = $(".fourth-col");


    deviselbtn.click(function () {

        a = TweenLite.to(deviwrap, 1.1, {
            top:0,
            ease:Quart.easeInOut});

        b = TweenLite.to(secondcol, 1, {
            right:"-58.5%",
            ease:Quart.easeInOut});

        c = TweenLite.to(thirdcol, 1, {
            left:"-8.2%",
            ease:Quart.easeInOut});

        d = TweenLite.to(fourthcol, 1, {
            right:"-25%",
            ease:Quart.easeInOut});

    })

    $(".reverse-btn").click(function () {
        a.reverse()
        b.reverse()
        c.reverse()
        d.reverse()
    })
})