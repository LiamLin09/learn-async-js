function sumRow(row) {
    return new Promise((resolve) => {
        let sum = 0;
        for (const num of row) {
            sum += num;
        }
        resolve(sum);
    });
}

function sum2DArrayConcurrently(array2D) {
    const promises = array2D.map(row => sumRow(row));

    return Promise.all(promises)
        .then((sums) => sums.reduce((total, current) => total + current, 0));
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

sum2DArrayConcurrently(array2D)
    .then(sum => console.log(`Total sum: ${sum}`))
    .catch(err => console.error(err));
