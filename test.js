/* let s = 'javascriptloops';
function vowelsAndConsonants(s) {
    let arrVowels = [];
    let arrConsonants = [];
    for (let i = 0; i < s.length; i++) {
        let j = 0;
        let k = 0;
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
            arrVowels.push(s[i]);
        }
        else {
            arrConsonants.push(s[i]);
        }
    }
    for (let i = 0; i < arrVowels.length; i++) {
        console.log(arrVowels[i]);
    }
    for (let i = 0; i < arrConsonants.length; i++) {
        console.log(arrConsonants[i]);
    }
}
vowelsAndConsonants(s); */

/* // customer order array
var orders = [
    { customerName: 'latif', productName: ['Smartphone', 'cable'], quantity: 2, date: 'august' },
    { customerName: 'jamal', productName: ['battery', 'earphone', 'mouse'], quantity: 3, date: 'january' },
    { customerName: 'sajib', productName: ['charger', 'pendrive'], quantity: 2, date: 'february' },
];
function findProductByName(customerName) {
    let arr = '';
    for (let i = 0; i < orders.length; i++) {
        let element = orders[i];
        for (let key in element) {
            if (key == 'customerName' && element[key] == customerName) {
                for (let i = 0; i < element['productName'].length; i++) {
                    if (i == element['productName'].length - 1)
                        arr += element['productName'][i];
                    else {
                        arr += element['productName'][i] + ', ';
                    }
                }
            }
        }
    }
    return arr;
}
console.log(findProductByName('jamal'));
// battery, earphone, mouse      //output */

/* var products = [
    { name: 'jamal', items: ['laptop', 'watch', 'mobile'], price: 12000 }
]
for (let i of products) {
    if (i.name == 'jamal') {
        console.log(i.items);
    }
} */

