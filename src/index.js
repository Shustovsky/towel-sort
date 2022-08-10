module.exports = towelSort = (matrix) => {
    if (matrix === undefined) { return [] }
    let arr = matrix.map((items, index) => {
        return index % 2 === 0 ? items : items.reverse();
    })
    let result = [];
    for (items of arr) {
        for (item of items) {
            result.push(item);
        }
    }

    return result;
}