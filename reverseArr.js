const reverse = (arr) => {
    // for(let i = arr.length - 1; i >= 0; i--) {
    //     console.log(arr[i])
    // }
    // console.log(arr?.reverse())
let start = 0, end = arr.length - 1

while(start < end){
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
}
    console.log(arr)
}

reverse([9,8,7,6,5,4,3,2,1])