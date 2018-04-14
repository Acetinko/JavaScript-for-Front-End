function renderHtml() {
    let fragment = document.createDocumentFragment();

    $("<h1>")
        .addClass("heading")
        .text("Front-End-Player")
        .appendTo(fragment);

    $("<div>")
        .addClass("img-ctr")
        .append(
            $("<img>").attr({
                src: "love-music.png",
                alt: "music"
            })
        )
        .appendTo(fragment);

    $("<div>")
        .addClass("container")
        .append(
            $("<i>")
                .addClass("fa fa-step-backward")
                .attr({
                    id: "prev",
                    "arria-hidden": true
                }),
            $("<i>")
                .addClass("fa fa-play-circle")
                .attr({
                    id: "play",
                    "arria-hidden": true
                }),
            $("<i>")
                .addClass("fa fa-pause-circle hidden")
                .attr({
                    id: "pause",
                    "arria-hidden": true
                }),
            $("<i>")
                .addClass("fa fa-step-forward")
                .attr({
                    id: "next",
                    "arria-hidden": true
                })
        )
        .appendTo(fragment);

    $("<div>")
        .addClass("input-ctr")
        .append(
            $("<input>")
                .addClass("result")
                .attr({
                    type: "text",
                    disabled: true,
                    value: "Play me !"
                })
        )
        .appendTo(fragment);

    $("form").append(fragment);
}

function loadEvents() {
    $("#play").click(function() {
        $("#play").addClass("hidden");
        $("#pause").removeClass("hidden");
        $(".result").attr("value", "Music Playing");
    });

    $("#pause").click(function() {
        $("#pause").addClass("hidden");
        $("#play").removeClass("hidden");
        $(".result").attr("value", "Music Paused");
    });

    $("#prev").click(function() {
        $(".result").attr("value", "Previous song");
    });

    $("#next").click(function() {
        $(".result").attr("value", "Next song");
    });
}

$(document).ready(function() {
    renderHtml();
    loadEvents();
});
