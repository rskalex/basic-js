const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let countCatArr = [];

    matrix.forEach(item => {
        const count = item.filter(el => {
            return el === '^^';
        });
        countCatArr = countCatArr.concat(count);
    });
    return countCatArr.length;
};
