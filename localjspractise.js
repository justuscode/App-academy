function divideByThree(num) {
    return num / 3;
}

function averageOfTwo(num1, num2) {
    return (num1 + num2) / 2;
}

function averageOfFour(num1, num2, num3, num4) {
    return (num1 + num2 + num3 + num4) / 4;
}

function doubler(nums) {
    return nums.map(num => num * 2);
}

function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

function wordWithinArray(word, arr) {
    return arr.indexOf(word) !== -1;
}

function echo(str) {
    return `${str.toUpperCase()} ... ${str} ... ${str.toLowerCase()}`;
}

function fizzBuzz(max) {
    let result = [];
    for (let i = 0; i < max; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            result.push(i);
        }
    }
    return result;
}

function hello(name) {
    return `Hello, ${name}`;
}

function goodbye(name) {
    return `Bye, ${name}`;
}

function isFive(num) {
    return num === 5;
}

function isOdd(num) {
    return num % 2 !== 0;
}

function isSubString(searchString, subString) {
    return searchString.toLowerCase().includes(subString.toLowerCase());
}

function aCounter(word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'a' || word[i] === 'A') {
            count++;
        }
    }
    return count;
}

module.exports = {
    divideByThree,
    averageOfTwo,
    averageOfFour,
    doubler,
    combineArrays,
    wordWithinArray,
    echo,
    fizzBuzz,
    hello,
    goodbye,
    isFive,
    isOdd,
    isSubString,
    aCounter   
};
