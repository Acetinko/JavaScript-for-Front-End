function renderAllElementsInHTML() {
    // Title
    $("<h1>")
        .text("Choose Your Destiny")
        .prependTo($("#elementsContainer"));

    let fragment = document.createDocumentFragment();

    // Air, Fire
    $("<div>")
        .addClass("containers")
        .append(
            $("<div>")
                .attr("id", "air")
                .addClass("first clickable"),
            $("<div>")
                .attr("id", "fire")
                .addClass("second clickable")
        )
        .appendTo(fragment);

    // Water, Earth
    $("<div>")
        .addClass("containers")
        .append(
            $("<div>")
                .attr("id", "water")
                .addClass("third clickable"),
            $("<div>")
                .attr("id", "earth")
                .addClass("fourth clickable")
        )
        .appendTo(fragment);

    // Display container
    $(".container").append(fragment);
    $("#elementsContainer").removeClass("no-display");
    addEvents();
}

function renderSingleElementInHTML(element) {
    // top
    $("#elementInfoTitle")
        .text(element)
        .css("text-transform", "capitalize");

    $(".back-button").append(
        $("<button>")
            .attr("id", "backToElements")
            .text("Back to Elements")
            .click(() => backToAllElements())
    );

    // left
    let fragment = document.createDocumentFragment();
    $("<li>")
        .append(
            $("<input>")
                .addClass("radio-button checked")
                .attr({
                    name: "selector",
                    type: "radio",
                    value: "Archangel"
                }),
            $("<label>").text("Archangel")
        )
        .appendTo(fragment);

    $("<li>")
        .append(
            $("<input>")
                .addClass("radio-button checked")
                .attr({
                    name: "selector",
                    type: "radio",
                    value: "Elemental"
                }),
            $("<label>").text("Elemental")
        )
        .appendTo(fragment);

    $(".creatures").append(fragment);

    // center
    $(".center-after-click").append(
        $("<img>").attr({
            id: "creature-image",
            src: "images/archangel.jpg",
            alt: "archangel"
        })
    );

    // right
    $("#right-after-click").append(
        $("<p>")
            .attr("id", "creature-name")
            .text("Archangel"),
        $("<p>")
            .attr("id", "creature-power")
            .text("Power:2000"),
        $("<p>")
            .attr("id", "creature-ultimate")
            .text("Ultimate: Wind Justice"),
        $("<p>")
            .attr("id", "creature-region")
            .text("Region: Heaven’s Kingdom")
    );

    // Toggle containers
    $("#elementsContainer").addClass("no-display");
    $("#elementInfo").removeClass("no-display");
}

function addEvents() {
    $("#air").click(() => renderSingleElementInHTML("air"));
    $("#fire").click(() => renderSingleElementInHTML("fire"));
    $("#water").click(() => renderSingleElementInHTML("water"));
    $("#earth").click(() => renderSingleElementInHTML("earth"));
}

function backToAllElements() {
    $("#elementsContainer").removeClass("no-display");
    $("#elementInfo").addClass("no-display");

    // Empty Element Info
    $("#elementInfoTitle").empty();
    $(".back-button").empty();
    $(".creatures").empty();
    $(".center-after-click").empty();
    $("#right-after-click").empty();
}
