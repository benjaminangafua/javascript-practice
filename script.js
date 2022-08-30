
// Sum of two numbers
const add =(addend1,addend2)=>Number(addend1)+Number(addend2)


// Quotient of two numbers
const divide = (dividend, divisor)=>Number(dividend)/Number(divisor)

// Product of two numbers
const multiply =(multiplicand,multiplier)=>Number(multiplier)* Number(multiplicand)

//Difference of two numbers
const subtract =(minuend,subtrahend)=> Number(minuend)-Number(subtrahend)


 let arrNum = 0
 /**
 * A function that takes an array of numbers and return the sum
 * @param {Array} arr - array of numbers
 */
const sumArray=(arr)=>arr.forEach(num=>arrNum += num)

/**
 * 
 * @param {Array} arr - array of items
 * @returns - returns the first element in the array
 */
const returnFirstIndex =(arr)=>arr[0]

/**
 * A function that prints all odd numbers less than 100
 */
const oddNumberLessThan100=()=>
    {
    for(let i =0; i<= 100; i++) 
        if (i%2===1)
            console.log(i) 
}

/**
 * A function that prints all even numbers less than 100
 */
const evenNumberLessThan100 =()=>{
    for(let i =0; i<= 100; i++) 
        if (i%2===0)
            console.log(i) 
}


/**
 * A function that returns divisibility of 2 as true otherwise false
 * @param {Number} num - integer
 */
const divisibilityOfTwo =(num)=>(num%2===0)?true:false


/**
 * A function that returns divisibility of 5 as true otherwise false
 * @param {Number} num - integer
 */
 const divisibilityOfFive =(num)=>(num%5===0)?true:false

 /**
  * A function that when given an array of letters, returns the number of vowels within the array given.
  * @param {Array} arr - array of letters
  */
const sumOfVowels=(arr)=>{
    let num = 0;
    let vowels = ['a', 'e', 'i', 'o','u','A','E','I','O','U']
    for(let i = 0; i<arr.length; i++){
        if(vowels.includes(arr[i])){
            num++
         }
    }
    // console.log(num)
    return num
}
sumOfVowels(['a', 'e', 'i', 'o','u','A','E','I','O','U'])

 /**
  * A function that receives an array of numbers and returns an array containing only the positive numbers.
  * @param {Array} arr - array of numbers
  */
const arrOfPositiveInt =(arr)=>{
    let index = []
    for(let i = 0; i< arr.length; i++){
        if(arr[i]>0){
            index.push(arr[i])
        }
    }
    // console.log(index)
    return index
}



/**
  * A function that takes an array of numbers and returns the maximum number in the array given
  * @param {Array} arr - array of numbers
  */
 const maxInt =(arr)=>{
    let max;
    for(let i = 0; i< arr.length; i++){
        if(arr[i]<arr[i+1]){
            max = arr[i+1]
        }
    }
    console.log(max)
    return max
}


/**
  * A function that takes an array as an input and returns the reverse of the array given.
  * @param {Array} arr - array of numbers
  */
 const reversedArrElem =(arr)=>{
    let reverse = []
    let lng = arr.length - 1

    for(let i = 0; i< arr.length; i++){
        reverse.push(arr[lng])
        lng--
    }

    // console.log(reverse)
}
reversedArrElem(["A","B","C","D"])

/**
 * A function that takes two arrays 
 * @param {Array} arr1 - first set of array
 * @param {Array} arr2 - second set of array
 * @return {Array} - return an array with elements that are in the first array but not in the second
 */
const onlyElemOfFirstArr =(arr1,arr2)=>{
    let firstArr=[]
 for(let i = 0; i<arr1.length; i++)
 {
    if(!arr1.includes(arr2[i]))
        {
            firstArr.push(arr2[i])
        } 
 }
//  console.log(firstArr)
}
onlyElemOfFirstArr(["A","B","C","D"], ["a","e","i",'o','C'])

/**
 * A function that takes two arrays 
 * @param {Array} arr1 - first set of array
 * @param {Array} arr2 - second set of array
 * @return {Array} - return an array with elements that are in the second array but not in the first
 */
const onlyElemOfSecondArr =(arr1,arr2)=>{
    let secondArr=[]
 for(let i = 0; i<arr1.length; i++)
 {
    if(!arr2.includes(arr1[i]))
        {
            secondArr.push(arr1[i])
        }  
    }
//  console.log(secondArr)
}
onlyElemOfSecondArr(["A","B","C","D"], ["A","B","i",'o','C'])

/**
 * A function that takes two arrays 
 * @param {Array} arr1 - first set of array
 * @param {Array} arr2 - second set of array
 * @return {Array} - return an array with elements that are in the both arrays
 */
const equivElement =(arr1,arr2)=>{
    let equalElement = []
    for(let i = 0; i<arr1.length; i++){ 
        if(arr2.includes(arr1[i])){
            equalElement.push(arr1);
        }
    }
    return equalElement;
}
equivElement(["A","B","C","D"], ["a","e","i",'o','C'])

/**
 * Write a program that prints the numbers from 1 to 100
    a. for multiples of ‘3’ print “Fizz” instead of the number
    b. for the multiples of ‘5’ print “Buzz”. 
    c. for multiples of ‘3’ and ‘5’  print “FizzBuzz”
 */
const createFizzBuzz =()=>{
    for(let i = 1; i<=100; i++){

        if(i%5===0 && i%3===0) 
        {
            console.log(`${i}: FizzBuzz\n`)
        }else if(i%3===0)
        {
            console.log(`${i}: Fizz\n`)
        }
        else if(i%5===0) 
        {
            console.log(`${i}: Buzz\n`)
        } 
    }
}
// createFizzBuzz()

/**
 * A function that accepts an array of numbers as an input and returns a new array with distinct elements.
 * @param {Array} num - array of numbers
 */
const distinctElement = (arr)=>{
    let distinctChar = []
    for (let i = 0; i< arr.length; i++){
        if(!distinctChar.includes(arr[i])){
            distinctChar.push(arr[i])
        }else{
            // console.log(`${arr[i]}: False`)
        }
    }
    // console.log(distinctChar)
    return distinctChar
}
distinctElement([1,2,3,4,5,5,22,4,4,5,2,3])
/**
 * A function that accepts an array as input and returns the longest word in the array.
 * @param {Array} num - array of words
 */
 const returnLongestWord = (arr)=>{

    let lngWd;
    for(let i = 0; i<= arr.length; i++)
    {
        
      if(arr[i+1] != undefined)
      {
        if(arr[i].length > arr[i+1].length)
        {
            lngWd = arr[i -1]
        }
      }
        
     }
    //  console.log(lngWd)
    return lngWd
}
returnLongestWord(["Bee", "James", "Connie","Connie", "Ai"])


/**
 * A function that takes an array of letters as input and returns the letter with the most frequency.
 * @param {Array} num - array of letters
 */
 const returnRepeatedLetter = (arr)=>{
    let letter =[];
    let num = 0
    let freq = []
    for(let i =0; i<arr.length; i++){
       
        if(!letter.includes(arr[i]))
        {
            letter.push(arr[i])
        }
        else{
            freq.push(num++)
            if(arr[num]<arr[i+1] ){
                // console.log(arr[i+1])
            }
        }
    }
}
returnRepeatedLetter(["a","e","i",'o','C','e','a','e','b','o','e','d','f'])

