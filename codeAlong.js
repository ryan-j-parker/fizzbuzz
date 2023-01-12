const fb = {
  3: 'fizz',
  5: 'buzz',
  7: 'foo',
  11: 'bar',
};

const buzzfizz = (num) => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    let str = '';
    i % 3 ? null : (str += fb[3]);
    i % 5 ? null : (str += fb[5]);
    i % 7 ? null : (str += fb[7]);
    i % 11 ? null : (str += fb[11]);
    arr.push(str || i);
  }
  return arr;
};
console.log(buzzfizz(100));
