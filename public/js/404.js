$(() => {
    $("#go").on("click", () => {
        window.history.go(-1);
    })
})