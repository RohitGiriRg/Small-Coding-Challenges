//Problem 1: Sum of Array

function sumArray(arr){
    let sum = 0;

    for (let i=0; i< arr.length; i++){
        sum = sum + arr[i];
    }

    return sum;
}

console.log(sumArray([1,2,3,4]));

//🧩 Problem 2: Count Even Numbers

function countEven(arr){
    let count = 0;

    for(let i=0; i< arr.length; i++){
        if(arr[i]%2 === 0 ) {
            count++;
        }
    }

    return count;
}

console.log(countEven([1,2,3,4,5,6]));

// 🧩 Problem 3: Reverse a String
function reverseString(str){
    let result = "";

    for (let i=str.length -1; i >= 0; i--){
        result = result + str[i];
    }

    return result;
}

console.log(reverseString("hello"));

// 🧩 Problem 4: Find Maximum Number

function findMax(arr){
    let max = arr[0];

    for(let i=1; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }

    return max;
}

console.log(findMax([3,7,2, 9,5]));


// 🧩 Problem 5: Palindrome Check

function isPalindrome(str){
    let left = 0;
    let right = str.length -1;

    while (left<right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("madam"));


// Problem 6: find a minimum number

function findMin(arr){
    let min = arr[0];

    for(let i=1; i<arr.length; i++){
        if(arr[i]< min){
            min = arr[i];
        }
    }

    return min;
}

console.log(findMin([5,2,9,1,7]));

// Problem 7: Sum of Even Number

function sumEven(arr){
    let sum = 0;

    for(let i=0; i< arr.length; i++){
        if(arr[i] % 2 === 0){
            sum = sum + arr[i];
        }
    }

    return sum;
}

console.log(sumEven([1,2,3,4,6]));

// Problem 8: Count Vowels in String

function countVowels(str){
    let count = 0;

    for (let i=0; i < str.length; i++){
        let ch = str[i];

        if(
            ch ==="a" || ch==="e" ||
            ch ==="i" || ch==="o" ||
            ch ==="u"
        ){
            count++
        }
    }

    return count;
}



// Problem 9: find index of Element

function findIndex(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i]=== target){
            return i;
        }
    }

    return -1;
}

console.log(findIndex([10,20,30,40],30))


// Problem 10: Remove Duplicates

function removeDuplicates(arr){
    let result = [];

    for(let i=0; i<arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(removeDuplicates([1,2,2,3,4,4]));


// Problem 11: Factorial

function factorial(n){
    let result = 1;

    for(let i=1; i<-n; i++){
        result = result * i;
    }

    return result;
}

console.log(factorial(5));

// Problem 12: Check Prime Number

function isPrime(n){
    if(n<=1)return false;

    for(let i=2; i<n; i++){
        if(n%i===0){
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));