function checkRowForNegative(row, rowIndex) {
    return new Promise((resolve) => {
        const hasNegative = row.some(number => number < 0);
        if (hasNegative) {
            resolve({ rowIndex, row });
        } else {
            resolve(null);
        }
    });
}

function logRowsWithNegatives(array2D) {
    const checkPromises = array2D.map((row, index) => checkRowForNegative(row, index));

    Promise.all(checkPromises)
        .then(results => {
            results.forEach(result => {
                if (result !== null) {
                    console.log(`Row ${result.rowIndex} contains a negative number:`, result.row);
                }
            });
        })
        .catch(err => console.error(err));
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

logRowsWithNegatives(array2D);
