function renderHeaderInHtml() {
    let fragment = document.createDocumentFragment();

    // Nav
    $("<span>")
        .attr("id", "logo")
        .text("Code Mesh")
        .appendTo(fragment);

    $("<ul>")
        .append(
            $("<li>")
                .addClass("list-item")
                .append(
                    $("<a>")
                        .attr("href", "#")
                        .text("speakers")
                ),
            $("<li>")
                .addClass("list-item")
                .append(
                    $("<a>")
                        .attr("href", "#")
                        .text("schedule")
                ),
            $("<li>")
                .addClass("list-item")
                .append(
                    $("<a>")
                        .attr("href", "#")
                        .text("workshops")
                ),
            $("<li>")
                .addClass("list-item")
                .append(
                    $("<a>")
                        .attr("href", "#")
                        .text("login")
                )
        )
        .appendTo(fragment);

    $("nav").append(fragment);

    // Div #center
    fragment = document.createDocumentFragment();

    $("<p>")
        .text(
            "The urge for coding innovations is the same as the urge to go on living"
        )
        .appendTo(fragment);

    $("<i>")
        .addClass("fa fa-play-circle fa-4x")
        .appendTo(fragment);

    $("#center").append(fragment);

    // Section
    fragment = document.createDocumentFragment();

    $("<article>")
        .append(
            $("<i>")
                .addClass("fa fa-code fa-2x")
                .attr("aria-hidden", true),
            $("<p>").text(
                "CodeMesh returns to Sofia 11th - 12th May, 2017. We promise you the very best developer content and awesome experiences."
            )
        )
        .appendTo(fragment);

    $("<article>")
        .append(
            $("<i>")
                .addClass("fa fa-area-chart fa-2x")
                .attr("aria-hidden", true),
            $("<p>").text(
                "This year, CodeMesh is welcoming top speakers not only from the country, but Europe and even USA!"
            )
        )
        .appendTo(fragment);

    $("<article>")
        .append(
            $("<i>")
                .addClass("fa fa-diamond fa-2x")
                .attr("aria-hidden", true),
            $("<p>").text(
                "We're also going to have a much bigger and cooler networking event after the conference!"
            )
        )
        .appendTo(fragment);

    $("<article>")
        .append(
            $("<i>")
                .addClass("fa fa-cube fa-2x")
                .attr("aria-hidden", true),
            $("<p>").text(
                "Join us and immerse yourself in all the different tracks and topics available to out attendees!"
            )
        )
        .appendTo(fragment);

    $(".header-section").append(fragment);
}

function renderMainInHtml() {
    let mainFragment = document.createDocumentFragment();

    // Section Left
    $("<section>")
        .addClass("left")
        .append(
            $("<p>").text(
                "\"I think it's really important to think outside of the box when you're coding\""
            ),
            $("<span>")
                .addClass("MarcNewson")
                .text("words by marc newson")
        )
        .appendTo(mainFragment);

    // Section Center
    $("<section>")
        .addClass("center")
        .append(
            $("<p>").text(
                "When you're busy leading a team, coding and maintaining standards, how do you find the time to stay ahead of new technologies and develop yourself as a technical lead? Software continues to transform the world in remarkable ways and developers are at the center of it. At CodeMesh 2017 we invite you to join us in Sofia to learn about latest new technologies and exciting plans on the horizon. As always, CodeMesh is filled with strong technical sessions as well as opportunities to meet and learn from others in the industry. We'll make sure the schedule is filled with solid content, and will strive to deliver some fun surprises along the way."
            ),
            $("<span>")
                .addClass("bottom")
                .text(
                    "You can code and create, and build the most wonderful place in the world."
                )
        )
        .appendTo(mainFragment);

    // Img
    $("<img>")
        .attr({
            id: "right-img",
            src: "img/intro-img.png"
        })
        .appendTo(mainFragment);

    // Div
    $("<div>")
        .attr("id", "orange")
        .appendTo(mainFragment);

    // Section Schedule
    $("<section>")
        .addClass("schedule")
        .append(
            $("<h2>").text(
                "Schedule: Grab some coffee & donuts and take a seat"
            ),
            $("<div>")
                .addClass("registration")
                .append(
                    $("<i>")
                        .addClass("fa fa-address-book-o orange-icon")
                        .attr("aria-hidden", true),
                    $("<span>")
                        .addClass("time")
                        .text("09:00 - 10:00 AM"),
                    $("<p>").text("registration")
                ),
            $("<div>")
                .addClass("mic")
                .append(
                    $("<i>")
                        .addClass("fa fa-microphone orange-icon")
                        .attr("aria-hidden", true),
                    $("<span>")
                        .addClass("time")
                        .text("11:00 - 12:00 AM"),
                    $("<p>").text("the future of creative computing")
                ),
            $("<div>")
                .addClass("lunch")
                .append(
                    $("<i>")
                        .addClass("fa fa-cutlery orange-icon")
                        .attr("aria-hidden", true),
                    $("<span>")
                        .addClass("time")
                        .text("12:00 - 13:00 PM"),
                    $("<p>").text("lunch break")
                )
        )
        .appendTo(mainFragment);

    // Section Position-right
    $("<section>")
        .addClass("position-right")
        .append(
            $("<div>")
                .addClass("linux")
                .append(
                    $("<i>")
                        .addClass("fa fa-microphone orange-icon")
                        .attr("aria-hidden", true),
                    $("<span>")
                        .addClass("time")
                        .text("13:00 - 14:00 AM"),
                    $("<p>").text("linux for developers")
                ),

            $("<div>")
                .addClass("wonderful")
                .append(
                    $("<i>")
                        .addClass("fa fa-microphone orange-icon")
                        .attr("aria-hidden", true),
                    $("<span>")
                        .addClass("time")
                        .text("14:00 - 15:00 AM"),
                    $("<p>").text("the wonderful world of IOT")
                ),
            $("<div>")
                .addClass("do-we-need")
                .append(
                    $("<i>")
                        .addClass("fa fa-microphone orange-icon")
                        .attr("aria-hidden", true),
                    $("<span>")
                        .addClass("time")
                        .text("15:00 - 16:00 AM"),
                    $("<p>").text("do we need to read coding books?")
                )
        )
        .appendTo(mainFragment);

    // Append Main after Header
    $("header").after($("<main>").append(mainFragment));
}

$(document).ready(function() {
    renderHeaderInHtml();
    renderMainInHtml();
});
