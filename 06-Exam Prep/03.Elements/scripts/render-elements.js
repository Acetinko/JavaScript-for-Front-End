function renderAllElementsInHTML() {
    $("<h1>")
        .text("Choose Your Destiny")
        .prependTo($("#elementsContainer"));

    let fragment = document.createDocumentFragment();
    $("<div>")
        .addClass("containers")
        .append(
            $("<div>")
                .attr("id", "air")
                .addClass("first clickable")
        )
        .append(
            $("<div>")
                .attr("id", "fire")
                .addClass("second clickable")
        )
        .appendTo(fragment);
    $("<div>")
        .addClass("containers")
        .append(
            $("<div>")
                .attr("id", "water")
                .addClass("third clickable")
        )
        .append(
            $("<div>")
                .attr("id", "earth")
                .addClass("fourth clickable")
        )
        .appendTo(fragment);

    $(".container").append(fragment);

    addEvents();

    // display / hide containers
    $("#elementsContainer").removeClass("no-display");
    $("#elementInfo").addClass("no-display");
}

function renderSingleElementInHTML(element) {
    // clear container
    clearElementInfo();

    // top
    $("#elementInfoTitle")
        .text(element)
        .css("text-transform", "capitalize");

    $(".back-button").append(
        $("<button>")
            .attr("id", "backToElements")
            .text("Back to Elements")
            .click(function() {
                $("#elementsContainer").removeClass("no-display");
                $("#elementInfo").addClass("no-display");
            })
    );

    // left
    let fragment = document.createDocumentFragment();
    $("<li>")
        .append(
            $("<input>")
                .addClass("radio-button checked")
                .attr("name", "selector")
                .attr("type", "radio")
                .attr("value", "Archangel")
        )
        .append($("<label>").text("Archangel"))
        .appendTo(fragment);
    $("<li>")
        .append(
            $("<input>")
                .addClass("radio-button checked")
                .attr("name", "selector")
                .attr("type", "radio")
                .attr("value", "Elemental")
        )
        .append($("<label>").text("Elemental"))
        .appendTo(fragment);
    $(".creatures").append(fragment);

    // center
    $(".center-after-click").append(
        $("<img>")
            .attr("id", "creature-image")
            .attr("src", "images/archangel.jpg")
            .attr("alt", "archangel")
    );

    // right
    $("#right-after-click")
        .append(
            $("<p>")
                .attr("id", "creature-name")
                .text("Archangel")
        )
        .append(
            $("<p>")
                .attr("id", "creature-power")
                .text("Power:2000")
        )
        .append(
            $("<p>")
                .attr("id", "creature-ultimate")
                .text("Ultimate: Wind Justice")
        )
        .append(
            $("<p>")
                .attr("id", "creature-region")
                .text("Region: Heaven’s Kingdom")
        );

    // display / hide containers
    $("#elementsContainer").addClass("no-display");
    $("#elementInfo").removeClass("no-display");
}

function clearElementInfo() {
    $("#elementInfoTitle").empty();
    $(".back-button").empty();
    $(".creatures").empty();
    $(".center-after-click").empty();
    $("#right-after-click").empty();
}

function addEvents() {
    $("#air").click(() => renderSingleElementInHTML("air"));
    $("#fire").click(() => renderSingleElementInHTML("fire"));
    $("#water").click(() => renderSingleElementInHTML("water"));
    $("#earth").click(() => renderSingleElementInHTML("earth"));

    $("#backToElements").click(function() {
        $("#elementsContainer").removeClass("no-display");
        $("#elementInfo").addClass("no-display");
    });
}
