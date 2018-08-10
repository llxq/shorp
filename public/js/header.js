$(() => {
    $(".top > .top-info > .userInfo > .search").addClass("moveRight");
    $(".top > .top-info > .userInfo > ul").addClass("moveRight");
    $(".top>.top-tabbar>.title h1").css({
        "opacity": "1",
        "transform": "scale(1)"
    });
    // $(".top>.top-tabbar>.tabbar>ul li a").each((index, item) => {
    //     $(item).click(function () {
    //         $(".top>.top-tabbar>.tabbar>ul li a").each(function () {
    //             $(this).removeClass("active");
    //         })
    //         $(this).addClass("active");
    //     })
    // });
})