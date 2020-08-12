const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (a) => {
    rl.question('', (b) => {
        var x = Number(a) + Number(b)
        console.log(`X = ${x}`);
        rl.close();
    });
});

// const a = lines();
// const b = lines();
// const x = Number(a) + Number(b)
// console.log(`X = ${x}`);