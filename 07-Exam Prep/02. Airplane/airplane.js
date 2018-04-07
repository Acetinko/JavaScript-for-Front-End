function airplane(input) {
    let tokens = input.map(Number);
    let departureHour = tokens[0];
    let departureMin = tokens[1];
    let flightDuration = tokens[2]; // in mins

    let arrivalTime = departureHour * 60 + departureMin + flightDuration; // in mins
    let arrivalMin = arrivalTime % 60;
    let arrivalHour = Math.floor(arrivalTime / 60);
    if (arrivalHour > 24) {
        arrivalHour = Math.floor(arrivalHour / 24);
    }

    console.log(`${arrivalHour}h ${arrivalMin}m`);
}

airplane([6, 50, 90]);
airplane([8, 40, 120]);
airplane([23, 50, 75]);
