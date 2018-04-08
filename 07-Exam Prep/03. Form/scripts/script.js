function renderForm() {
    // Header
    $("#header-ctr").append(
        $("<h1>").text("Basic calculated fields sample."),
        $("<hr>")
    );

    let fragment = document.createDocumentFragment();

    // Label 1
    $("<label>")
        .addClass("one")
        .append(
            $("<span>").text("Distance (mi) *"),
            $("<input>").attr({
                type: "text",
                placeholder: "Enter Distance",
                required: true
            })
        )
        .appendTo(fragment);

    // Label 2
    $("<label>")
        .addClass("two")
        .append(
            $("<span>").text("Weight (lb)"),
            $("<input>").attr({
                type: "text",
                placeholder: "Enter Weight",
                required: true
            }),
            $("<span>")
                .addClass("fragile")
                .text("Fragile"),
            $("<select>")
                .attr("name", "fragile-menu")
                .append(
                    $("<option>")
                        .attr({
                            value: "Value 0",
                            disabled: true,
                            selected: true
                        })
                        .text("Select Something"),
                    $("<option>")
                        .attr("value", "Value 1")
                        .text("No"),
                    $("<option>")
                        .attr("value", "Value 2")
                        .text("Yes")
                )
        )
        .appendTo(fragment);

    // Label 3
    $("<label>")
        .addClass("three")
        .append(
            $("<span>").text("Length (in)"),
            $("<span>")
                .addClass("height")
                .text("height (in)"),
            $("<span>")
                .addClass("width")
                .text("width (in)"),
            $("<input>").attr({
                type: "number",
                placeholder: "Length"
            }),
            $("<input>").attr({
                type: "number",
                placeholder: "Height"
            }),
            $("<input>").attr({
                type: "number",
                placeholder: "10",
                min: "1",
                max: "1000"
            })
        )
        .appendTo(fragment);

    // Label 4
    $("<label>")
        .addClass("four")
        .append(
            $("<h3>").text("Extra services:"),
            $("<p>")
                .text("Insurance")
                .prepend($("<input>").attr("type", "checkbox")),
            $("<p>")
                .text("Express Delivery")
                .prepend($("<input>").attr("type", "checkbox"))
        )
        .appendTo(fragment);

    // Label Price
    $("<label>")
        .addClass("price")
        .append(
            $("<span>").text("total:"),
            $("<p>")
                .addClass("total-price")
                .text("$ 00.00")
        )
        .appendTo(fragment);

    // Submit
    $("<p>")
        .addClass("submit")
        .text("Im Ready")
        .appendTo(fragment);

    // Form
    $("form").append(fragment);

    renderSuccessNotification();
    addEvents();
}

function renderSuccessNotification() {
    let fragment = document.createDocumentFragment();

    $("<h1>")
        .text("Good Job!")
        .appendTo(fragment);

    $("<img>")
        .attr({
            src: "register_success.png",
            alt: "success"
        })
        .appendTo(fragment);

    $(".after-success").append(fragment);
}

function addEvents() {
    $(".submit").click(function() {
        $("#header-ctr").hide();
        $("form").hide();
        $(".after-success").removeClass("hidden");
    });
}
