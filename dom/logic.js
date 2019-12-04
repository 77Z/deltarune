function logic() {
    const logic = {};

    logic.between = function(x, min, max) {
        return x >= min && x <= max;
    };

    logic.getRandomRange = function(min, max) {
        var one = Math.random() * (max - min) + min;
        return one.toString().split('.')[0];
    };

    return logic;
}