$(() => {

    // 下拉菜单
    $(".top>.top-tabbar>.tabbar>ul>li").on("mouseover", function () {
        $(this).children("a").css({
            "color": "brown"
        });
        $(this).children("span").css({
            "color": "brown"
        });
    }).on("mouseout", function () {
        $(this).children().css({
            "color": "#666"
        });
    })

    $(".top>.top-tabbar>.tabbar>ul .dropdown-menu>div>ul>li a").on("mouseover", function () {
        $(this).css({
            "color": "brown"
        });
    }).on("mouseout", function () {
        $(this).css({
            "color": "#aaa"
        });
    })

    // 显示菜单 .open > .dropdown-menu
    $(".open > .dropdown-menu")

    $(".top > .top-info > .userInfo > .search").addClass("moveRight");
    $(".top > .top-info > .userInfo > ul").addClass("moveRight");
    $(".top>.top-tabbar>.title h1").css({
        "opacity": "1",
        "transform": "scale(1)"
    });


    function comprareTop(top) {
        let windowTop = $(window).scrollTop();
        if (top - windowTop > 200) {
            return false;
        } else {
            return true;
        }
    }

    $(window).on("scroll", () => {
        if (comprareTop($(".footer-container").offset().top - 200)) {
            $(".footer-container").css("opacity", "1");
            $(".footer-container>.footer-top").css({
                "transform": "translate(0)"
            });
            $(".footer-container>.footer-middle").css({
                "transform": "scale(1)"
            });
            $(".footer-container>.footer-bottom").css({
                "transform": "scale(1)"
            });
        }
    })
})