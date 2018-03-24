function attachEvents() {
    function toggleButtonClick() {
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
    }

    $("a.button").click(toggleButtonClick);
}
