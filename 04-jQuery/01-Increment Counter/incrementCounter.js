function increment(selector) {
    let fragment = document.createDocumentFragment();

    let textArea = $("<textarea>")
        .val(0)
        .addClass("counter")
        .attr("disabled", true)
        .appendTo(fragment);

    $("<button>")
        .addClass("btn")
        .attr("id", "incrementBtn")
        .text("Increment")
        .click(increaseTextAreaVal)
        .appendTo(fragment);

    $("<button>")
        .addClass("btn")
        .attr("id", "addBtn")
        .text("Add")
        .click(addResult)
        .appendTo(fragment);

    let results = $("<ul>")
        .addClass("results")
        .appendTo(fragment);

    $(selector).append(fragment);

    function increaseTextAreaVal() {
        textArea.val(1 + Number(textArea.val()));
    }

    function addResult() {
        $("<li>")
            .text(textArea.val())
            .appendTo(results);
    }
}
