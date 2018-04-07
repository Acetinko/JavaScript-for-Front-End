$(function() {
    $(".toggle").click(function(e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.next().hasClass("show")) {
            $this
                .next()
                .removeClass("show")
                .slideUp(350);
        } else {
            $this
                .parent()
                .parent()
                .find("li .inner")
                .removeClass("show")
                .slideUp(350);
            $this
                .next()
                .toggleClass("show")
                .slideToggle(350);
        }
    });
});
