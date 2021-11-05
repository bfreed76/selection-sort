function selectionSort(arr) {
  let newArr = []
  let counter = arr.length
  for (let i = 0; i < counter; i++) {
    let min = Math.min(...arr)
    let index = arr.indexOf(min)
    arr.splice(index, 1)
    newArr.push(min)
    // console.log("min: ", min, "index: ", index, "arr:", newArr)
  }

  return newArr
}

if (require.main === module) {

  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [ 2, 3, 4, 5, 6]")
  console.log("=>", selectionSort([4,5,3,6,2]))

  // BENCHMARK HERE, and print the average runtime
  
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const startTime = Date.now();

  const longerInput = [];

  for (let i = 0; i < 1000; ++i) {
    selectionSort([2,1])
    selectionSort(longInput);
  }

  const avgTime = (Date.now() - startTime) / 2000

  console.log(avgTime)

  // console.log("longInput/100x: ", selectionSort(longInput) )
  // console.log("longerInput/1000x: ", selectionSort(longerInput) )

//   store the current time in a variable called start time
// loop 1000 times:
//   execute the method using a small input, e.g. three items if input is an Array
//   execute the method using a larger input, e.g. 100 items if input is an Array
// average runtime = (current time - start time) / 2000


module.exports = selectionSort;

/* iterate thru arr, finding the smallest variable
then unshifting it to the front of the array. Repeat
until iterations = arr.length.
*/ 

}
