
const { uuid } = require('uuid');

function generateDescendingList(length) {
    let descendingList = [];
    for (let i = length; i > 0; i--) {
        descendingList.push(i);
    }
    return descendingList;
}

// Usage
const descendingList = generateDescendingList(10);
console.log(descendingList);


module.exports = { generateDescendingList };
