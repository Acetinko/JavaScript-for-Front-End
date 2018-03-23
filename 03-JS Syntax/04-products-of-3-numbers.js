function productSign(numbers) {
    numbers = numbers.map(Number);
    var containsZero = numbers.includes(0);
    var hasEvenNegativeNumbers = numbers.filter(x => x < 0).length % 2 == 0;
    return containsZero
        ? "Zero"
        : hasEvenNegativeNumbers ? "Positive" : "Negative";
}

// console.log(productSign(["2", "3", "-1"]));
// console.log(productSign(["5", "4", "3"]));
// console.log(productSign(["-3", "-4", "5"]));
// console.log(productSign(["0", "-4", "5"])); // 0 neither positive, not negative
