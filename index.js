const fizzbuzz = num => {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        let str = '';
        i % 3 ? null : str += 'fizz';
        i % 5 ? null : str += 'buzz';
        arr.push(str || i);
    }
    return(arr.join('\n'));
};
console.log(fizzbuzz(100));