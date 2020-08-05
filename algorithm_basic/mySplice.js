// 실제 splice는 입력받은 arr 자체를 수정하고, 결과값으로 사라지는 배열의 부분을 리턴한다
// mySplice는 유사 splice이다
let mySplice = function (arr, a, b, ...c) {
  if ( !Array.isArray(arr) ) {
    return 'ERROR: First parameter must be an array.\n'
  }
  if ( typeof(a) !== 'number' ) {
    return 'ERROR: Second parameter must be an index number of array.\n'
  }
  if ( b === undefined || typeof(b) !== 'number' ) {
    b = 0;
  }
  if ( c === undefined ) {
    c = '';
  }
  // a 이전의 요소를 앞 배열에 저장
  let previousArr = arr.slice(0, a);
  // a+b 이후 요소를 뒷 배열에 저장
  let lastArr = arr.slice(a+b);
  // c를 앞 배열의 뒤에 붙여줌
  for ( let i of c ) {
    previousArr.push(i);
  }
  // 앞 배열과 뒷 배열을 합쳐 리턴해줌
  return previousArr.concat(lastArr);
}

let arr1 = [0, 1, 2, 3, 4, 5, 6]
let arr2 = [0, 1, 2, 3, 4, 5, 6]
arr1.splice(2, 2, 1);
console.log(arr1);
// [ 0, 1, 1, 4, 5, 6 ]
console.log(mySplice(arr2, 2, 2, 1));
// [ 0, 1, 1, 4, 5, 6 ]