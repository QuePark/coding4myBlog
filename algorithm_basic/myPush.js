// push()는 배열의 길이를 1 늘려주고 마지막 요소의 인덱스(배열의 길이 + 1)에 넣고자하는 요소를 삽입하고 리턴
let myPush = function (arr, element) {
  if ( !Array.isArray(arr) ) {
    return 'ERROR: First parameter must be an array.\n'
  }
  arr[arr.length] = element;
  return arr;
}
let arr = [1, 2, 3, 4, 5];
console.log(arr);
// [1, 2, 3, 4, 5]
myPush(arr, 6);
console.log(arr);
// [1, 2, 3, 4, 5, 6]