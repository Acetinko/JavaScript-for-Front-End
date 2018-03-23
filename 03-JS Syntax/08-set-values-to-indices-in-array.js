function setValuesToIndices(params) {
    var len = params[0];
    var arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(0);
    }

    params.shift();
    for (let parameter of params) {
        var tokens = parameter.split(" ").map(x => x.trim());
        var index = Number(tokens[0]);
        var value = tokens[2];
        arr[index] = value;
    }

    console.log(arr.join("\n"));
}

// setValuesToIndices(["3", "0 - 5", "1 - 6", "2 - 7"]);
// setValuesToIndices(["2", "0 - 5", "0 - 6", "0 - 7"]);
// setValuesToIndices(["5", "0 - 3", "3 - -1", "4 - 2"]);
