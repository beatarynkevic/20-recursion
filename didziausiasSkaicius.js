const skaiciai = [10, 2, 8, 6, [14, -9, 87, -777], 12, 11, 7];

function didziausiasSkaicius(list) {
    let biggest = -Infinity;
    for (let number of list) {
        if (typeof number !== 'number') {
            const biggestChild = didziausiasSkaicius(number);
            if (biggestChild > biggest) {
                biggest = biggestChild;
            }
        }
        if (number > biggest) {
            biggest = number;
        }
    }
    return biggest;
}

const ats = didziausiasSkaicius(skaiciai);
console.log(ats);