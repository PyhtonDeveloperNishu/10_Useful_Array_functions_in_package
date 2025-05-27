// returns sum of arr elements
function sum (arr){
   return arr.reduce((acc,curr)=>acc+curr,0);
}

// return unique elements array
function unique(arr){
   let set = new Set(arr);
   let ans =[...set];
   return ans;
}

//  Calculates the average of the array.
function average(arr){
  let total = sum(arr);
  return total/arr.length;
}

// max() – Returns the maximum number.
function max(arr){
   return Math.max(...arr)// Spread the array into individual arguments
}

// min() – Returns the minimum number.
function min(arr){
   return Math.min(...arr)
}

// chunk(size) – Breaks array into chunks of given size.
function chunk(arr,size){
    let ans =  [];
    for(let i=0;i<arr.length;i+=size){
        ans.push(arr.slice(i,i+size))
    }
    return ans;
}

//flatten() – Flattens nested arrays into a single array.
function flatten(arr){
  let ans = [];
  for(const ele of arr){
    if(Array.isArray(ele)){  // to check if ele is array
      ans.push(...flatten(ele));  
    }else{
      ans.push(ele);
      // console.log(ans);
    }
  }
  return ans;
}


//compact() – Removes all falsy values.
function compact(arr){
  let ans = [];
  arr.forEach(ele => {
    if(ele){
      ans.push(ele);
    }
  });
  return ans;
}

//groupBy(callback) – Groups elements based on a callback function.
function groupBy(arr,callback){
    let obj ={};
    arr.forEach(ele=>{
      let key = callback(ele);
      obj[key] = obj[key] || [] ;
      obj[key].push(ele);
    });
    return obj;

    // u can also use reduce HOF
    // return arr.reduce((acc,curr)=>{
    // let key = callback(curr);
    // acc[key] = acc[key] || [];
    // acc[key].push(curr)
    // return acc;
    // },{});
    
}

//countBy(callback) – Counts elements based on a condition
function countBy(arr,callback){
    const ans = arr.reduce((acc,curr)=>{
     let key = callback(curr);
     acc[key] = (acc[key]+1) || 1
     return acc;
   },{});
   return ans;
}

module.exports = {
  sum,
  unique,
  average,
  max,
  min,
  chunk,
  flatten,
  compact,
  groupBy,
  countBy
};




//The slice() method in JavaScript is used to extract a section of an array or string and returns a new array or string without modifying the original. It takes two optional arguments: start and end, representing the starting and ending indices of the selection. 
// const array = [1, 2, 3, 4, 5];
// const newArray = array.slice(1, 4);  Returns [2, 3, 4]
// Original array remains unchanged: [1, 2, 3, 4, 5]