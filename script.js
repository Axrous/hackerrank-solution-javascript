//solve me first
function solveMeFirst(a, b) {
    return a + b;
}

//Simple Array Sum
function simpleArraySum(ar) {
    // Write your code here
    let sum = 0;
   for(let i=0;i<ar.length;i++) {
       sum += ar[i];
   }
   return sum;
}

//Compare the Triplets
function compareTriplets(a, b) {
    // Write your code here
    let sum = [0, 0];
    for(let i=0;i<a.length;i++){
        if(a[i] > b[i]) {
            sum[0]+=1;
        } else if(a[i] < b[i]) {
            sum[1]+= 1
        }
    }
    return sum;
}

//A Very Big Sum
function aVeryBigSum(ar) {
    // Write your code here
    let sum = 0;
    for (let i=0;i<ar.length;i++) {
        sum += ar[i];
    }
    return sum;
}

//Diagonal Difference
function diagonalDifference(arr) {
    // Write your code here
    let sum1 = 0;
    let sum2 =0;

    for(let i=0;i<arr.length;i++) {
        sum1 += arr[i][i];
        sum2 += arr[arr.length - 1 -i][i];
}

    return Math.abs(sum1 - sum2);
}

//Plus Minus
function plusMinus(arr) {
    // Write your code here
    let plus = 0;
    let minus = 0;
    let zero = 0;
    let aleng = arr.length
    for (let i=0;i<aleng;i++){
        if(arr[i] < 0) {
            minus+= 1;
        } else if(arr[i] > 0){
            plus++;
        } else if(arr[i] === 0) {
            zero++;
        }
    }
     plus = plus/aleng;
    minus = minus/aleng;
    zero = zero/aleng;
    
    return console.log(plus.toFixed(aleng), '\n',minus.toFixed(aleng), '\n',zero.toFixed(aleng));
}

//StairCase
function staircase(n) {
    // Write your code here
    var output = '';
    for(var i =0; i < n; i++) {
        for(var j = n-1; j > i; j--) {
               output += " ";
        }
        for(var k = 0; k <= i; k++) {
            output += "#";
        }
        output += "\n";
    }

    console.log(output);
}

//Mini-Max Sum
function miniMaxSum(arr) {
    // Write your code here
    let minMax = [];
    let sum = 0;
    for(let i=0;i<arr.length;i++) {
        for(let j=0;j<arr.length;j++) {
            sum += arr[j];
        }
        sum = sum - arr[i];
        minMax.push(sum);
        sum = 0;
    }
    let min = Math.min(...minMax);
    let max = Math.max(...minMax);
    return console.log(min, max);
    
}

//Birtday Cake Candles
function birthdayCakeCandles(candles) {
    // Write your code here
    let sum = 0;
    let max = Math.max(...candles);
    for(let i=0;i<candles.length;i++) {
        if(candles[i] === max) {
            sum += 1
        }
    }
    return sum;
}