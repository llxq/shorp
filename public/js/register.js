$(() => {
    $(".register-body > .register-container > .register-title").css("transform", "scale(1)");

    function comprareTop(top) {
        let windowTop = $(window).scrollTop();
        if (top - windowTop > 200) {
            return false;
        } else {
            return true;
        }
    }
    $(window).on("scroll", () => {
        if (comprareTop($(".register-body>.register-container>.register-main>form > h5:first-child").offset().top-1400)) {
            $(".register-body>.register-container>.register-main>form > h5:first-child,.register-body>.register-container>.register-main>form .read,.register-body>.register-container>.register-main>form .input-group:nth-child(-n+3) ").css("transform", "translateY(0)");
        }
        if (comprareTop($(".register-body>.register-container>.register-main>form > .login-information").offset().top-1320)) {
            $(".register-body>.register-container>.register-main>form > .login-information,.register-body>.register-container>.register-main>form .agree,.register-body>.register-container>.register-main>form .input-group:nth-child(n+3),.register-body>.register-container>.register-main>form > button,.register-body>.register-container>.register-main>form > .go-login").css("transform", "translateY(0)");
        }
    })
})