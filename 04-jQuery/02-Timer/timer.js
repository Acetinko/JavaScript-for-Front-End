function timer() {
    $("#start-timer").click(startTimer);
    $("#stop-timer").click(stopTimer);

    let milliseconds = 0;
    let isIncrementing = false;
    let timerInterval;

    function startTimer() {
        if (!isIncrementing) {
            timerInterval = setInterval(incrementTime, 1000); // in ms
            isIncrementing = true;
        }
    }

    function incrementTime() {
        milliseconds++;
        let seconds = milliseconds % 60;
        let minutes = Math.trunc((milliseconds % 3600) / 60);
        let hours = Math.trunc(milliseconds / 3600);

        $("#hours").text(formatTime(hours));
        $("#minutes").text(formatTime(minutes));
        $("#seconds").text(formatTime(seconds));
    }

    function stopTimer() {
        clearInterval(timerInterval);
        isIncrementing = false;
    }

    function formatTime(text) {
        return ("0" + text).slice(-2);
    }
}
