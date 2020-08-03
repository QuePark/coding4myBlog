// 오름차순으로 정렬이 돼있는 지 확인하는 함수
let isSortedToincrease = function (arr) {
    for ( let i = 1; i < arr.length; i++ ) {
      if ( arr[i-1] > arr[i] ) {
        return false;
      }
    }
    return true;
  }
  
  // 오름차순 정렬
  let increaseSortNumber = function (arr) {
    // 배열이 숫자로만 이루어져 있는지 검사
    for ( let value of arr ) {
      if ( typeof(value) !== 'number' ) {
        return 'This function is only for number. Plz, enter an array consist of number';
      }
    }
    // arr의 길이가 0 또는 1이면 입력값 그대로 리턴
    if ( arr.length < 2 ) {
      return arr;
    }
    // // js에서 허용된 가장 큰 숫자를 배열의 앞 에 더미로 추가
    let infinity = Number.POSITIVE_INFINITY;
    arr.unshift(infinity);// 맨 앞에 넣었지만, 가장 큰 숫자이므로 정렬이 잘 되면 맨 마지막에 있을 예정
    // 무한 루프 ( 왠만하면 쓰지마세요 )
    while ( true ) {
      if ( isSortedToincrease(arr) ) { // 오름차순으로 정렬이 돼있는 지 확인
        arr.pop(); // 정렬이 잘 돼 있으면 더미값(infinity)를 pop()해주고 리턴
        return arr;
      }
      // 배열을 순회하며 이전 숫자와 지금 숫자를 비교한 뒤 위치를 바꿔주자
      for ( let i = 1; i < arr.length; i++ ) {
          // a가 b보다 크면 a와 b의 값을 바꾼다
        if ( arr[i-1] > arr[i] ) {
          [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
        }
      }
    }
  }
let arr = [0, 1, 3, 2];
increaseSortNumber(arr);
console.log(arr);
// [ 0, 1, 2, 3 ]
let arr1 = [0,3,20,10,5,16,49,22,11,2,3];
increaseSortNumber(arr1);
console.log(arr1);
/**
[
   0,  2,  3,  3,  5,
  10, 11, 16, 20, 22,
  49
]
 */