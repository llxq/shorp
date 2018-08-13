$(() => {
    $(".login-body > .login-container > .login-title").css("transform", "scale(1)");

    function comprareTop(top) {
        let windowTop = $(window).scrollTop();
        if (top - windowTop > 200) {
            return false;
        } else {
            return true;
        }
    }
    $(window).on("scroll", () => {
        if (comprareTop($(".login-body>.login-container>.login-main>form").offset().top - 1450)) {
            $(".login-body>.login-container>.login-main>form").css("transform", "translateY(0)");
        }
        if (comprareTop($(".login-body > .login-container > .register").offset().top - 1400)) {
            $(".login-body > .login-container > .register").css("transform", "translateY(0)");
        }
    })
})