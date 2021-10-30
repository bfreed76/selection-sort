function selectionSort(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i+1]) {
      
    }
  }

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

/* iterate thru arr, finding the smallest variable
then unshifting it to the front of the array. Repeat
until iterations = arr.length.
*/ 
