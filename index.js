function bubbleSort(arr) {
 let n = arr.length;
 for (let i = 0; i < n - 1; i++) {
   for (let j = 0; j < n - i - 1; j++) {
     if (arr[j] > arr[j + 1]) {
       // 交换元素
       let temp = arr[j];
       arr[j] = arr[j + 1];
       arr[j + 1] = temp;
     }
   }
 }
 return arr;
}

module.exports = bubbleSort;