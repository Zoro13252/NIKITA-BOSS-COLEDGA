//Задание 1
const concatenateStrings = (spring, spring2) => {
    let result = (spring.trim() + spring2.trim())
    return result;
}
//Задание 2
const getStringLength = (str) => {
    return str.length;
}
//Задание 3
const getStringFromTemplate = (firstName, lastName) => {
    return `Hello, ${firstName} ${lastName}!`;
}
//Задание 4
const getChar = (str, ind) => {
    return str[ind - 1];
}
//Задание 5
const removeFirstOccurrences = (str, subString) => {
    const ind = str.indexOf(subString);
    return str.slice(0, ind) + str.slice(ind + subString.length);
}
//Задание 6
const getRectangleString = (width, height) => {
    let result = '';
    for (let i = 0; i < height; i++) {
        result += '*'.repeat(width) + '\n';
    }
    return result.trim();
}

        res = ('Никита-ЛОХ ').repeat(100);
        console.log(res);