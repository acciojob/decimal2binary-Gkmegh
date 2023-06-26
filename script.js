function decimalToBinary(decimal) {
    let binary = "";
    while (decimal > 0) {
        if (decimal % 2 == 1) {
            binary = "1" + binary;
        } else {
            binary = "0" + binary;
        }
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}

module.exports = decimalToBinary;
