function purchase(input) {
    input = input.map(Number);
    let processorPrice = input[0];
    let videoCardPrice = input[1];
    let ramPrice = input[2];
    let ramQty = input[3];
    let discount = input[4];
    let fx = 1.57;

    let totalCost =
        (processorPrice + videoCardPrice) * (1 - discount) + ramPrice * ramQty;
    totalCost *= fx;

    console.log(`Money needed - ${totalCost.toFixed(2)} leva.`);
}

purchase([500, 200, 80, 2, 0.05]);
purchase([1200, 850, 120, 4, 0.1]);
purchase([200, 100, 80, 1, 0.01]);
