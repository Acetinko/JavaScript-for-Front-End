function shopping(input) {
    let chocolatePrice = 0.65;
    let milkPrice = 2.7;
    let orangePrice = 0.2;
    let orangeQtyReduction = 0.35;

    let tokens = input.map(Number);
    let budget = tokens[0];
    let chocolatesQty = tokens[1];
    let milkQty = tokens[2];
    let orangesQty = Math.floor(chocolatesQty * (1 - orangeQtyReduction));

    let cost =
        chocolatePrice * chocolatesQty +
        milkPrice * milkQty +
        orangePrice * orangesQty;
    let remainingCash = budget - cost;

    console.log(
        remainingCash >= 0
            ? `You got this, ${ToFixed(remainingCash)} money left.`
            : `Not enough money, you need ${ToFixed(-remainingCash)} more.`
    );

    function ToFixed(number) {
        return number.toFixed(2);
    }
}

shopping([10, 5, 1.5]);
shopping([3, 4, 2.7]);
