'use strict';
// 要素を抽出したい時に使うfilter
{
  const numbers = [1, 4, 7, 8, 10];

  // const evenNumbers = numbers.filter(number => {
  //   if (number % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  //短く書く書き方。こちらの条件式が true だったら true 、 false だったら false を返しているので、この条件式自体を return するようにしてあげれば良い
  const evenNumbers = numbers.filter(number => number % 2 === 0);

  console.log(evenNumbers);
}