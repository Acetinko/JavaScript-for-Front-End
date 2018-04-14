function calcProfit(input) {
    let cakePrice = 45;
    let wafflePrice = 5.8;
    let pancakePrice = 3.2;
    let costsPerc = 1 / 8;

    input = input.map(Number);
    let days = input[0];
    let confectioners = input[1];
    let cakeQty = input[2];
    let waffleQty = input[3];
    let pancakeQty = input[4];

    let sales =
        cakePrice * cakeQty +
        wafflePrice * waffleQty +
        pancakePrice * pancakeQty;
    sales *= confectioners * days;

    let profit = sales * (1 - costsPerc);
    console.log(profit.toFixed(2));
}

calcProfit([20, 8, 14, 30, 16]);
calcProfit([131, 5, 9, 33, 46]);
