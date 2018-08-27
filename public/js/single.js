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

    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

    // 实现radio效果
    let $radio = $(".single-body>.single-container>.right>.show-goods>.right>.occasional>.color>.radio");
    for (let i = 0; i < $radio.length; i++) {
        $($radio[i]).on("click", function () {
            for (let i = 0; i < $radio.length; i++) {
                $($radio[i]).children("i").removeClass("radio-change");
            }
            $(this).children("i").addClass("radio-change");
        })
    }

    // 动画
    $(".single-body>.single-container>.left>.categories").css("transform", "translateY(0)");
    $(".single-body>.single-container>.right>.show-goods").css("transform", "translateY(0)");

    function comprareTop(top) {
        let windowTop = $(window).scrollTop();
        if (top - windowTop > 200) {
            return false;
        } else {
            return true;
        }
    }
    $(window).on("scroll", () => {
        if (comprareTop($(".single-body>.single-container>.left>.img").offset().top - 1400)) {
            $(".single-body>.single-container>.left>.img").css("transform", "translateY(0)");
        }
        if (comprareTop($(".single-body>.single-container>.right>.goods-nav-tabs").offset().top - 1380)) {
            $(".single-body>.single-container>.right>.goods-nav-tabs").css("transform", "translateY(0)");
        }

        if (comprareTop($(".related-product-body>.related-product-content>h2").offset().top - 350)) {
            $(".related-product-body>.related-product-content>h2,.related-product-body>.related-product-content>p").css("transform", "scale(1)");
        }

        if (comprareTop($(".related-product-body>.related-product-content>.product-content").offset().top - 300)) {
            $(".related-product-body>.related-product-content>.product-content").css("transform", "translateX(0)");
        }
    })

    // 衣服遮罩
    $(".related-product-body>.related-product-content>.product-content> .row .thumbnail .goods-shade")
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

})