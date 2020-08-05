/**
 * 함수로 인자를 받는 걸 이해하는 게 힘들었습니다.
 * 스코프와 클로저 개념을 먼저 이해하셔야 합니다.
 * 스코프와 클로저 개념은 다음 포스트를 확인해주세요.
 */


// 배열과 함수를 파라미터로 받습니다
let myFilter = function (arr, fn) {
  if ( !Array.isArray(arr) ) {
    return 'ERROR: First parameter must be an array.\n'
  }
  if ( typeof(fn) !== 'function' ) {
    return 'ERROR: Second parameter must be a function.\n'
  }
  let result = [];
  // 배열의 모든 요소를 함수에 검사합니다.
  // 입력된 함수는 true, false를 반환합니다.
  for ( let value of arr ) {
    // value를 함수에 파라미터로 넘겨주고 true, false를 반환받습니다.
    if ( fn(value) ) {
      // fn(value)가 true인 경우 새로운 배열 result에 푸쉬합니다.
      result.push(value);
    }
  }
  // 새로운 배열 result를 리턴합니다.
  return result;
}

// 파라미터로 넘겨준 함수에 대한 설명입니다.
// ' x => (x > 3) ' 이 함수는 아래의 함수와 동일합니다
function functionName ( parameter ) {
  // parameter > 3 이 true면 true, false면 false를 리턴합니다
  return parameter > 3;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result1 = myFilter( arr, x => (x > 3) );
let result2 = myFilter( arr, functionName );
console.log(arr);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(result1);
// [4, 5, 6, 7, 8, 9, 10]
console.log(result2);
// [4, 5, 6, 7, 8, 9, 10]
