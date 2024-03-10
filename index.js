const sortEs = require('sort-es');
const sortIds = require('sort-ids');
const colors = require('colors');
const rxjs = require('rxjs');
const mitt = require('mitt');
const validator = require('validator');
const lodash = require('lodash');

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // Introduce a variable to mark whether a swap has occurred in this round
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // A swap occurred
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    // If no swap occurred, the array is already sorted, so we can break early
    if (!swapped) {
      break;
    }
  }
  return arr;
}

module.exports = bubbleSort;
