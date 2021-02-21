$(window).load(function() {
    let leadPos = $(".lead").offset().top;
    let leadHeight = $(".lead").height();
    let orignialPos = leadPos + leadHeight;
    $("#fixPlace").css({
        top: orignialPos + "px"
    });
});


$(document).ready(function() {

    $(window).load(function() {
        $(window).on("scroll resize", function() {
            var w = $(window).width();
            var x = 1024;
            if (w >= x) {
                var pos = $("#fixPlace").offset();
                $('.post').each(function() {
                    if (pos.top + 300 >= $(this).offset().top && pos.top <= $(this).next().offset().top) {
                        var newDescr = $(this).find('.feature__description').html();
                        var oldDescr = $("#fixPlace").html();

                        $("#fixPlace").html(newDescr);
                        if (newDescr !== oldDescr) {
                            $("#fixPlace").css('opacity', 1).animate({ 'opacity': '1', }, 200);
                            return;
                        }
                    }
                });
            } else {
                $(".feature__description").removeAttr("style");
                $("#fixPlace").remove();
            }
        });
    });

    $(document).ready(function() {
        $(window).trigger('scroll'); // init the value
    });
});

//scroll then fix and unfixed


let fixPlace = "#fixPlace";
let scrollStart = null;
let scrollEnd = null;
let floatBoxTop = 0.25 * $(window).height();


$(document).ready(function() {
    scrollStart = $("#fixPlace").offset().top;
    scrollEnd = $('.transition').offset().top - 790;
})


$(function() {
    $(window).on("scroll resize", function() {
        let w = $(window).width();
        let x = 1024;
        if (w >= x) {

            let scrollTop = $(document).scrollTop() + floatBoxTop;
            scrollTop = Math.min(scrollEnd, Math.max(scrollTop, scrollStart))

            if (scrollTop === scrollStart || scrollEnd === scrollTop) {
                $(fixPlace).css({
                    position: 'absolute',
                    top: scrollTop
                });
            } else {
                $(fixPlace).css({
                    position: 'fixed',
                    top: floatBoxTop
                });
            }
        }
    });
});


$(function() {
    $(document).scroll(function() {
        let line = $(".inner_line");
        let line1 = $(".line_1");
        let line2 = $(".line_2");
        line.toggleClass('scrolled', $(window).scrollTop() > $(window).height());
        line1.toggleClass('scrolled', $(window).scrollTop() > $(window).height());
        line2.toggleClass('scrolled', $(window).scrollTop() > $(window).height());

    });
});

$(document).ready(function() {

    function hamburger() {
        document.getElementById('line1').classList.toggle('line_1');
        document.getElementById('line2').classList.toggle('line_2');
        document.getElementById('nav').classList.toggle('in');
    }
    document.getElementById('hamburger').addEventListener('click', function() {
        hamburger();
    });

    $(function() {
        $(window).scroll(function() {
            $(".fade_off").each(function() {
                var imgPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > imgPos - windowHeight + windowHeight / 5) {
                    $(this).addClass("fade_on");
                } else {
                    $(this).removeClass("fade_on");
                }
            });
        });
    });


    $(function() {
        let target = $(".feature");
        let el = target.offset().top;
        $(window).scroll(function() {
            let mouseTop = $(this).scrollTop();
            if (mouseTop > el) {
                target.addClass("color2");
            }
        });
    });


    $(function() {
        let target = $(".contents-section");
        let el = target.offset().top;
        $(window).scroll(function() {
            let mouseTop = $(this).scrollTop();
            if (mouseTop > el) {
                target.addClass("color");
            }
        });
    });


    $(function() {
        var controller = new ScrollMagic.Controller();
        $('.continue').hide();

        var scene = new ScrollMagic.Scene({
            triggerElement: ".continue",
        })
        scene.on("enter", function(event) {
                $(".continue").each(function(i) {
                    $(this).delay(800 * i).fadeIn(1000);
                });
            })
            .addTo(controller);
    });

    $(function() {
        $(window).on("scroll resize", function() {
            let w = $(window).width();
            let x = 1024;
            if (w >= x) {



                addEventListener('resize', function() {
                    location.reload();
                });
            }
        });
    });


});