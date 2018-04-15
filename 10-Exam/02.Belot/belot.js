function calc(input) {
    input = input.map(Number);
    let pointsTedy = input[0];
    let pointsNikoleta = input[1];
    let pointsRadi = input[2];
    let pointsIvo = input[3];

    let reductionTedy = 0.1;
    let reductionNikoleta = 0.05;
    let reductionMen = 1 / 6;

    pointsTedy *= 1 - reductionTedy;
    pointsNikoleta *= 1 - reductionNikoleta;
    let maxPoints = Math.max(pointsTedy, pointsNikoleta, pointsRadi, pointsIvo);

    let resultGirls = Math.trunc(pointsTedy + pointsNikoleta);
    let resultMen = Math.trunc((pointsRadi + pointsIvo) * (1 - reductionMen));
    let difference = Math.abs(resultGirls - resultMen);

    console.log(`Highest points: ${maxPoints.toFixed(0)}`);
    if (resultGirls > resultMen) {
        console.log("GIRLS POWER");
        console.log(`Difference between points: ${difference}`);
    } else if (resultGirls < resultMen) {
        console.log("MANS POWER");
        console.log(`Difference between points: ${difference}`);
    } else {
        console.log("EQUAL POINTS");
    }
}

calc([50, 100, 30, 20]);
calc([14, 37, 130, 220]);
