$(() => {

    // 判断是否登录

    if (!localStorage.getItem("isLogin")) {
        localStorage.setItem("isLogin", "false");
    }
    let i = 0;
    let p = $(
        ".shorp-body>.shorp-container>.carousel-container>.carousel-text p"
    );
    $("#carousel-info").on("click", function () {
        console.log(this);
    });
    $(".shorp-body > .shorp-container").css({
        transform: "scale(1)",
        opacity: "1"
    });

    function updateState(index) {
        $("#carousel-pattern li").each(function () {
            $(this).removeClass("carousel-active");
        });
        $($("#carousel-pattern li")[index]).addClass("carousel-active");
        p.each(function () {
            $(this).removeClass("carousel-info");
        });
        $(p[index]).addClass("carousel-info");
    }

    let timer = carouselRun();

    $("#carousel-pattern li").each(function (index) {
        $(this)
            .on("click", function () {
                updateState(index);
                clearInterval(timer);
            })
            .on("mouseleave", () => {
                timer = carouselRun();
            });
    });

    // logo 轮播图标识
    function carouselRun() {
        return setInterval(function () {
            i++;
            if (i > p.length - 1) {
                i = 0;
            }
            updateState(i);
        }, 3000);
    }

    // 图片放大
    $(".show-goods-body>.show-goods .magnify").each(function (index) {
        $(this)
            .on("mouseover", function () {
                $(this)
                    .find("img")
                    .css({
                        transform: "scale(1.5)"
                    });
                if (index === 0) {
                    $(".show-goods-body>.show-goods>.show-left > .lid").css({
                        opacity: "1"
                    });
                    $(".show-goods-body>.show-goods>.show-left > .lid p").css({
                        transform: "scale(1)"
                    });
                }
            })
            .on("mouseout", function () {
                $(this)
                    .find("img")
                    .css({
                        transform: "scale(1)"
                    });
                if (index === 0) {
                    $(".show-goods-body>.show-goods>.show-left > .lid").css({
                        opacity: "0"
                    });
                    $(".show-goods-body>.show-goods>.show-left > .lid p").css({
                        transform: "scale(0)"
                    });
                }
            });
    });

    // 按钮点击添加购物车
    $(".buy").on("click", function () {
        // 修改样式
        $(this).css({
            color: "#d8703f",
            "border-color": "#d8703f",
            outline: "none",
            "background-color": "#fff"
        });
    });

    // 样品展示区域动画
    function comprareTop(top) {
        let windowTop = $(window).scrollTop();
        if (top - windowTop > 200) {
            return false;
        } else {
            return true;
        }
    }
    $(window).on("scroll", () => {
        if (comprareTop($(".show-goods-body>.show-goods").offset().top)) {
            $(".show-goods-body>.show-goods").css("opacity", "1")
            $(".show-goods-body>.show-goods>.show-left").css({
                "transform": "translateX(0)"
            })
            $(".show-goods-body>.show-goods>.show-middle").css("transform", "translateX(0)")
            $(".show-goods-body>.show-goods>.show-right").css("transform", "translateX(0)")
        }

        if (comprareTop($(".goods-show-body>.goods-list-container").offset().top)) {
            $(".goods-show-body>.goods-list-container").css("opacity", "1");
            $(".goods-show-body>.goods-list-container>.goods-logo").css("transform", "scale(1)");
            $(".goods-show-body>.goods-list-container>.goods-list>.top").css("transform", "translateY(0)");
        }

        if (comprareTop(($(".goods-show-body>.goods-list-container>.goods-list .middle ").offset().top) - 1800)) {
            $(".goods-show-body>.goods-list-container>.goods-list .middle ").css("transform", "translateY(0)");
        }

        if (comprareTop($(".goods-particular-body>.goods-particular-top").offset().top - 200)) {
            $(".goods-particular-body>.goods-particular-top").css("opacity", "1");
            $(".goods-particular-body>.goods-particular-top>.left").css("transform", "translateX(0)");
            $(".goods-particular-body>.goods-particular-top>.right").css("transform", "translateX(0)");
        }

        if (comprareTop($(".goods-particular-body>.goods-particular-middle > .top > .text-contaniner").offset().top - 200)) {
            $(".goods-particular-body>.goods-particular-middle > .top > .text-contaniner").css("transform", "translateX(0)")
        }

        if (comprareTop($(".goods-particular-body>.goods-particular-middle > .middle").offset().top - 1100)) {
            $(".goods-particular-body>.goods-particular-middle > .middle").css("transform", "translateY(0)")
        }



    })

    // 衣服样品遮罩
    $(".goods-show-body > .goods-list-container > .goods-list > .row .thumbnail .goods-shade")
        .on("mouseover", function () {
            $(this).css({
                opacity: "1"
            });
        })
        .on("mouseout", function () {
            $(this).css({
                opacity: "0"
            });
        });

    // 倒计时
    function countDown(days, hours, minutes, seconds) {
        let state = 0;
        if (--seconds <= 0) {
            seconds = 60;
            minutes -= 1;
            if (--minutes <= 0) {
                minutes = 59;
                hours -= 1;
                if (--hours <= 0) {
                    hours = 23;
                    days -= 1;
                    if (--days <= 0) {
                        days = 0;
                        hours = 0;
                        minutes = 0;
                        seconds = 0;
                        state = 1;
                    }
                }
            }
        }
        return {
            days,
            hours,
            minutes,
            seconds,
            state
        };
    }

    let state = 0;
    let counts;
    let timing = setInterval(() => {
        counts = countDown(
            parseInt($("#days").text()),
            parseInt($("#hours").text()),
            parseInt($("#minutes").text()),
            parseInt($("#seconds").text()),
            state
        );
        if (counts.state === 1) {
            clearInterval(timing);
            $(
                ".goods-particular-body>.goods-particular-top>.left> .left-count-down ul li p"
            ).css({
                color: "#aaa"
            });
        }
        $("#days").text(counts.days < 10 ? "0" + counts.days : counts.days);
        $("#hours").text(counts.hours < 10 ? "0" + counts.hours : counts.hours);
        $("#minutes").text(
            counts.minutes < 10 ? "0" + counts.minutes : counts.minutes
        );
        $("#seconds").text(
            counts.seconds < 10 ? "0" + counts.seconds : counts.seconds
        );
    }, 1000);
});