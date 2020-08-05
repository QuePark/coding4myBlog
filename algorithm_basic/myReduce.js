/**
 * 함수로 인자를 받는 걸 이해하는 게 힘들었습니다.
 * 스코프와 클로저 개념을 먼저 이해하셔야 합니다.
 * 스코프와 클로저 개념은 다음 포스트를 확인해주세요.
 * reduce method는 reducer 함수가 필요합니다.
 */


// 배열과 함수 reducer, 초기값을 파라미터로 받습니다
let myReduce = function (arr, fn, initialValue) {
  if ( !Array.isArray(arr) ) {
    return 'ERROR: First parameter must be an array.\n'
  }
  if ( typeof(fn) !== 'function' ) {
    return 'ERROR: Second parameter must be a function.\n'
  }
  if ( initialValue === undefined ) {
    initialValue = arr[0];
  }
  let result;
  // 비어있는 accumulator에 initialValue;를 할당합니다.
  let accumulator = initialValue;
  // 배열의 모든 요소를 함수에 검사합니다.
  // 입력된 리듀서함수는 정의된 기능을 수행하고, 그 결과를 반환합니다.
  for ( let currentValue of arr ) {
    // accumulator와 currentValue를 함수에 파라미터로 넘겨주고,
    // 함수의 결과를 반환받아 변수 result에 할당합니다.
      result = fn( accumulator, currentValue );
    accumulator = fn( accumulator, currentValue );
  }
  // 결과 result를 리턴합니다.
  return result;
}

// 파라미터로 넘겨준 함수에 대한 설명입니다.
// 함수 reducer1을 표현식으로 선언하였습니다.
let reducer1 = function ( acc, cur ) {
  if ( acc < cur ) {
    return cur;
  }
  return acc;
}

// 함수 reducer2를 표현식으로 선언하였습니다.
let reducer2 = ( acc, cur ) => ( acc + cur );

let arr1 = [1, 2, 3, 10, 5, 6, 7, 8, 9, 4];
let arr2 = [11, 21, 31, 110, 15, 61, 17, 18, 19, 41];
let result1 = myReduce( arr1, reducer1, 0 );
let result2 = myReduce( arr2, reducer2, 0 );
console.log(arr1);
// [1, 2, 3, 10, 5, 6, 7, 8, 9, 4]
console.log(result1);
// 10
console.log(arr2);
// [11, 21, 31, 110, 15, 61, 17, 18, 19, 41];
console.log(result2);
// 344