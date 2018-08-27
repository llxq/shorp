$(() => {
    $("#slider").slider({
        // 动画效果快速
        animate: true,
        // 关闭滑动条
        // disable: "true"

        range: true,

        // 设置最小值0，最大值100，每一次拖动变化为2，默认值为50
        min: 0,
        max: 100000,
        step: 1,

        // 这个是设置默认值的
        // value: 50,

        // 当设置了 range为true的时候，会出现两个滑块，所以这个时候的value就应该变为 values，值为一个数组，数组的两个值就分别代表当前滑块的两个值
        values: [20000, 80000],
        // 获取滑动条的值
        slide(event, ui) {
            $("#min-price").html("$" + ui.values[0]);
            $("#max-price").html("$" + ui.values[1]);
            // 如果滚动条的值
        }
    })
    // 图片放大
    $(".product-body>.product-container>.right>.product-img-big").on("mouseover", () => {
        $(".product-body>.product-container>.right>.product-img-big img").css("transform", "scale(2)");
    }).on("mouseleave", function () {
        $(".product-body>.product-container>.right>.product-img-big img").css("transform", "scale(1)")
    })

    // 衣服遮罩
    $(".product-body>.product-container>.right>.goods-list >.row .thumbnail  .goods-shade")
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

    $(".buy-shade").on("mouseover", function () {
        $(this).css("background-color", "#ffc229")
    }).on("mouseout", function () {
        $(this).css("background-color", "#d8703f")
    })

    // 动画
    function comprareTop(top) {
        let windowTop = $(window).scrollTop();
        if (top - windowTop > 200) {
            return false;
        } else {
            return true;
        }
    }
    $(window).on("scroll", () => {
        // left
        if (comprareTop($(".product-body>.product-container>.left>.new-product").offset().top - 1300)) {
            $(".product-body>.product-container>.left>.new-product").css("transform", "translateY(0)");
        }
        if (comprareTop($(".product-body>.product-container>.left>.img").offset().top - 1300)) {
            $(".product-body>.product-container>.left>.img").css("transform", "translateY(0)");
        }

        // right
        if (comprareTop($(".product-body>.product-container>.right>.goods-list>.row>.col-md-4:nth-child(-n+3)").offset().top - 1300)) {
            $(".product-body>.product-container>.right>.goods-list>.row>.col-md-4:nth-child(-n+3)").css("transform", "translateY(0)");
        }
        if (comprareTop($(".product-body>.product-container>.right>.goods-list>.row>.flag").offset().top - 1300)) {
            $(".product-body>.product-container>.right>.goods-list>.row>.flag").css("transform", "translateY(0)");
        }
        if (comprareTop($(".product-body>.product-container>.right>.goods-list>.row>.col-md-4:nth-last-child(-n+3)").offset().top - 1320)) {
            $(".product-body>.product-container>.right>.goods-list>.row>.col-md-4:nth-last-child(-n+3)").css("transform", "translateY(0)");
        }
        if (comprareTop($(".product-body>.product-container>.right>.navigation-body").offset().top - 280)) {
            $(".product-body>.product-container>.right>.navigation-body").css("transform", "translateY(0)");
        }

    })
    // left动画
    $(".product-body>.product-container>.left>.categories").css("transform", "translateY(0)");

    // right动画
    $(".product-body>.product-container>.right>.menu,.product-body>.product-container>.right>.product-img-big").css("transform", "translateY(0)");

})