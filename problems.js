function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let newArr = [];
    for(i = 1; i < arr.length; i += 2){
            newArr.push(arr[i]);
    }
    return newArr;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let newArr = [];
    for(i = arr.length - 1; i >= 0; i -= 1){
        if(i % 2 !== 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    //bedoeling is dat elk getal dat tot de ² macht wordt gedaan - als de uitkomst daarvan ook een ² macht is van 2, dan mag dit getal geprint worden.
    // hoe ik dit nakijk -- geen idee!
    let newArr = [];
    for(i = 0; i < arr.length; i++){
        if((arr[i] ** 2) % 2 === 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    //vraag is hetzelfde als hierboven, geen idee hoe ik dat nakijk!
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let newArr = [];
    for(i = 0; i < arr.length/2; i++){
        newArr.push(arr[i]);
    }
    return newArr;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    //wanneer maar 1 cijefr ingegeven zal worden zal uitkomst undefined zijn. hierdoor loopt het mis - krijg niet opgelost.
    let newArr = [];
    for(i = arr.length/2; i < arr.length; i++){
        Math.ceil(i);
        newArr.push(arr[i]);
    }
    return newArr;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
